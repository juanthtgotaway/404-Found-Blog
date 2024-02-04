const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const blogRoutes = require('./api/blogRoutes');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;
