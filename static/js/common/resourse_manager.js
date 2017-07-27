class ResourseManager {
  constructor(images) {
    this.images = images
  }

  getImageByName(name) {
    var img = this.images[name]
    if (img == null) {
      log("getImageByName error", name)
      return null
    }

    return img
  }
}
