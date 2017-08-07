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

  getConfigByName(name) {
    var idxs = name.split(".")
    var result = config.slice_info.elements
    for (var k in idxs) {
      var key = idxs[k]
      var x = parseInt(key)
      if (!isNaN(x)) {
        key = x
      }
      result = result[key]
    }
    return result
  }

  getSliceByName(name) {
    var result = this.getConfigByName(name)
    var ret = {}
    ret.slice = result
    ret.rawImage = this.slice
    return ret
  }
}
