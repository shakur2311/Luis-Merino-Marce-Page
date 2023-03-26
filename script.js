let aboutCheckBox = document.getElementById("aboutOption");
let skillsCheckBox = document.getElementById("skillsOption");
let portfolioCheckBox = document.getElementById("portfolioOption");
let contactCheckBox = document.getElementById("contactOption");
let whoiamText = document.getElementById('whoiam-text');
let contador = 1;
let apiKEY= "4faf50bb0cb9f434d2384430af1c4414";
let secretKEY = "4497b575058dd955db57992268de4f65";
const whoiamTextsArray = ['FRONTEND DEVELOPER','BACKEND DEVELOPER','SYSTEMS ENGINEER'];

const handleCheckBox = (event)=>{
    if(event.target.id=="aboutOption"){
        if(aboutCheckBox.checked==true){
            skillsCheckBox.checked=false;
            portfolioCheckBox.checked=false;
            contactCheckBox.checked=false;
        }else{
            aboutCheckBox.checked=true;
        }
    }else if(event.target.id=="skillsOption"){
        if(skillsCheckBox.checked==true){
            aboutCheckBox.checked=false;
            portfolioCheckBox.checked=false;
            contactCheckBox.checked=false;
        }else{
            skillsCheckBox.checked=true;
        }
    }else if(event.target.id=="portfolioOption"){
        if(portfolioCheckBox.checked==true){
            aboutCheckBox.checked=false;
            skillsCheckBox.checked=false;
            contactCheckBox.checked=false;
        }else{
            portfolioCheckBox.checked=true;
        }
    }else if(event.target.id=="contactOption"){
        if(contactCheckBox.checked==true){
            aboutCheckBox.checked=false;
            skillsCheckBox.checked=false;
            portfolioCheckBox.checked=false;
        }else{
            contactCheckBox.checked=true;
        }
    }
}

const textWhoiamChanger = ()=>{
    setTimeout(() => {
        whoiamText.innerHTML = "FRONTEND DEVELOPER"
    }, 0);
    setInterval(()=>{
        whoiamText.innerHTML = `${whoiamTextsArray[contador]}`
        if(contador==whoiamTextsArray.length-1){
            contador=0;
        }else{
            contador++
        }
    },6000)
}

const emailSend = (from,subject,message)=>{
    const data = JSON.stringify({
        Messages: [{
            From: {Email: "luis23231111@gmail.com"},
            To: [{Email: "luismerinomarce@gmail.com", Name: "Luis Merino"}],
            Subject: "hola",
            TextPart: "hola2"
        }]
    })
    fetch("https://api.mailjet.com/v3.1/send", {
        method: "POST",
        headers: {
        'Content-Type':"Application/json",
        'Authorization':`Bearer ${apiKEY}:${secretKEY}` },
        body: data
    }).then(res=>res.json).then(data=>console.log(data));
}
emailSend();
textWhoiamChanger();