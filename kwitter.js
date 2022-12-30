function adduser(){
    var name;
    name=document.getElementById("texty").value;
    localStorage.setItem("name",name);
    window.location="kwitter_room.html";
}