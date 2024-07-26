const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Por favor introduza o nome"],
        },
        email: {
            type: String,
            required: [true, "Por favor introduza o email"],
        },
        password: {
            type: String,
            required: [true, "Por favor introduza o password"],
        },
        confirmPassword: {
            type: String,
            required: [true, "Por favor introduza o password novamente"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);