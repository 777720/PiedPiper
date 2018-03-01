
console.log("环境！："+process.env.NODE_ENV);
module.exports = process.env.NODE_ENV === 'prod' ? require('./configureStore.prod') : require('./configureStore.dev');