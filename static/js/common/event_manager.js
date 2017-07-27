class EventManager {
  constructor() {
    this.keydowns = {}
    this.keydownHandlers = {}

    this.clickHandlers = {}

    this.__init()
  }

  __init() {
    var _this = this
    window.addEventListener('keydown', function(event){
      var key = event.key
      _this.keydowns[key] = true
      if (_this.clickHandlers[key]) {
        _this.clickHandlers[key]()
      }
    })

    window.addEventListener('keyup', function(event){
      _this.keydowns[event.key] = false
    })
  }

  registerKeydownUpdateHandler(key, handler) {
    this.keydownHandlers[key] = handler
  }

  registerClickHandler(key, handler) {
    this.clickHandlers[key] = handler
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
