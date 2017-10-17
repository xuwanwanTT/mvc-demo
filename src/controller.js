import $ from 'jquery'
import {module1,module2,module3} from './model'

function Maker(options){
  let controller = {}
  controller.$element = $(options.element)
  controller.events = options.events

  for(let key in controller.events){
    let parts = key.split(' ')
    let eventType = parts.shift()
    let selector = parts.join(' ')
    controller.$element.on(eventType,selector,controller.events[key])
  }
}

Maker(module1)
Maker(module2)
Maker(module3)