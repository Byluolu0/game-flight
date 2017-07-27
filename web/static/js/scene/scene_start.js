class SceneStart extends BaseScene {
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
    this.eventManager.registerClickHandler('k', function() {
      var resourseManager = new ResourseManager(resourseImages)
      var eventManager = new EventManager()
      var s = new Scene(canvas, ctx, resourseManager, eventManager)
      setScene(s)
    })
  }

  draw() {
    super.draw()
    this.ctx.fillText('Press k to start.', 10, 50)
  }

  update() {

  }
}