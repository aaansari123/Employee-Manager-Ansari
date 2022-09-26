// import { fileURLToPath } from 'url';

const fs = require('fs');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}


function createHTML(list) {
    let boilerplate = `<!DOCTYPE html>
<html lang="en-US">

  <head>
    <meta charset="UTF-8">
    <title>Hello HTML!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel = "stylesheet" href = 'style.css'>
  </head>

  <body>
    <div class="card" style="width: 18rem;">

        <div class="card-body">
          <h5 class="card-title">${list[0].getRole()}</h5>
          <p class="card-text">${list[0].getName()}</p>
          <p class="card-text">${list[0].getId()}</p>
          <a href = "mailto: ${list[0].getEmail()}">Send Email</a>
          <p class="card-text">${list[0].getUnique()}</p>
        </div>
        <div class="card-body">
            <h5 class="card-title">${list[1].getRole()}</h5>
            <p class="card-text">${list[1].getName()}</p>
            <p class="card-text">${list[1].getId()}</p>
            <a href = "mailto: ${list[1].getEmail()}">Send Email</a>
          <p class="card-text">${list[1].getUnique()}</p>
          </div>
          <div class="card-body">
            <h5 class="card-title">${list[2].getRole()}</h5>
            <p class="card-text">${list[2].getName()}</p>
            <p class="card-text">${list[2].getId()}</p>
            <a href = "mailto: ${list[2].getEmail()}">Send Email</a>
          <p class="card-text">${list[2].getUnique()}</p>
          </div>
          <div class="card-body">
            <h5 class="card-title">${list[3].getRole()}</h5>
            <p class="card-text">${list[3].getName()}</p>
            <p class="card-text">${list[3].getId()}</p>
            <a href = "mailto: ${list[3].getEmail()}">Send Email</a>
          <p class="card-text">${list[3].getUnique()}</p>
          </div>
          <div class="card-body">
            <h5 class="card-title">${list[4].getRole()}</h5>
            <p class="card-text">${list[4].getName()}</p>
            <p class="card-text">${list[4].getId()}</p>
            <a href = "mailto: ${list[4].getEmail()}">Send Email</a>
          <p class="card-text">${list[4].getUnique()}</p>
          </div>
      </div>
  </body>

</html>`
writeToFile('./dist/index.html', boilerplate);
}
function createCSS(){
    let css = `.h1{
        font-size: 34px;
        color: green;
    }
    .p{
        color: green;
        font-size: 24px;
    }
    .h2{
        color: blue;
    }
    .card {
        display: flex;
        flex-direction: row;
    }`
    writeToFile('./dist/style.css', css);
}


module.exports = {createHTML,createCSS};
