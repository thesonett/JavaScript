const Bree = require('bree')

const bree = new Bree({
    defaultExtension: 'js',
    jobs: [
        {
            name: 'email',
            interval: 'at 12:00am'
        }
    ]
})

bree.start()