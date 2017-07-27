class SceneEnd extends BaseScene {
  constructor(canvas, ctx, eventManager) {
    super(canvas, ctx)
    this.canvas = canvas
    this.ctx = ctx
    this.eventManager = eventManager
    this.width = canvas.width
    this.height = canvas.height

    this.__init()
  }

  __init() {
    this.eventManager.registerClickHandler('r', function() {
      var eventManager = new EventManager()
      var s = new SceneStart(canvas, ctx, eventManager)
      setScene(s)
    })
  }

  draw() {
    super.draw()
    this.ctx.fillText('Press r to restart.', 10, 50)
  }

  update() {

  }
}
