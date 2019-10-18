const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../../config/db');
const config = require('../../config');
const User = db.User;

exports.getUserById = async (req, res) => {
    try {
        res.json({ success: true});
    } catch (error) {
        res.status(500).json({ success: false, message: error, result: 'Could not find user' });
    }
}

exports.createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        if (await User.findOne({ email })) {
            throw new Error(`Email ${email} is already taken`);
        }

        const user = new User({ firstName, lastName, email });

        if (password) {
            user.password = bcrypt.hashSync(password, 10);
        }

        await user.save();
        res.status(201).json({ success: true, message: 'Successfully created user'});
    } catch (error) {
        console.log('err', error);
        res.status(500).json({ success: false, message: 'Error creating user'});
    }  
    
}

exports.authenticateUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ sub: user.id }, config.secret);
            res.json({ success: true, message: 'Successfully logged in', token});
        }
    } catch (error) {
        console.log('err', error);
        res.status(500).json({ success: false, message: 'Error logging in'});
    }
}