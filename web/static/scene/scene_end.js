class SceneEnd extends BaseScene {
  constructor(game, resourseManager, eventManager) {
    super(game)
    this.resourseManager = resourseManager
    this.eventManager = eventManager

    this.__init()
  }

  __init() {
    let _this = this
    let o = this.game.operation
    this.eventManager.registerClickHandler(o.start.key, function() {
      let resourseManager = new ResourseManager(resourseImages)
      let eventManager = new EventManager()
      let s = new SceneStart(_this.game, resourseManager, eventManager)
      _this.game.setScene(s)
    })
  }

  draw() {
    super.draw()
    this.ctx.textAlign = "center"
    let o = this.game.operation
    let format_restart_tip = stringFormat(globalString.restart_tip, o.start.desc)
    this.ctx.fillText(format_restart_tip, this.width / 2, this.height / 2)
  }
}
