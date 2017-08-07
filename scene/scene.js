class Scene extends BaseScene {
  constructor(canvas, ctx, resourseManager, eventManager) {
    super(canvas, ctx)
    this.canvas = canvas
    this.ctx = ctx
    this.resourseManager = resourseManager
    this.eventManager = eventManager
    this.flight = null
    this.bg = null
    this.width = canvas.width
    this.height = canvas.height
    this.enemys = []
    this.bullets = []

    this.__init()
  }

  __init() {
    var bgInfo = this.resourseManager.getSliceByName('bg')
    var bg = new StartBg(this, bgInfo)
    bg.setPosition(0, 0)
    this.addToDrawList(bg)
    this.bg = bg

    var flightInfo = this.resourseManager.getSliceByName('flight')
    var flight = new Flight(this, flightInfo)
    flight.setPosition(50, 300)
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
    this.flight.update()
    for (var i in this.enemys) {
      this.enemys[i].update()
    }
    //log(this.enemys)
    for (var i in this.bullets) {
      this.bullets[i].update()
    }
    //log(this.bullets)
    this.collideCheck()
  }

  collideCheck() {
    for (var i in this.enemys) {
      var enemy = this.enemys[i]
      if (collide(this.flight, enemy)) {
        //log(enemy)
        //log(this.flight)
        // Gameover
        this.gameover()
        return
      }
    }

    for (var i in this.enemys) {
      var enemy = this.enemys[i]
      for (var j in this.bullets) {
        var bullet = this.bullets[j]
        if (!enemy.isDead() && collide(enemy, bullet)) {
          enemy.boom()
          bullet.die()
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
    var ememyTypes = config.slice_info.elements.enemy.length
    var idx = randomIn(ememyTypes)
    var flightInfo = this.resourseManager.getSliceByName('enemy.' + idx + ".default")
    var die_animations = this.resourseManager.getConfigByName('enemy.' + idx + ".die")
    var enemy = new Enemy(this, flightInfo)
    enemy.setAnimations({die: die_animations})
    var x = randomIn(this.width - enemy.width)
    enemy.setPosition(x, 0 - enemy.height)
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

  addBullet(bullet) {
    this.addToDrawList(bullet)
    this.bullets.push(bullet)
  }

  removeBullet(bullet) {
    this.removeFromDrawList(bullet)
    var index = this.bullets.indexOf(bullet)
    this.bullets.splice(index, 1)
  }

  gameover() {
    var resourseManager = new ResourseManager(resourseImages, resourseSlice)
    var eventManager = new EventManager()
    var s = new SceneEnd(this.canvas, this.ctx, resourseManager, eventManager)
    setScene(s)
  }
}
