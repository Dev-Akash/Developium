// import Task from "/Task.js";

// var t1 = new Task("name", "desc", false);

// console.log(t1);

function drag(ev) {
	console.log(ev);
  ev.dataTransfer.setData("item", ev.target.id);
}
function allowDrop(ev) {
  ev.preventDefault();
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("item");
  // console.log(ev);
  ev.target.appendChild(document.getElementById(data));
}