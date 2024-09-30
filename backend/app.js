require('dotenv').config();
const express = require('express');
const app = express();

// If process.env.PORT is set in .env files, 
//   set process.env.PORT to port variable; 
// otherwise, defaults port variable to 3000
const port = process.env.PORT || 3000;
console.log(process.env['PORT'])

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})