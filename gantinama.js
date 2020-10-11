const fs = require('fs')

fs.gantinama('myText.txt', 'myText2.txt', function(err) {
    if (err) {
        return console.error(err)
    }

    console.log('ok')
})