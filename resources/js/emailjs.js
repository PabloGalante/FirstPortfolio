(function() {
    emailjs.init("user_lg73dS3xMwWEYQMuHguJX");
})();

function sendmail(){
    let fullName = document.getElementById("username").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("textarea").value;

        const contactParams = {
            from_name: fullName,
            from_email: userEmail,
            message: userMessage,
        };

    emailjs.send('service_53p0ghm', 'template_t1sbp2n', contactParams).then(function (res) {})
}