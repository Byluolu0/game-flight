//
// var EventManager = function() {
//   var o = {
//     keydowns: {},
//     keydownHandlers: {},
//   }
//
//   window.addEventListener('keydown', function(event){
//     o.keydowns[event.key] = true
//   })
//
//   window.addEventListener('keyup', function(event){
//     o.keydowns[event.key] = false
//   })
//
//   o.registerKeydownUpdateHandler = function(key, handler) {
//     o.keydownHandlers[key] = handler
//   }
//
//   o.update = function() {
//     var keydowns = o.keydowns
//     var keydownHandlers = o.keydownHandlers
//     for (var key in keydowns) {
//       if (keydownHandlers[key]) {
//         keydownHandlers[key]()
//       }
//     }
//   }
//   return o
// }


class EventManager {
  constructor() {
    this.keydowns = {}
    this.keydownHandlers = {}

    this.__init()
  }

  __init() {
    var _this = this
    window.addEventListener('keydown', function(event){
      _this.keydowns[event.key] = true
    })

    window.addEventListener('keyup', function(event){
      _this.keydowns[event.key] = false
    })
  }

  registerKeydownUpdateHandler(key, handler) {
    this.keydownHandlers[key] = handler
  }

  update() {
    var keydowns = this.keydowns
    var keydownHandlers = this.keydownHandlers
    for (var key in keydowns) {
      if (keydowns[key] && keydownHandlers[key]) {
        keydownHandlers[key]()
      }
    }
  }
}
