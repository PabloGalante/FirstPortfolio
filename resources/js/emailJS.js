const userid = config.USER_ID_EMAILJS;
const serviceid = config.SERVICE_ID_EMAILJS;
const templateid = config.TEMPLATE_ID_EMAILJS;

(function () {
    emailjs.init(userid);
})();

function emailRegex(mail){
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    return regex.test(mail) ? true : false;
}

function checker(name, email, msg){
    let allGood = false;

    let nameOk = false;
    let emailOk = false;
    let msgOk = false;

    let mailCheck = emailRegex(email);

    name != "" && name.length < 50 ? nameOk = true : nameOk = false;

    email != 0 && mailCheck ? emailOk = true : emailOk = false;

    msg != "" && msg.length < 300 ? msgOk = true : msgOk = false;

    console.log(`nameOk: ${nameOk}, emailOk: ${emailOk}, msgOk: ${msgOk}, mailCheck: ${mailCheck}, allGood:${allGood}`)

    if(nameOk && emailOk && msgOk){
        allGood = true;
        return allGood;
    }
};

function sendmail() {
    let fullName = document.getElementById("username").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("textarea").value;
    let submitButton = document.getElementById("btn");

    const contactParams = {
        from_name: fullName,
        from_email: userEmail,
        message: userMessage
    };
    
    const checkValue = checker(fullName, userEmail, userMessage);

    if(checkValue){
        emailjs.send(serviceid, templateid, contactParams).then(function (res) {})
    }else{
        alert('Verifica que los campos sean validos');
    }
};