import $ from 'jquery'
const Handlebars = require('handlebars')

let module3 = {
  element: '.module3',
  events: {
    'change input': function(e){
      console.log('change3')
    },
    'click button': function(e){
      console.log('click3')
    }
  }
}

module.exports = module3