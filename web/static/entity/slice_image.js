class SliceImage {
  constructor(scene, cfg, rawImage) {
    this.scene = scene
    this.canvas = scene.canvas
    this.ctx = scene.ctx
    this.rawImage = rawImage
    this.sx = cfg.sx
    this.sy = cfg.sy
    this.width = cfg.sw
    this.height = cfg.sh
    this.x = 0
    this.y = 0
    this.dead = false
    this.animations = {}

    this.scene.addToDrawList(this)
  }

  setPosition(x, y) {
    this.x = x
    this.y = y
  }

  draw() {
    //log(this.sx, this.sy, this.sWidth, this.sHeight)
    this.ctx.drawImage(this.rawImage, this.sx, this.sy,
      this.width, this.height, this.x, this.y,
      this.width, this.height)
  }

  update() {
    for (var k in this.animations) {
      this.animations[k].update()
    }
  }

  replace(slice) {
    this.sx = slice.sx
    this.sy = slice.sy
    this.width = slice.sw
    this.height = slice.sh
  }

  setAnimations(animations) {
    //log(animations)
    for (var k in animations) {
      var v = animations[k]
      var _this = this
      var finishCallback = function() {
        if (_this[k]) _this[k]()
      }
      //log(k, v)
      this.animations[k] = new Animation(this, v, finishCallback)
    }
    log("setAnimations", this.animations)
  }

  runAnimation(name) {
    var ani = this.animations[name]
    if (ani) {
      ani.enable()
    }
    log(name, ani)
  }

  setDead() {
    this.dead = true
  }

  isDead() {
    return this.dead
  }
}
