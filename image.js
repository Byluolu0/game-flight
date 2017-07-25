class GameImage {
  constructor(scene, img) {
    this.scene = scene
    this.canvas = scene.canvas
    this.ctx = scene.ctx
    this.img = img
    this.height = img.height
    this.width = img.width
  }

  draw(x, y) {
    this.ctx.drawImage(this.img, x, y)
  }
}
