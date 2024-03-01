const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const message = 'This is the list of our students\n';
  try {
    const students = await countStudents(process.argv[2]);
    res.end(`${message}${students.join('\n')}`);
  } catch (error) {
    res.end(`${message}${error.message}`);
  }
});

app.listen(1245);
module.exports = app;
