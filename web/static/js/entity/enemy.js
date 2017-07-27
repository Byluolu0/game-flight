class Enemy extends GameImage {
  constructor(scene, image) {
    super(scene, image)
    this.scene = scene
    this.speed = config.enemy_speed
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

  outOfScene() {
    return this.y > this.scene.height
  }

  update() {
    if (this.outOfScene()) {
      this.die()
      return
    }
    this.move()
  }
}
