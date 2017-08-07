class Animation {
  constructor(holder, slices, finishCallback) {
    this.holder = holder
    this.slices = slices
    this.idx = 0
    this.enabled = false
    this.cooldown = 0
    this.finishCallback = finishCallback
  }

  enable() {
    this.enabled = true
  }

  update() {
    if (!this.enabled) {
      return
    }
    this.cooldown++
    //log(this.cooldown)
    if (this.cooldown == globalConfig.animation_cooldown) {
      this.cooldown = 0
      this.idx++
      var to = this.slices[this.idx - 1]
      if (!to) {
        this.enabled = false
        this.idx = 0
        this.cooldown = 0
        if (this.finishCallback) {
          this.finishCallback()
        }
        return
      }

      this.holder.replace(to)
    }
  }
}
