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
    this.eventManager.registerClickHandler('r', function() {
      var resourseManager = new ResourseManager(resourseImages, resourseSlice)
      var eventManager = new EventManager()
      var s = new SceneStart(canvas, ctx, resourseManager, eventManager)
      setScene(s)
    })
  }

  draw() {
    super.draw()
    this.ctx.fillText('Press r to restart.', 10, 50)
  }

  update() {

  }

  getSliceByName(name) {
    return this.resourseManager.getSliceByName(name)
  }
}
