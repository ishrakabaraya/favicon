function a(){
document.getElementsByClassName("bet-item d-flex align-items-center celebrated").length
setInterval(()=>{id = document.getElementsByClassName("bet-item d-flex align-items-center celebrated").length
                 document.getElementsByClassName("first-block h-100 d-flex align-items-center")[0].innerHTML = "<h1>"+id+"</h1>"
},200)


}

a()
