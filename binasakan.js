const fs = require('fs')

fs.stat('myText.txt', function(err, stats) { // buat cek ada apa enggak fiel nya
    if (err) {
        return console.log(err)
    }

    console.log(stats)
})

fs.unlink('myText2.txt', function(err) {
    if (err) {
        return console.error(err)
    }

    console.log('sukses hapus')
}) 