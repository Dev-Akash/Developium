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
  setCookie("BoardName", val, 365);
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
    sectionData = {
      0: 'Section 1',
      1: 'Section 2',
      2: 'Section 3'
    }
    setCookie("Sections", JSON.stringify(sectionData), 365);
  }
  else{
    sectionData = JSON.parse(sectionData);
  }
  var taskData = getCookie("Tasks");
  if(taskData == ''){
    taskData = {
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
        sectionIndex: 1,
      },
      2: {
        taskName: "T3",
        taskDesc: "T3 is a task",
        isCompleted: false,
        sectionIndex: 2
      }
    }
    setCookie("Tasks", JSON.stringify(taskData), 365);
  }
  else{
    taskData = JSON.parse(taskData);
  }
  
  document.getElementById("board_name").value = boardName;

  for(let i=0; i<Object.keys(sectionData).length; i++){
    document.getElementById("section"+i).value = sectionData[i];
  }

  for(let j=0; j<Object.keys(taskData).length; j++){
    let t = document.getElementById("task"+j);
    let h = t.getElementsByClassName('task_header')[0];
    let inp = h.getElementsByTagName('input')[0];
    let b = t.getElementsByClassName('task_body')[0];
    inp.value = taskData[j].taskName;
    b.innerHTML = taskData[j].taskDesc;
  }
  // console.log(boardName, sectionData, taskData);
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