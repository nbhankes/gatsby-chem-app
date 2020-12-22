const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt
const jwt = require("jsonwebtoken")
const User = require("./user")

// local strategy
exports.local = passport.use(
  new LocalStrategy({ usernameField: "email" }, User.authenticate())
)
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
// JWT strategy
exports.generateToken = user => {
  return jwt.sign(user, `${process.env.SECRET_KEY}`, { expiresIn: 86400 })
}
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: `${process.env.SECRET_KEY}`,
}
exports.jwtStrategy = passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    if (err) return done(err, false)
    else if (user) return done(null, user)
    else return done(null, false)
  })
)
// verifying user
exports.verifyUser = passport.authenticate("jwt", { session: false })
