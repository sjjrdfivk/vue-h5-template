##基于 vue-cli4.0 + vue-router + vuex + muse-ui + less + flexible + axios构建移动端模板支持页面缓存

______

[查看 demo](https://sjjrdfivk.github.io/vue-h5-template) 建议手机模式查看

###启动项目
```
# 安装依赖
npm install
# 启动本地
npm run serve
# 打包正式
npm run build
# 打包测试
npm run stage
```

###目录结构
```
├── src
│   ├── api                              # 接口
│   ├── assets                           # 资源目录
│   ├── components                       # 公共组件
│   ├── config                           # 多环境配置
│   ├── constants                        # 常量
│   ├── page                             # 组件目录
│   │   ├── Home                         # 首页组件
│   │   ├── DetailPage                   # 详情页组件
│   ├── router                           # 路由
│   ├── store                            # 状态管理
│   ├── utils                            # 工具类
│   ├── main.js                          # 项目入口
│   ├── App.vue                          # 组件入口
├── public                               # 模板文件
├── vue.config.js                        # 脚手架配置文件
├── .env.development                     # 本地环境变量
├── .env.production                      # 生产环境变量
├── .env.staging                         # 测试环境变量
```
