class Scene {
  constructor(canvas, ctx, resourseManager, eventManager) {
    this.canvas = canvas
    log(canvas.width)
    this.ctx = ctx
    this.resourseManager = resourseManager
    this.eventManager = eventManager
    this.flight = null

    this.__init()
  }

  __init() {
    var img = this.resourseManager.getImageByName('flight')
    this.flight = new Flight(canvas, ctx, img, 0, 0, 5)

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
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.flight.draw()
  }

  update() {
    this.eventManager.update()
  }
}
