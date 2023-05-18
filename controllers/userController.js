const User = require("../models/User")
exports.getAllUsers = async (req, res) => {
    try {
        const result = await User.find()
        res.json({
            success: true,
            message: "All Users Fetched Successfully",
            result
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: `Error ${error}`,

        })
    }
}
exports.addUsers = async (req, res) => {
    try {
        const { mobile } = req.body
        console.log(req.body);
        await User.create(req.body)
        const mobileRegex = /^\d{10}$/;
        if (!mobileRegex.test(mobile)) {
            return res.status(400).json({ error: 'Invalid mobile number format' });
        }
        res.json({
            success: true,
            message: " Users Added Successfully",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: `Error ${error}`,

        })
    }
}
exports.removeUsers = async (req, res) => {
    try {
        const { UserId } = req.params
        await User.findByIdAndDelete(UserId)
        res.json({
            success: true,
            message: " Users Removed Successfully",
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: `Error ${error}`,

        })

    }
}

exports.updateUsers = async (req, res) => {
    try {
        const { UserId } = req.params
        await User.findByIdAndUpdate(UserId, req.body)
        res.json({
            success: true,
            message: " Users updated Successfully",

        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: `Error ${error}`,

        })

    }
}