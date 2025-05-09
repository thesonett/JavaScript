const fs = require('fs')
const pdfParser = require('pdf-parse')
const { CharacterTextSplitter } = require('@langchain/textsplitters')
const { OllamaEmbeddings } = require('@langchain/ollama')
const { ChromaClient } = require('chromadb')
const ollama = require('ollama')

// Extract Text from PDF Files
async function extractPDFContents() {
    const pdfBuffer = fs.readFileSync('./data/bme-fund1.pdf')
    const contents = await pdfParser(pdfBuffer)

    return contents.text.split(/\s+/).slice(0, 800).join(' ');
}

// Split into small chunks
async function splitTextIntoChunks(text) {
    const splitter = new CharacterTextSplitter({
        chunkSize: 1200,
        chunkOverlap: 400,
    })

    return await splitter.splitText(text)
}

// Send the chunks to the embedding model
async function embedChunks(chunks) {
    const embeddings = new OllamaEmbeddings({
        model: 'nomic-embed-text'
    })

    const embeddedChunks = await embeddings.embedDocuments(chunks)
    return embeddedChunks
}

// Save embeddings to vector database
async function saveToVectorDatabase(chunks, embeddings) {
    const client = new ChromaClient({path: 'http://localhost:8000'})

    const collection = await client.getOrCreateCollection({ name: 'pdf-embeddings' })
    const ids = chunks.map((_, i) => `chunk-${i}`)
    
    await collection.add({
        ids,
        embeddings,
        documents: chunks,
    })

    console.log('✅ Embeddings saved!')
}

// Search similar docs based on query/question
async function searchDocs(query) {
    const embeddings = new OllamaEmbeddings({
        model: 'nomic-embed-text',
    })

    const queryEmbedding = await embeddings.embedQuery(query)

    const client = new ChromaClient({ path: 'http://localhost:8000' })
    const collection = await client.getOrCreateCollection({ name: 'pdf-embeddings' })

    const result = await collection.query({
        queryEmbeddings: queryEmbedding,
        top_k: 5,
    })

    return result
}

// display similar docs
const displaySimilarDocs = (similarDocs) => {
    console.log('Similar Documents:');
    
    // Assuming `similarDocs` contains a `documents` field
    if (similarDocs && similarDocs.documents && Array.isArray(similarDocs.documents)) {
        similarDocs.documents.forEach((doc, index) => {
            console.log(`${index + 1}. ${doc.content || doc}`);  // Check if `content` exists or just print the doc itself
        });
    } else {
        console.log('No similar documents found or invalid result structure.');
    }
};

async function deleteDataFromChroma() {
    const client = new ChromaClient({ path: 'http://localhost:8000' });

    const collectionName = 'pdf-embeddings';
    const collection = await client.getOrCreateCollection({ name: collectionName });

    await collection.delete({
        ids: ['chunk-0'],
    });

    console.log('✅ Document(s) deleted!');
}

extractPDFContents()
.then((data) => {
    return data
}).then(async (data) => {
    // deleteDataFromChroma()

    const chunks = await splitTextIntoChunks(data)
    const embeddedChunks = await embedChunks(chunks)

    await saveToVectorDatabase(chunks, embeddedChunks)

    const query = 'what is the document is all about?'
    const similarDocs = await searchDocs(query)

    displaySimilarDocs(similarDocs)
})