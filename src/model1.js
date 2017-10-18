import $ from 'jquery'

let model1 = {
  data: {
    output: ''
  },
  change(element){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let value = $(element).find('input').val()
        this.data.output = value
        resolve(this.data)
      },300)
    })
  }
}

module.exports = model1