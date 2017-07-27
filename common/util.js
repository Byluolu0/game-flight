function collide(a, b) {
  if (pointInRectangle(a.x, a.y, b)
    || pointInRectangle(a.x + a.width, a.y, b)
    || pointInRectangle(a.x, a.y + a.height, b)
    || pointInRectangle(a.x + a.width, a.y + a.height, b)) {
      return true
    }
    return false
}

function pointInRectangle(x, y, rectangle) {
  var r = rectangle
  if (r.x <= x && r.x + r.width >= x && r.y <= y && r.y + r.height >= y) {
    return true
  }
  return false
}

function randomIn(x) {
  return Math.floor(Math.random() * x)
}
