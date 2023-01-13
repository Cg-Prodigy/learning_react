import data from './counties.json' assert {type:'json'};

const county=document.getElementById("county")
const sub_county=document.getElementById("sub_county")
county.addEventListener("focus",()=>{
    addContent(county);
})
county.addEventListener("change",()=>{
    sub_county.innerHTML="";
})
sub_county.addEventListener("focus",()=>{
    addSub(sub_county);
})
function addContent(input){
    for (let entry in data){
        let option=document.createElement("option");
        let option_text=document.createTextNode(`${entry}`);
        option.appendChild(option_text);
        option.setAttribute('value',`${entry}`);
        input.appendChild(option);
    }
}
function addSub(input){
    if (county.value ===""){
        return
    }
    for (let entry in data[county.value]){
        let sub=data[county.value][entry];
        let option=document.createElement("option");
        let option_text=document.createTextNode(`${sub}`);
        option.appendChild(option_text);
        option.setAttribute('value',`${sub}`);
        input.appendChild(option);
    }
}