class Flight extends SliceImage {
  constructor(scene, sliceInfo) {
    super(scene, sliceInfo)
    this.speed = config.flight_speed
    this.fireEnergyNeed = config.fire_enegy_need
    this.energy = 0
  }

  setSpeed(speed) {
    this.speed = speed
  }

  setFireEnergyNeed(fireEnergyNeed) {
    this.fireEnergyNeed = fireEnergyNeed
  }

  moveUp() {
    this.y -= this.speed
    if (this.y < 0) {
      this.y = 0
    }
  }

  moveDown() {
    this.y += this.speed
    if (this.y > this.scene.height - this.height) {
      this.y = this.scene.height - this.height
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
    if (this.x > this.scene.width - this.width) {
      this.x = this.scene.width - this.width
    }
  }

  fire() {
    if (this.energy < this.fireEnergyNeed) {
      return
    }
    var flightInfo = this.scene.getSliceByName('bullet')
    var bullet_x = this.x + this.width / 2
    var bullet_y = this.y
    var bullet = new Bullet(this.scene, flightInfo, this)
    bullet.setPosition(bullet_x, bullet_y)
    this.scene.addBullet(bullet)
    this.energy = 0
  }

  update() {
    if (this.energy < this.fireEnergyNeed) {
      this.energy += 1
    }
  }
}
