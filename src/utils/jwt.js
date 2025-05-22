const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

exports.generateToken = (payload) => jwt.sign(payload, JWT_SECRET, {expiresIn: '1d'})

exports.verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}