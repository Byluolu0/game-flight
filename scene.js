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

    this.__init()
  }

  __init() {
    var img = this.getImageByName('flight')
    var flight_image = new GameImage(this, img)
    this.flight = new Flight(this, flight_image, 0, 0, 5)

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
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.flight.draw()
  }

  update() {
    this.eventManager.update()
    this.flight.update()
  }

  getImageByName(name) {
    return this.resourseManager.getImageByName(name)
  }
}
