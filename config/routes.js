/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {
  'GET /login': { view: 'login' },
  'POST /login':'AuthController.login',
  'get /logout': 'AuthController.logout',
  'GET /registration':{view:'registration'},
 'POST /registration':'AuthController.register',
  'GET /dashboard':'UserController.dashboard',
  'GET /admin':{view:'admin'},
  'GET /user':{view:'user'},
  'GET /viewProfile':'UserController.viewProfile',
  'GET /userProfile/:id':{view:'userProfile'},
  'Get /updateUser':'UserController.updateUser',
  'GET /updateProfile':{view:'UpdateProfile'},
  'POST /updateprofile':'UserController.updateUser',
  'GET /editPassword':{view:'editPassword'},
  'POST /editPassword':'UserController.updatePassword',
  'GET /displayUser':'AdminController.displayUser',
  'GET /userList':{view:'userList'},
  'GET /pendingUser':'AdminController.pendingUser',
  'GET /pendingUserList':{view:'pendingUserList'},
  'GET /approvedUser/:id':'AdminController.approvedUser',
  'GET /approvedList':'AdminController.approvedList',
  'GET /approvedUserList':{view:'approvedUserList'},
  'GET /forgotPassword':'UserController.forgotPassword',
  'GET /changePassword':{view:'changePassword'},
  'POST /changePassword':'UserController.forgotPassword',
  'GET /setPassword/:id':'UserController.resetPassword',
  'POST /setPassword':'UserController.resetPassword',
  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'login'
  }

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
