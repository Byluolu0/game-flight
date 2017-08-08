class SceneEnd extends BaseScene {
  constructor(canvas, ctx, resourseManager, eventManager) {
    super(canvas, ctx)
    this.canvas = canvas
    this.ctx = ctx
    this.resourseManager = resourseManager
    this.eventManager = eventManager
    this.width = canvas.width
    this.height = canvas.height

    this.__init()
  }

  __init() {
    this.eventManager.registerClickHandler('k', function() {
      var resourseManager = new ResourseManager(resourseImages, resourseSlice)
      var eventManager = new EventManager()
      var s = new SceneStart(canvas, ctx, resourseManager, eventManager)
      setScene(s)
    })
  }

  draw() {
    super.draw()
    this.ctx.textAlign = "center"
    this.ctx.fillText("Press k to restart", this.width / 2, this.height / 2)
  }

  update() {

  }
}
