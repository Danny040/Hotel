const bcrypt = require('bcrypt');

module.exports = async function(req, res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var fullName = firstName + " " + lastName;
    var email = req.body.email;
    var password = req.body.password;

    var hashPassword = await bcrypt(password, 10);

    var newUser = {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        email: email,
        password: hashPassword
    };
    res.json(newUser);
}