function collide(a, b) {
  if (a.isDead() && b.isDead()) {
    return false
  }
  if (AcollideB(a, b) || AcollideB(b, a)) {
    return true
  }
  return false
}

function AcollideB(a, b) {
  if (pointInRectangle(a.x, a.y, b)
    || pointInRectangle(a.x + a.width, a.y, b)
    || pointInRectangle(a.x, a.y + a.height, b)
    || pointInRectangle(a.x + a.width, a.y + a.height, b)) {
      //log(a.x, a.y, a.width, a.height, b.x, b.y, b.width, b.height)
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

// 随机 0 ~ (x - 1)整数
// Math.random  0 ~ 1，
function randomIn(x) {
  if (x == 0) return 0;
  var result = Math.floor(Math.random() * x)
  if (result == x) {
    result = x - 1
  }
  return result
}

function fillMultiLine(ctx, str, x, y, rowInterval) {
  var s = str.split("\n")
  for (var i in s) {
    line = s[i]
    ctx.fillText(line, x, y)
    y += rowInterval
  }
}

function stringFormat() {
  if (arguments.length == 0) return ""
  let result = arguments[0]
  for (let i = 1; i < arguments.length; i++) {
    let value = arguments[i]
    let idx_format = "{" + (i - 1) + "}"
    result = result.replace(idx_format, value)
  }
  return result
}
