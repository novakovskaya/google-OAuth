module.exports = cb => async (req, res, next) => {
  return cb(req, res, next).catch(error => next(error));
};
