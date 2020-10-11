const fs = require('fs')

fs.appendFile('myText.txt', 'Hello Vadim', function() {
    console.log('Berhasil rubah/nulis file.')
}) 