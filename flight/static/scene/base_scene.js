class BaseScene {
  constructor(game) {
    this.game = game
    this.canvas = game.canvas
    this.ctx = game.ctx
    this.width = game.canvas.width
    this.height = game.canvas.height
    this.drawList = []
  }

  addToDrawList(element) {
    this.drawList.push(element)
  }

  removeFromDrawList(element) {
    var index = this.drawList.indexOf(element)
    this.drawList.splice(index, 1)
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    for (var i in this.drawList) {
      var drawItem = this.drawList[i]
      drawItem.draw()
    }
  }

  update() {

  }
}
