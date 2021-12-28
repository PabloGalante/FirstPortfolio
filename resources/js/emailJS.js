const userid = config.USER_ID_EMAILJS;
const serviceid = config.SERVICE_ID_EMAILJS;
const templateid = config.TEMPLATE_ID_EMAILJS;

(function () {
    emailjs.init(userid);
})();

function sendmail() {
    let fullName = document.getElementById("username").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("textarea").value;

        const contactParams = {
            from_name: fullName,
            from_email: userEmail,
            message: userMessage
        };

    emailjs.send(serviceid, templateid, contactParams).then(function (res) {})
};