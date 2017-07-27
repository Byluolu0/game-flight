class Scene extends BaseScene {
  constructor(canvas, ctx, resourseManager, eventManager) {
    super(canvas, ctx)
    this.canvas = canvas
    this.ctx = ctx
    this.resourseManager = resourseManager
    this.eventManager = eventManager
    this.flight = null
    this.bg = null
    this.cloud = null
    this.width = canvas.width
    this.height = canvas.height
    this.enemys = []
    this.balls = []

    this.__init()
  }

  __init() {
    var bgImg = this.getImageByName('bg')
    var bg = new Flight(this, bgImg)
    bg.setPosition(0, 0)
    this.addToDrawList(bg)
    this.bg = bg

    var cloudImg = this.getImageByName('cloud')
    var cloud = new Cloud(this, cloudImg)
    var cloudX = randomIn(this.width - cloudImg.width)
    cloud.setPosition(cloudX, 0 - cloudImg.height)
    log(cloud.x, cloud.y)
    this.addToDrawList(cloud)
    this.cloud = cloud

    var flightImg = this.getImageByName('flight')
    var flight = new Flight(this, flightImg)
    flight.setPosition(100, 600)
    this.addToDrawList(flight)
    this.flight = flight

    var _this = this
    this.eventManager.registerKeydownUpdateHandler('w', function() {
        _this.flight.moveUp()
    })
    this.eventManager.registerKeydownUpdateHandler('s', function() {
      _this.flight.moveDown()
    })
    this.eventManager.registerKeydownUpdateHandler('a', function() {
      _this.flight.moveLeft()
    })
    this.eventManager.registerKeydownUpdateHandler('d', function() {
      _this.flight.moveRight()
    })
    this.eventManager.registerKeydownUpdateHandler('f', function() {
      _this.flight.fire()
    })

    this.createEnemyInTime()
  }

  update() {
    this.eventManager.update()
    this.cloud.update()
    this.flight.update()
    for (var i in this.enemys) {
      this.enemys[i].update()
    }
    log(this.enemys)
    for (var i in this.balls) {
      this.balls[i].update()
    }
    log(this.balls)
    this.collideCheck()
  }

  collideCheck() {
    for (var i in this.enemys) {
      var enemy = this.enemys[i]
      if (this.flight.collide(enemy)) {
        // Gameover
        this.gameover()
        return
      }
    }

    for (var i in this.enemys) {
      var enemy = this.enemys[i]
      for (var j in this.balls) {
        var ball = this.balls[j]
        if (collide(enemy, ball)) {
          enemy.die()
          ball.die()
        }
      }
    }
  }

  getImageByName(name) {
    return this.resourseManager.getImageByName(name)
  }

  removeEnemy(enemy) {
    this.removeFromDrawList(enemy)
    var index = this.enemys.indexOf(enemy)
    this.enemys.splice(index, 1)
  }

  createEnemy() {
    var image = this.getImageByName('enemy')
    var enemy = new Enemy(this, image)
    var x = randomIn(this.width)
    enemy.setPosition(x, 0 - image.height)
    this.addToDrawList(enemy)
    this.enemys.push(enemy)
  }

  createEnemyInTime() {
    var _this = this
    this.createEnemy()
    setTimeout(function() {
      _this.createEnemyInTime()
    }, 2000)
  }

  addBall(ball) {
    this.addToDrawList(ball)
    this.balls.push(ball)
  }

  removeBall(ball) {
    this.removeFromDrawList(ball)
    var index = this.balls.indexOf(ball)
    this.balls.splice(index, 1)
  }

  gameover() {
    var eventManager = new EventManager()
    var s = new SceneEnd(this.canvas, this.ctx, eventManager)
    setScene(s)
  }
}
