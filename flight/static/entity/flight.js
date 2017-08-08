class Flight extends SliceImage {
  constructor(scene, cfg, rawImage) {
    super(scene, cfg, rawImage)
    this.speed = cfg.speed
    this.fireEnergyNeed = cfg.fire_enegy_need
    this.energy = 0
    this.setAnimations(cfg.animations)
  }

  setSpeed(speed) {
    this.speed = speed
  }

  setFireEnergyNeed(fireEnergyNeed) {
    this.fireEnergyNeed = fireEnergyNeed
  }

  die() {
    this.scene.gameover()
  }

  boom() {
    //log("flight boom", this)
    this.setDead()
    this.speed = 0
    this.runAnimation("die")
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
    var configBullet = globalConfig.bullet
    var bulletRawImage = this.scene.resourseManager.getImageByName(configBullet.base_image)
    var bullet = new Bullet(this.scene, this, configBullet, bulletRawImage)
    var bullet_x = this.x + this.width / 2
    var bullet_y = this.y
    bullet.setPosition(bullet_x, bullet_y)
    this.energy = 0
  }

  update() {
    super.update()
    if (this.energy < this.fireEnergyNeed) {
      this.energy += 1
    }
  }
}
