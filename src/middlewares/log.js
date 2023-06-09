const logMiddleware = (req, res, next) => {
  res.locals.success_message = req.flash('success_message');
  res.locals.error_message = req.flash('error_message');
  next();
}

module.exports = logMiddleware;