var section =document.querySelectorAll('.section');
var sections={}
section.forEach(function(a){
    console.log(a.id)
    sections[a.id]=a.offsetTop;
})
window.onscroll=function(){
    var scrollpos=document.documentElement.scrollTop ||document.body.scrollTop;
    for(var x in sections){
      if(sections[x] <= scrollpos){
        document.querySelector(".active").setAttribute('class',' ')
        document.querySelector("a[href*="+x+"]").setAttribute('class','active')
      }
    }
}