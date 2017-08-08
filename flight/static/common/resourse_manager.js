class ResourseManager {
  constructor(images, slice) {
    this.images = images
    this.slice = slice
  }

  getImageByName(name) {
    var img = this.images[name]
    if (img == null) {
      return null
    }

    return img
  }
}
