const {PrismaClient} = require("@prisma/client");
const db = new PrismaClient();

exports.addReview = async (req, res) => {
  const userId = req.user.id;
  const bookId = +req.params.id;
  const { rating, comment } = req.body;

  try {
    const review = await db.review.create({
      data: { rating, comment, bookId, userId },
    });
    res.status(201).json(review);
  } catch {
    res.status(400).json({ message: "You already reviewed this book" });
  }
};

exports.updateReview = async (req, res) => {
  const id = +req.params.id;
  const userId = req.user.id;
  const { rating, comment } = req.body;

  const review = await db.review.findUnique({ where: { id } });
  if (!review || review.userId !== userId)
    return res.status(403).json({ message: "Unauthorized" });

  const updated = await db.review.update({
    where: { id },
    data: { rating, comment },
  });

  res.json(updated);
};

exports.deleteReview = async (req, res) => {
  const id = +req.params.id;
  const userId = req.user.id;

  const review = await db.review.findUnique({ where: { id } });
  if (!review || review.userId !== userId)
    return res.status(403).json({ message: "Unauthorized" });

  await db.review.delete({ where: { id } });
  res.json({ message: "Review deleted" });
};
