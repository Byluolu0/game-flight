class Enemy extends SliceImage {
  constructor(scene, sliceInfo) {
    super(scene, sliceInfo)
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
