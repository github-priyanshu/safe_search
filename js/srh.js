resetFormat();

var app='google',
srh=op("#srh"),
msgBx=op(".msgBx");

op("#frClick").click();


srh.onkeypress=e=>{
  log(e.key);
  if(e.key=="Enter" && srh.value.trim()){
    search();
  }
}

function chActive(elem){
  try{op(".i.active").classList.remove("active");}catch{}
  elem.classList.add('active');
}

function chApp(ap,elem){
  chActive(elem)
  app=ap;
  if(srh.value.trim()){
    search(ap);
  }
}

function listen(ap){
  srh.value='';
  sr.start();
  msg("Listening...");
}

function  msg(t){
  msgBx.innerHTML=t; 
  setTimeout(()=>{
    msgBx.innerHTML="";
  },3000)
}

function search(ap=app){
  var srVal=srh.value.trim();
  if(app=='google'){
    window.open(`https://www.google.com/search?q=${srVal}&safe=active`,"_blank","location=0,toolbar=0");
  }else{
    window.open(`https://www.google.com/search?q=${srVal} youtube&tbm=vid&safe=active`,"_blank","location=0,toolbar=0");
  }
}

/*speech*/

var sr=new webkitSpeechRecognition();

sr.onresult=e=>{
  var txt=e.results[0][0].transcript;
  srh.value=txt;
  search();
}
sr.onend=error;
function error(){
  msg("Unable to listen that...!!!");
}
