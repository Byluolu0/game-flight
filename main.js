
var log = console.log.bind(console)

var canvas = document.getElementById('id-canvas')
var ctx = canvas.getContext('2d')

var fps = 30

var scene = null
var images = null

var setScene = function(s) {
  scene = s
}

// 主循环
var runLoop = function() {
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
    flight: 'images/flight.png',
    ball: 'images/ball.png',
    enemy: 'images/enemy.png'
  }

  var arr = Object.keys(path)
  var total = arr.length
  var loaded = 0

  images = {}

  for (var i in path) {
    images[i] = new Image()
    images[i].src = path[i]
    images[i].onload = function() {
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
