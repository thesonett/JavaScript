const apiUrl = 'http://localhost:11434/api/generate'
const message = {
    model: 'llama3.2',
    prompt: 'in short, what is the age of the universe?',
    stream: false,
}

async function getData() {
    const response = await fetch(apiUrl, {
        method: 'post',
        body: JSON.stringify(message)
    })

    const data = await response.json()
    return data
}

getData().then((data) => {
    console.log(data.response)
}).catch((error) => {
    console.error(error)
})