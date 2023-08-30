const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.send('<h4>wrong route silly billy</h4>')
})

module.exports = router;