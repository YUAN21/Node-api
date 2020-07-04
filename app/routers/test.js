const test = require('../controllers/test');

module.exports = function (router, opts) {
    router.get('/get/test', test.testFunction(opts));
    // router.post('/post/test', test.testFunction(opts));
    // router.put('/put/test', test.testFunction(opts));
    // router.del('/del/test', test.testFunction(opts));
};