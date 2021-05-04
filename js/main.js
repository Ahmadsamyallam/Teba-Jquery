

$(".wrapper").animate({"width":"100%"},2000)
$(".wrapper").animate({"height":"100%"},2000,function(){
$("h1").fadeIn(2000,function(){
   $(".col-md-4").slideDown(3000)
})

})

