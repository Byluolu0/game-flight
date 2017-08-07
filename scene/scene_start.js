class SceneStart extends BaseScene {
  constructor(canvas, ctx, resourseManager, eventManager) {
    super(canvas, ctx)
    this.canvas = canvas
    this.ctx = ctx
    this.eventManager = eventManager
    this.resourseManager = resourseManager
    this.width = canvas.width
    this.height = canvas.height

    this.__init()
  }

  __init() {
    var sliceInfo = this.resourseManager.getSliceByName('bg')
    //log(sliceInfo)
    var bg = new StartBg(this, sliceInfo)
    bg.setPosition(0, 0)
    this.addToDrawList(bg)
    this.bg = bg

    this.eventManager.registerClickHandler('k', function() {
      var resourseManager = new ResourseManager(resourseImages, resourseSlice)
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
