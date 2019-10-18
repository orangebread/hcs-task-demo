const router = require('express').Router();

// Tasks
router.use('/api/tasks', require('../components/tasks/tasks.routes'));

// User/Login
router.use('/api/user', require('../components/user/user.routes'));

// health check
router.use('/api', (req, res) => {
    res.json({ success: true, message: 'Working!'});
});

// everything else
router.use('*', (req, res) => {
    res.json({ success: true, message: `Nothing to see here.` });
});

module.exports = router