const fs = require('fs');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err) : console.log('Success!')
    );
}


let boilerplate = `<!DOCTYPE html>
<html lang="en">
  <head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
	<script src="index.js"></script>
    <nav class = 'navbar'>
        <h2 class = 'h2'>${response.linkedin}</h2>
        <h2 class = 'h2'>${response.github}</h2>
    </nav>
    <div class = 'container-fluid'>
        <h1 class = 'h1'>Hi my name is ${response.name}.</h1>
        <p class = 'p'>I live in ${response.live}.</p>
        <p class = 'p'>I am ${response.age} years old.</p>
        <p class = 'p'>I was born in ${response.born}.</p>
    </div>
  </body>
</html>`
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
}`
writeToFile('index.html', boilerplate);
writeToFile('style.css', css);
    console.log(response)