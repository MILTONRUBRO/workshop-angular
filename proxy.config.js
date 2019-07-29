const proxy = [{
    context: '/api',
    target: 'https://workshop-mongodb.herokuapp.com',
    pathRewrite: { '^/api': '' }
}];
module.exports = proxy;