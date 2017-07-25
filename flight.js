class Flight {
  constructor(canvas, ctx, img, x, y, speed) {
    this.canvas = canvas
    this.ctx = ctx
    this.img = img
    this.x = x
    this.y = y
    this.speed = speed
  }

  moveUp() {
    this.y -= this.speed
    if (this.y < 0) {
      this.y = 0
    }
  }

  moveDown() {
    this.y += this.speed
    if (this.y > this.canvas.height - this.img.height) {
      this.y = this.canvas.height - this.img.height
    }
  }

  moveLeft() {
    this.x -= this.speed
    if (this.x < 0) {
      this.x = 0
    }
  }

  moveRight() {
    this.x += this.speed
    if (this.x > this.canvas.width - this.img.width) {
      this.x = this.canvas.width - this.img.width
    }
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y)
  }

  update() {

  }
}
