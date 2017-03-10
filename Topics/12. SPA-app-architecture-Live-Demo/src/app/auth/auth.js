const passport = require("passport");
const Strategy = require("passport-http-bearer").Strategy;

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");

module.exports = (app, data) => {
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(session({
        secret: "Purple Unicorn",
        resave: true,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 }
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new Strategy((token, done) => {
        data.users.findByToken(token)
            .then((user) => {
                if (!user) {
                    return done(null, false);
                }

                return done(null, user, {
                    scope: "all"
                });
            });
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((token, done) => {
        return data.users.findByToken(token)
            .then((user) => done(null, user))
            .catch((err) => done(err));
    });
};