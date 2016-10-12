var seedData = require('./seedData.json');
var seedDB = function (gun) {
    var users = gun.get('users');
    seedData.map(function (user) {
        users.set(gun.get('users/user/' + user.username).put(user));
    });
};

module.exports = seedDB;