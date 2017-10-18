import $ from 'jquery'

let model2 = {
  data: {
    number: 0
  },
  get(){
    return $.get('../src/data2.json').then((response)=>{
      this.data = response
      return this.data
    })
  },
  increase(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        this.data.number += 1
        resolve(this.data)
      },300)
    })
  },
  decrease(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        this.data.number -= 1
        resolve(this.data)
      },300)
    })
  }
}

module.exports = model2