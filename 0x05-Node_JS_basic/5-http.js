const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(process.argv[2]);
      const result = res.end(`${students.join('\n')}`);
      console.log(result);
    } catch (error) {
      res.end(error.message);
    }
  }
  res.end();
});

app.listen(1245);
module.exports = app;
