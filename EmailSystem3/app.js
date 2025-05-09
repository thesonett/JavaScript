const Bree = require('bree')

const bree = new Bree({
    defaultExtension: 'js',
    jobs: [
        {
            name: 'email',
            interval: 'at 04:36pm'
        }
    ]
})

bree.start()