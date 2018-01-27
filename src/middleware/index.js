import 'colors'

export const log = (req, res, next) => {
  console.log(`${req.method}`.green, `${req.originalUrl}`)
  next()
}
