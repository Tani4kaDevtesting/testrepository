function loaddir(path, callback) {
  async.readdir(".")
    .stat()
    .filter(function(file) {
      return file.stat.isFile()
    })
    .readFile("utf8")
    .filter(function(file) {
      return file.data
    })
    .toString(callback)
}
