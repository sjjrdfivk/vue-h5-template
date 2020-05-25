const storage= {
  // 设置缓存
  localSet: function (name, data) {
    localStorage.removeItem(name)
    localStorage.setItem(name, JSON.stringify(data))
  },
  // 获取缓存
  localGet: function (name) {
    return JSON.parse(localStorage.getItem(name))
  },
  // 清除缓存
  localRemove: function (name) {
    localStorage.removeItem(name)
  }
}
export default storage
