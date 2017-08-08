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
    var configBg = globalConfig.bg
    var bgRawImage = this.resourseManager.getImageByName(configBg.base_image)
    var bg = new StartBg(this, configBg, bgRawImage)
    bg.setPosition(0, 0)
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
    this.ctx.textAlign = "center"
    fillMultiLine(this.ctx, globalString.start_tip, this.width / 2, this.height / 4, 20)
  }

  update() {

  }
}
