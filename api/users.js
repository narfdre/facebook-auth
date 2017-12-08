module.exports.routes = function(router, passport) {
  router.get('/', function(req, res, next) {
    res.send('Users')
  })

  return router
}
