class GameImage {
  constructor(scene, rawImage) {
    this.scene = scene
    this.canvas = scene.canvas
    this.ctx = scene.ctx
    this.rawImage = rawImage
    this.height = rawImage.height
    this.width = rawImage.width
    this.x = 0
    this.y = 0
  }

  setPosition(x, y) {
    this.x = x
    this.y = y
  }

  draw() {
    this.ctx.drawImage(this.rawImage, this.x, this.y)
  }
}
