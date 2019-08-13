const server = require("./server");

const port = 2345;

server.listen(port, () => {
  console.log(`Server running successfully on port ${port}.`);
});
