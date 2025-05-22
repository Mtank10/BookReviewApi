const {PrismaClient} = require('@prisma/client')
const db = new PrismaClient()

exports.addBook = async (req, res) => {
  const { title, author, genre } = req.body;
  const book = await db.book.create({ data: { title, author, genre } });
  res.status(201).json(book);
};

exports.getBooks = async (req, res) => {
  const { page = 1, limit = 10, author, genre } = req.query;
  const filters = { ...(author && { author }), ...(genre && { genre }) };

  const books = await db.book.findMany({
    where: filters,
    skip: (page - 1) * limit,
    take: +limit,
  });
  res.json(books);
};

exports.getBookDetails = async (req, res) => {
  const id = +req.params.id;

  const book = await db.book.findUnique({
    where: { id },
    include: {
      reviews: {
        take: 10,
        orderBy: { createdAt: "desc" },
        include: { user: true },
      },
    },
  });

  if (!book) return res.status(404).json({ message: "Book not found" });

  const avgRating =
    book.reviews.reduce((acc, r) => acc + r.rating, 0) / book.reviews.length || 0;

  res.json({ ...book, avgRating: avgRating.toFixed(2) });
};

exports.searchBooks = async (req, res) => {
    const { q } = req.query;
    const books = await db.book.findMany({
      where: {
        OR: [
          { title: { contains: q, mode: "insensitive" } },
          { author: { contains: q, mode: "insensitive" } },
        ],
      },
    });
    res.json(books);
  };
  