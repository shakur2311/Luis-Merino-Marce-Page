let aboutCheckBox = document.getElementById("aboutOption");
let skillsCheckBox = document.getElementById("skillsOption");
let portfolioCheckBox = document.getElementById("portfolioOption");
let contactCheckBox = document.getElementById("contactOption");
let whoiamText = document.getElementById('whoiam-text');
let mailSentModal = document.getElementById('mailSentModal');
let mailSentModalContainer = document.getElementById('mailSentModalContainer');
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
        whoiamText.textContent = "FRONTEND DEVELOPER"
    }, 0);
    setInterval(()=>{
        whoiamText.textContent = `${whoiamTextsArray[contador]}`
        if(contador==whoiamTextsArray.length-1){
            contador=0;
        }else{
            contador++
        }
    },6000)
}

const emailSend = ()=>{
    try {
        let nameInput =  document.getElementById("nameInput");
        let subjectInput = document.getElementById("subjectInput");
        let messageInput = document.getElementById("messageInput");
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "shakuriwo23@gmail.com",
            Password : "04C76973FE42ACC6F1B4433BBD1245024960",
            To : "luismerinomarce@gmail.com",
            From : "shakuriwo23@gmail.com",
            Subject : subjectInput.value,
            Body : `Correo enviado por: ${nameInput.value} \n Mensaje: ${messageInput.value}`
        }).then(      
            ()=>{
                mailSentModalContainer.style.opacity = 1;
                mailSentModalContainer.style.visibility = "visible";
                nameInput.value = "";
                subjectInput.value = "";
                messageInput.value = "";
            }
        );
    } catch (error) {
        window.alert("Error al enviar!");
    }
}

const closeModal = ()=>{
    mailSentModalContainer.style.opacity = 0;
    mailSentModalContainer.style.visibility = "hidden";
}

textWhoiamChanger();