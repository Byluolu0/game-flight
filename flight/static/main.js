
var log = console.log.bind(console)
if (!globalConfig.debug_mode) {
  log = function() {}
}

const resourseImages = {}
const games = []

// 主循环
var runLoop = function() {
  for (var i in games) {
    games[i].runLoop()
  }

  setTimeout(function() {
    runLoop()
    //log('one loop')
  }, 1000 / globalConfig.fps)
}

// 资源加载
var __loadResourse = function(start) {
  var path = globalConfig.image_path
  var loaded = 0
  var total = 0
  for (var i in path) {
    total++
  }
  for (var i in path) {
    resourseImages[i] = new Image()
    resourseImages[i].src = path[i]
    resourseImages[i].onload = function() {
      loaded += 1
      if (total == loaded) {
        start()
      }
    }
  }
}

var __mainLoop = function() {
  for (var i = 0; i < 2; i++) {
    let canvas = document.getElementById('id-canvas-' + i)
    let resourseManager = new ResourseManager(resourseImages)
    let eventManager = new EventManager()
    let game = new Game(canvas, resourseManager, eventManager, globalConfig.operation[i])
    games.push(game)
  }
  runLoop()
}

// 函数入口
var __main = function() {
  //log("__main")
  __loadResourse(__mainLoop)
}

__main()
