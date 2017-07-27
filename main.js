
var log = console.log.bind(console)
if (!config.debug_mode) {
  log = function() {}
}

var canvas = document.getElementById('id-canvas')
var ctx = canvas.getContext('2d')

var curScene = null
const resourseImages = {}

var setScene = function(s) {
  curScene = s
}

// 主循环
var runLoop = function() {
  curScene.update()
  curScene.draw()

  setTimeout(function() {
    runLoop()
    log('one loop')
  }, 1000 / config.fps)
}

// 资源加载
var __loadResourse = function(start) {
  var path = config.image_path
  var arr = Object.keys(path)
  var total = arr.length
  var loaded = 0

  for (var i in path) {
    resourseImages[i] = new Image()
    resourseImages[i].src = path[i]
    resourseImages[i].onload = function() {
      loaded += 1
      if (total == loaded) {
        //loaded
        log("loaded")
        start()
      }
    }
  }
}

var __mainLoop = function() {
  var eventManager = new EventManager()
  var s = new SceneStart(canvas, ctx, eventManager)
  setScene(s)
  runLoop()
}

// 函数入口
var __main = function() {
  log("__main")
  __loadResourse(__mainLoop)
}

__main()
