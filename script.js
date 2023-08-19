const pincode=518176;
let lat=14.6818877
let long= 77.6005911

const endpoint=`https://api.postalpincode.in/pincode/${pincode}`;
const id=document.getElementById("ipaddress");
const ip=document.getElementById("ip")


const city=document.getElementById("city")

const region=document.getElementById("region")

const organization=document.getElementById("organization")
const host=document.getElementById("host")

const TimeZone=document.getElementById("time-zone")
const DateandTime=document.getElementById("date-time")
const Pincode=document.getElementById("pincode")
const message=document.getElementById("message");
const postofficecard=document.getElementById("post-office-cards");
const submit=document.getElementById("submit-btn")


submit.addEventListener("click",()=>{
    document.getElementById("container-2").style.display="block";
    document.getElementById("container").style.display="none";

    
})








async function userApi(){
    let response=await fetch(endpoint,{method:"GET"});
    let result=await response.json();
    console.log(result)
    disPlayInfo(result)
    displayPostOffice(result[0].PostOffice)
    console.log(result[0].Message)
    console.log(result[0].PostOffice)
}
userApi()
let api_key=`https://api.ipify.org?format=json`
async function Ipaddress(){
    let response=await fetch(api_key,{method:"GET"});
    let result=await response.json();
    id.innerText=result.ip;
    ip.innerText=result.ip;
    console.log(result)


}
Ipaddress()

function disPlayInfo(data){
    const dt = new Date();
    let zone = dt.getTimezoneOffset();
      
    message.innerText=data[0].Message;
    Pincode.innerText=data[0].PostOffice[0].Pincode;
    document.getElementById("long").innerText=long;
    document.getElementById("lat").innerText=lat;
    city.innerText=data[0].PostOffice[0].Name;
    region.innerText=data[0].PostOffice[0].Region;
    TimeZone.innerText=dt;
    DateandTime.innerText=dt.getDay()+"/"+dt.getMonth()+"/"+dt.getFullYear()+"  "+dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();



}


function displayPostOffice(data){

    data.forEach(element => {
        let card=document.createElement("div");
    card.setAttribute("class","office-card")
    card.innerHTML=` <p>Name:${element.Name}</p>
    <p>BranchType:${element.BranchType}</p>
    <p>DeliveryStatus:${element.DeliveryStatus}</p>
    <p>District:${element.District}</p>
    <p>Division:${element.Division}</p>`
    postofficecard.appendChild(card);
    });

    

}

// const response=fetch(endpoint,{method:"GET"})
// response.then(serverResponse=>{
//     console.log(serverResponse)
// })