import $ from 'jquery'
const Handlebars = require('handlebars')

let module1 = {
  element: '.module1',
  template:`
    <input type="text" value={{output}}><button>click1</button>
    <div class="output">{{output}}</div>
  `,
  data: {
    output: 'null'
  },
  events: {
    'change input': function(e){
      console.log('change1')
    },
    'click button': 'onClickButton'
  },
  onClickButton: function(e){
    let value = this.$element.find('input').val()
    this.data.output = value
    this.render()
  }
}

module.exports = module1