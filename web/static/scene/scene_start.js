class SceneStart extends BaseScene {
  constructor(game, resourseManager, eventManager) {
    super(game)
    this.eventManager = eventManager
    this.resourseManager = resourseManager

    this.__init()
  }

  __init() {
    var configBg = globalConfig.bg
    var bgRawImage = this.resourseManager.getImageByName(configBg.base_image)
    var bg = new StartBg(this, configBg, bgRawImage)
    bg.setPosition(0, 0)
    this.bg = bg

    let _this = this

    let o = this.game.operation
    this.eventManager.registerClickHandler(o.start.key, function() {
      let resourseManager = new ResourseManager(resourseImages)
      let eventManager = new EventManager()
      let s = new Scene(_this.game, resourseManager, eventManager)
      _this.game.setScene(s)
    })
  }

  draw() {
    super.draw()
    this.ctx.textAlign = "center"
    let o = this.game.operation
    let format_start_tip = stringFormat(globalString.start_tip, o.start.desc,
      o.pause.desc, o.up.desc, o.down.desc, o.left.desc, o.right.desc, o.fire.desc)

    fillMultiLine(this.ctx, format_start_tip, this.width / 2, this.height / 4, 20)
  }
}
