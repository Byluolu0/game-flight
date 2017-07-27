class Cloud extends GameImage {
  constructor(scene, rawImage) {
    super(scene, rawImage)
    this.speed = config.cloud_speed
  }

  outOfScene() {
    return this.y > this.scene.height
  }

  update() {
    if (this.outOfScene()) {
      this.y = 0 - this.height
    }
    this.y += this.speed
  }
}
