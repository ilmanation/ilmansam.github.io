$(document).ready(function(){
  var items = ["#FCEE13", "#F981D1" , "#08E6FB"]
  var index = 0

  setInterval(function(){
    $('body').css('background-color', items[index])
    if (index == items.length){
      index = 0
    }
    else {
      index++
    }
  },4000)
})
