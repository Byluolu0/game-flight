class ResourseManager {
  constructor(images) {
    this.images = images
  }

  getImageByName(name) {
    var img = this.images[name]
    if (img == null) {
      return null
    }

    return img
  }
}
