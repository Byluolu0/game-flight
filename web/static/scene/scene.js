class Scene extends BaseScene {
  constructor(game, resourseManager, eventManager) {
    super(game)
    this.resourseManager = resourseManager
    this.eventManager = eventManager
    this.flight = null
    this.bg = null
    this.enemys = []
    this.bullets = []
    this.pause = false
    this.enemy_cooldown = 0

    this.__init()
  }

  __init() {
    var configBg = globalConfig.bg
    var bgRawImage = this.resourseManager.getImageByName(configBg.base_image)
    var bg = new StartBg(this, configBg, bgRawImage)
    bg.setPosition(0, 0)
    this.bg = bg

    var configFlight = globalConfig.flight
    var flightRawImage = this.resourseManager.getImageByName(configFlight.base_image)
    var flight = new Flight(this, configFlight, flightRawImage)
    flight.setPosition(this.width / 2 - flight.width / 2, this.height - flight.height)
    this.flight = flight

    let _this = this
    let o = this.game.operation
    this.eventManager.registerKeydownUpdateHandler(o.up.key, function() {
        _this.flight.moveUp()
    })
    this.eventManager.registerKeydownUpdateHandler(o.down.key, function() {
      _this.flight.moveDown()
    })
    this.eventManager.registerKeydownUpdateHandler(o.left.key, function() {
      _this.flight.moveLeft()
    })
    this.eventManager.registerKeydownUpdateHandler(o.right.key, function() {
      _this.flight.moveRight()
    })
    this.eventManager.registerKeydownUpdateHandler(o.fire.key, function() {
      _this.flight.fire()
    })
    this.eventManager.registerClickHandler(o.pause.key, function() {
      _this.pause = !_this.pause
    })
  }

  update() {
    this.eventManager.update()
    if (this.pause) {
      return
    }
    this.enemy_cooldown++
    if (this.enemy_cooldown == globalConfig.enemy_internal) {
      this.enemy_cooldown = 0
      this.createEnemy()
    }
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

  draw() {
    if (this.pause) {
      return
    }
    super.draw()
  }

  collideCheck() {
    for (var i in this.enemys) {
      var enemy = this.enemys[i]
      if (collide(this.flight, enemy)) {
        enemy.boom()
        this.flight.boom()
        return
      }
    }

    for (var i in this.enemys) {
      var enemy = this.enemys[i]
      for (var j in this.bullets) {
        var bullet = this.bullets[j]
        if (collide(enemy, bullet)) {
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
    var idx = randomIn(configGetEnemyTypeCount())
    var configEnemy = configGetEnemyByIdx(idx)
    var rawImage = this.resourseManager.getImageByName(configEnemy.base_image)
    var enemy = new Enemy(this, configEnemy, rawImage)
    var x = randomIn(this.width - enemy.width)
    enemy.setPosition(x, 0 - enemy.height)
    this.enemys.push(enemy)
  }

  addBullet(bullet) {
    this.bullets.push(bullet)
  }

  removeBullet(bullet) {
    this.removeFromDrawList(bullet)
    var index = this.bullets.indexOf(bullet)
    this.bullets.splice(index, 1)
  }

  gameover() {
    let resourseManager = new ResourseManager(resourseImages)
    let eventManager = new EventManager()
    let s = new SceneEnd(this.game, resourseManager, eventManager)
    this.game.setScene(s)
  }
}
