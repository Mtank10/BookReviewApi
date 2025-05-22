const router = require("express").Router();
const { authenticate } = require("../middlewares/auth.middleware");
const {
  addReview,
  updateReview,
  deleteReview,
} = require("../controllers/review.controller");

router.post("/books/:id/reviews", authenticate, addReview);
router.put("/reviews/:id", authenticate, updateReview);
router.delete("/reviews/:id", authenticate, deleteReview);

module.exports = router;
