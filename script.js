alert("Click on the sun, to change the site theme.")

function passfocus() {
  let input1 = document.getElementById("pass")
  if ( input1.type == "password" ) {
    input1.type = "text"
  }
}
function nofocus(){
  let input1 = document.getElementById("pass")
  input1.type = "password"
}

var icon = document.getElementById("icon")
icon.onclick = function(){
  document.body.classList.toggle("tema_claro")
  if(document.body.classList.contains("tema_claro")){
    icon.src = "../img/lua.png"
  }else{
    icon.src = "../img/sol.png"
  }
}