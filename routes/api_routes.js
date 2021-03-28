const router = require('express').Router();
const userRouter = require('./users');
const productRouter = require('./product');

router.use('/products', productRouter);

router.use('/users', userRouter);

module.exports = router;