var getConfigByName = function(name) {
  var idxs = name.split(".")
  var result = config
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

var configGetEnemyTypeCount = function() {
  return globalConfig.enemy.length
}

var configGetEnemyByIdx = function(idx) {
  return globalConfig.enemy[idx]
}
