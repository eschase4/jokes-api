const router = require('express').Router()

router.get('/', (req, res) => {
    const data = { message: 'sup nerd'}
    res.json(data)
})

module.exports = router;