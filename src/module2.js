import $ from 'jquery'
const Handlebars = require('handlebars')
import model2 from './model2'

let module2 = {
  element: '.module2',
  template: '#module2Template',
  model: model2,
  events: {
    'click button[name=increase]': 'increase',
    'click button[name=decrease]': 'decrease'
  },
  init(){
    this.model.get().then((data)=>{
      this.render(data)
    })
  },
  increase(){
    this.model.increase().then((data)=>{
      this.render(data)
    })
  },
  decrease(){
    this.model.decrease().then((data)=>{
      this.render(data)
    })
  }
}

module.exports = module2