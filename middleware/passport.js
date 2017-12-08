const passport = require('passport')
const facebookStat = require('passport-facebook')
const config = require('config')

const facebook = config.auth.facebook

passport.serializeUser(function(user, done) {
  done(null, user)
})
passport.deserializeUser(function(obj, done) {
  done(null, obj)
})

// config
passport.use(
  new facebookStat(
    {
      clientID: facebook.clientID,
      clientSecret: facebook.clientSecret,
      callbackURL: facebook.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function() {
        return done(null, profile)
      })
    }
  )
)

module.exports.setup = function() {
  return passport
}
