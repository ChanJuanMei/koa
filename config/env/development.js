module.exports = {
  port: 7777,
  api: {
      restful: "http://10.0.3.56"
      // common: 'http://10.0.3.56',
      // wechat: 'http://10.0.16.105:8080',
      // report: "http://10.0.3.56"
  },
  redis: {
      host: "10.0.3.24",
      pass: "youknowthat",
      db: 1,
      port: 6379
  },
  wechat: {
    appId: 'wx8f3dd4faf3c697b1',
    url: 'http://10.0.3.56/wechat/common/public/getJsapiByAppId'
  },
  session: {
      key: "sess.id",
      ttl: 20 * 60 * 1000
  }
}