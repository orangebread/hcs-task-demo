const router = require('express').Router();

// health check
router.use('/api', (req, res) => {
    res.json({ success: true, message: 'Working!'});
});

// Tasks
router.use('/api/tasks', require('../components/tasks/tasks.routes'));

// catch everything else
router.use('*', (req, res) => {
    res.json({ success: true, message: `Nothing to see here.` });
});

module.exports = router