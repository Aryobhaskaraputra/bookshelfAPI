const { 
  addBookHandler, 
  getAllBooksHandler, 
  getBooksByIdHandler, 
  editBookByIdHandler, 
  deleteBookHandler
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler:addBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler:getBooksByIdHandler, 
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler:editBookByIdHandler, 
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler:deleteBookHandler, 
  },
];

module.exports = routes;
