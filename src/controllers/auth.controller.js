const { PrismaClient } = require("@prisma/client");
const { hashPassword, comparePassword } = require("../utils/bcrypt");
const { generateToken } = require("../utils/jwt");
const db = new PrismaClient();


exports.signup = async (req, res) => {
    const { email, password } = req.body;
    try {
      const hashed = await hashPassword(password);
      const user = await db.user.create({ data: { email, password: hashed } });
      res.status(201).json({ message: "User registered" });
    } catch {
      res.status(400).json({ message: "Email already exists" });
    }
  };

  exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await db.user.findUnique({ where: { email } });
    if (!user || !(await comparePassword(password, user.password)))
      return res.status(401).json({ message: "Invalid credentials" });
  
    const token = generateToken({ id: user.id, email: user.email });
    res.json({ token });
  };