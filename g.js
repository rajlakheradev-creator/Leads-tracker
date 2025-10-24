



let myleads=[];




const inputEl=document.getElementById("input-el");

const inputbtn=document.getElementById("input-btn");

const ulel=document.getElementById("ul-el");

const deletebtn=document.getElementById("delete");
// localStorage.clear();

const leadslocalstorage=JSON.parse(localStorage.getItem("myleads"));

const savebtn=document.getElementById("savebtn");

if(leadslocalstorage){
  myleads=leadslocalstorage;
  render(myleads);
}



savebtn.addEventListener("click",function(){

  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    
   myleads.push(tabs[0].url);
   
   localStorage.setItem("myleads",JSON.stringify(myleads));
     
   render(myleads);
    })
});

function render(leads){
  let listitems="";
  for(let i=0;i<leads.length;i++){
    listitems+=`
    <li>

    <a href='${leads[i]}'  target='_blank' rel='noopener noreferrer'>
    ${leads[i]} <a>

    </li>`;
    
  }
  ulel.innerHTML=listitems;
  
}

deletebtn.addEventListener("dblclick",function(){
  localStorage.clear();
  myleads=[];
  render(myleads);
})

inputbtn.addEventListener("click",function(){
  myleads.push(inputEl.value);
  inputEl.value="";

  localStorage.setItem("myleads",JSON.stringify(myleads));
  render(myleads);
  // inputEl.value="";
})




// function renderlead(){
//  let listItem="<li>"+inputEl.value+"</li>";
//   ulel.innerHTML+=listItem;
//  }