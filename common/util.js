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


function createEnemyInRandomPos(scene, image) {
  var x = Math.floor(Math.random() * scene.width)
  var enemy = new Enemy(scene, image, x, 0 - image.height, 100)
  return enemy
}
