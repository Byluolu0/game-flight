class Enemy extends SliceImage {
  constructor(scene, cfg, rawImage) {
    super(scene, cfg, rawImage)
    this.scene = scene
    this.speed = cfg.speed
    this.drop_speed = cfg.drop_speed
    this.hp = cfg.hp
    this.setAnimations(cfg.animations)
  }

  setSpeed(speed) {
    this.speed = speed
  }

  move() {
    this.y += this.speed
  }

  die() {
    this.scene.removeEnemy(this)
  }

  boom() {
    this.hp--
    if (this.hp > 0) {
      return
    }
    this.setDead()
    this.speed = this.drop_speed
    this.runAnimation("die")
  }

  outOfScene() {
    return this.y > this.scene.height
  }

  update() {
    super.update()
    if (this.outOfScene()) {
      this.die()
      return
    }
    this.move()
  }
}
