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

function saveNameCookie(val){
  var taskVal = {
    0: {
      taskName: "T1",
      taskDesc: "T1 is a task",
      isCompleted: false,
      sectionIndex: 0,
    },
    1: {
      taskName: "T2",
      taskDesc: "T2 is a task",
      isCompleted: false,
      sectionIndex: 2,
    },
  }
  setCookie("BoardName", val, 365);
  setCookie("Tasks", JSON.stringify(taskVal), 365);
}

function saveSectionCookie(event){
  var id = event.target.id;
  var val = event.target.value;
  var last = id.charAt(id.length - 1);

  var sectionData = JSON.parse(getCookie("Sections"));
  sectionData[last] = val;
  setCookie("Sections", JSON.stringify(sectionData), 365);
}

function getCookieData(){
  var boardName = getCookie("BoardName");
  if(boardName == ''){
    boardName = 'New Board'
    setCookie("BoardName", boardName, 365);
  }

  var sectionData = getCookie("Sections");
  if(sectionData == ''){
    var sectionData = {
      0: 'Section 1',
      1: 'Section 2',
      2: 'Section 3'
    }
    setCookie("Sections", JSON.stringify(sectionData), 365);
  }
  else{
    sectionData = JSON.parse(sectionData);
  }
  // var taskData = JSON.parse(getCookie("Tasks"));
  
  document.getElementById("board_name").value = boardName;
  for(let i=0; i<Object.keys(sectionData).length; i++){
    document.getElementById("section"+i).value = sectionData[i];
  }
  console.log(boardName, sectionData);
}





function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}