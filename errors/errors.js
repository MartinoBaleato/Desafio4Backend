function errors (err, req, res, next) {
    console.error(err.stack)
    const message = err.message || 'Error'
    const status = err.statusCode || 500
    res.status(status).json({
      error: message,
      status
    })
  }
  
  module.exports = errors