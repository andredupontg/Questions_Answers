const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, require: true}
});

const User = new mongoose.model("User", userSchema);

module.exports = {
    userSchema,
    User
}