const router = require("express").Router();
const { authenticate } = require("../middlewares/auth.middleware");
const {
  addBook,
  getBooks,
  getBookDetails,
  searchBooks,
} = require("../controllers/book.controller");

router.get("/", getBooks);
router.get("/search", searchBooks);
router.get("/:id", getBookDetails);
router.post("/", authenticate, addBook);

module.exports = router;
