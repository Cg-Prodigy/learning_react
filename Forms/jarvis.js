import data from './counties_data.json' assert {type:'json'};

const county=document.getElementById("county")
const sub_county=document.getElementById("sub_county")
const ward=document.getElementById("ward")
county.addEventListener("focus",()=>{
    addContent();
});
county.addEventListener("change",()=>{
    sub_county.innerHTML="";
    ward.innerHTML="";
});
sub_county.addEventListener("focus",()=>{
    addSub();
});
sub_county.addEventListener("change",()=>{
    ward.innerHTML="";
});
ward.addEventListener("focus",()=>{
    addWard();
});

function addContent(){
    county.innerHTML="";
    for (let entry in data){
        let option=document.createElement("option");
        let option_text=document.createTextNode(`${entry}`);
        option.appendChild(option_text);
        option.setAttribute('value',`${entry}`);
        county.appendChild(option);
    }
}
function addSub(){
    if (county.value ===""){
        return
    }
    sub_county.innerHTML="";
    for(let entry in data[county.value]){
        let option=document.createElement("option");
        let option_text=document.createTextNode(`${entry}`);
        option.appendChild(option_text);
        option.setAttribute("value",`${entry}`);
        sub_county.appendChild(option);
    }
}
function addWard(){
    if (sub_county.value===""){
        return;
    };
    ward.innerHTML="";
    for(let entry in data[county.value][sub_county.value]){
        let d_ward=data[county.value][sub_county.value][entry];
        let option=document.createElement("option");
        let opt_text=document.createTextNode(`${d_ward}`)
        option.setAttribute("value",`${d_ward}`)
        option.appendChild(opt_text)
        ward.appendChild(option)
    }
}
