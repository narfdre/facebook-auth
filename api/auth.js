module.exports.routes = function(router, passport) {
  router.get('/facebook', passport.authenticate('facebook', { scope: 'email' }))
  router.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/users',
      failureRedirect: '/'
    })
  )

  return router
}
