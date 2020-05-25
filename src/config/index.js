// 根据环境修改不同配置
const config = require('./env.' + process.env.VUE_APP_ENV)
module.exports = config
