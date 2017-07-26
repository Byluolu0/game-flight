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
