const multer = require('multer')
const moment = require('moment')

const storage = multer.diskStorage({
  destination(req, fl, cb) {
    cb(null, 'uploads/')
  },
  filename(req, fl, cb) {
    const date = moment().format('DDMMYYYY-HHmmss_SSS')
    cb(null, `${date}-${fl.originalname}`)
  }
})

const fileFilter = (req, fl, cb) => {
  if (fl.mimetype === 'image/png' || fl.mimetype === 'image/jpeg') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const limits = {
  fileSize: 1024 * 1024 * 5
}

module.exports = multer({
  storage,
  fileFilter,
  limits
})