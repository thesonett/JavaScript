import ollama from 'ollama'

// we don't need this!
// const apiUrl = 'http://localhost:11434/api/generate'

const data = {
    role: 'user',
    content: 'what is the capital of india?'
}

const data2 = {
    role: 'user',
    content: 'who is lord shiva?'
}

const response = await ollama.chat({
    model: 'llama3.2',
    messages: [data, data2],
    stream: true
})

// console.log(response.message.content)
for await (const part of response) {
    process.stdout.write(part.message.content) // without newline
    // console.log(part.message.content) // adds newline
}