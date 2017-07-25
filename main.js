
var log = console.log.bind(console)

var canvas = document.getElementById('id-canvas')
var ctx = canvas.getContext('2d')

var fps = 30

// 主循环
var runLoop = function(scene) {
  scene.update()
  scene.draw()

  setTimeout(function() {
    runLoop(scene)
    log('one loop')
  }, 1000 / fps)
}

// 资源加载
var __loadResourse = function(start) {
  var path = {
    flight: 'flight.png',
    ball: 'ball.png',
  }

  var arr = Object.keys(path)
  var total = arr.length
  var loaded = 0

  var images = {}

  for (var i in path) {
    images[i] = new Image()
    images[i].src = path[i]
    images[i].onload = function() {
      loaded += 1
      if (total == loaded) {
        //loaded
        log("loaded")
        start(images)
      }
    }
  }
}

var __mainLoop = function(images) {
  var resourseManager = new ResourseManager(images)
  var eventManager = new EventManager()
  var scene = new Scene(canvas, ctx, resourseManager, eventManager, fps)
  runLoop(scene)
}

// 函数入口
var __main = function() {
  log("__main")
  __loadResourse(__mainLoop)
}

__main()
