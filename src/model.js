let module1 = {
  element: '.module1',
  events: {
    'change input': function(e){
      console.log('change1')
    },
    'click button': function(e){
      console.log('click1')
    }
  }
}

let module2 = {
  element: '.module2',
  events: {
    'change input': function(e){
      console.log('change2')
    },
    'click button': function(e){
      console.log('click2')
    }
  }
}

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

module.exports = {
  module1,
  module2,
  module3
}