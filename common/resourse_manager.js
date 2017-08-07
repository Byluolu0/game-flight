class ResourseManager {
  constructor(images, slice) {
    this.images = images
    this.slice = slice
  }

  getImageByName(name) {
    var img = this.images[name]
    if (img == null) {
      //log("getImageByName error", name)
      return null
    }

    return img
  }

  getSliceByName(name, idx) {
    if (idx == null) {
      var sliceInfo = {}
      sliceInfo.slice = config.slice_info.elements[name]
      sliceInfo.rawImage = this.slice
      return sliceInfo
    } else {
      var sliceInfo = {}
      sliceInfo.slice = config.slice_info.elements[name][idx]
      log(idx, sliceInfo.slice = config.slice_info.elements[name][idx])
      sliceInfo.rawImage = this.slice
      return sliceInfo
    }
  }
}
