class SliceImage extends GameImage {
  constructor(scene, sliceInfo) {
    super(scene, sliceInfo.rawImage)
    var slice = sliceInfo.slice
    this.sx = slice.sx
    this.sy = slice.sy
    this.width = slice.sw
    this.height = slice.sh
  }

  draw() {
    //log(this.sx, this.sy, this.sWidth, this.sHeight)
    this.ctx.drawImage(this.rawImage, this.sx, this.sy,
      this.width, this.height, this.x, this.y,
      this.width, this.height)
  }
}
