import $ from 'jquery'
import model1 from './model1'
const Handlebars = require('handlebars')

let module1 = {
  element: '.module1',
  template:`
    <input type="text" value={{output}}><button>click1</button>
    <div class="output">{{output}}</div>
  `,
  model: model1,
  events: {
    'change input': function(e){
      console.log('change1')
    },
    'click button': 'onClickButton'
  },
  onClickButton(){
    this.model.change(this.element).then((data)=>{
      this.render(data)
    })
  }
}

module.exports = module1