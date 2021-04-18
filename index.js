const fs = require('fs');
const https = require('https');

https
  .get('https://jsonplaceholder.typicode.com/posts', (res) => {
    let information = '';

    res.on('data', (data) => {
      information += data;
    });
    res.on('end', () =>
      fs.writeFile('result/posts.json', information, (err) => {
        if (err) throw err;
      })
    );
  })
  .on('error', (error) => console.error(error.message));
