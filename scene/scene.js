class Scene {
  constructor(canvas, ctx, resourseManager, eventManager, fps) {
    this.canvas = canvas
    this.ctx = ctx
    this.resourseManager = resourseManager
    this.eventManager = eventManager
    this.flight = null
    this.width = canvas.width
    this.height = canvas.height
    this.fps = fps
    this.enemys = []
    this.balls = []

    this.__init()
  }

  __init() {
    var img = this.getImageByName('flight')
    var flight_image = new GameImage(this, img)
    this.flight = new Flight(this, flight_image, 100, 600, 5, 15)

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

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.flight.draw()
    for (var i in this.enemys) {
      this.enemys[i].draw()
    }
    for (var i in this.balls) {
      this.balls[i].draw()
    }
  }

  update() {
    this.eventManager.update()
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
        var eventManager = new EventManager()
        var s = new SceneEnd(this.canvas, this.ctx, eventManager)
        setScene(s)
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
    var index = this.enemys.indexOf(enemy)
    this.enemys.splice(index, 1)
  }

  createEnemy() {
    var img = this.getImageByName('enemy')
    var enemy_image = new GameImage(this, img)
    var enemy = createEnemyInRandomPos(this, enemy_image)
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
    this.balls.push(ball)
  }

  removeBall(ball) {
    var index = this.balls.indexOf(ball)
    this.balls.splice(index, 1)
  }
}
