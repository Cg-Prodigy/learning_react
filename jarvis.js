const container=document.getElementById("container")
const footer=document.getElementById("footer")
footer.innerHTML=`<p>Copyright ${new Date().getFullYear()}</p>`

function addElement(parent,child){
    parent.appendChild(child)
};

for(let i=0;i<5;i++){
    let child=document.createElement("p")
    child.innerHTML=`Element number ${i+1}`
    setTimeout(function(){
        addElement(container,child)
    },500*i)
}

// const returnValue=({cars:{lexus}})=>{
//     console.log(`Object value ${lexus}`);
// };
// const my_obj={
//     first_name:"Ego",
//     last_name:"Brian",
//     email:"ego@example.com",
//     cars:{
//         lexus:'LC500',
//         bmw:"CS5",
//         audi:"RS6"
//     }
// };
// returnValue(my_obj);


// const car={name:"Lexuc RCF",type:"Sports Sedan",mfd:2017}
// const career="Software Developer"
// const return_val=function(){
//     console.log(`${this.car.name} belongs to a ${this.career}`)
// }

// const literal_enhance={car,career,return_val}
// console.log(literal_enhance.return_val())

const obj={
    name:"Ego Brian",
    career:"Software Developer",
    details(){
        return `Name is ${this.name} and Career is ${this.career}`
    }
}
console.log(obj.details())

const arr_1=["One","two","Three"]
const arr_2=["Four","Five","Six"]
const new_arr=[...arr_1,...arr_2]
console.log(new_arr.join())
// let [last]=new_arr.reverse()
// console.log(last)
// console.log(new_arr.join())
// using the spread operator
const [last]=[...new_arr].reverse()
console.log(last)

// 
console.log("Rest parameters")
function rest_parameters(...args){
    let arr=args
    let[start,...the_rest]=args;
    let [finish,...others]=[...the_rest].reverse()
    console.log(arr,typeof(arr))
    console.log(start)
    console.log(the_rest)
    console.log(finish)
    console.log(others)
}

rest_parameters("One","Two","Three","Four","Five","Six","Seven")

// spread operator with objects

console.log("Spread operator with objects")

const obj_two={
    ...obj,
    car:"Lexus RCF"
}
console.log(obj_two)
let results=[]
const url="https://api.randomuser.me/?nat=US&results=1"
const getFakeUser=async()=>{
    let res=await fetch(url);
    let { results }=res.json();
    console.log(results);
}

getFakeUser()