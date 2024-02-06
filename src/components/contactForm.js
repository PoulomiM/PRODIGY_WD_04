import '../components/Contact';
import emailjs from 'emailjs-com';

export function send(event) {
    (function(){
        emailjs.init("GJuZ4lDXe6BcxSs2z");
    })();
    event.preventDefault();

    let contactName = document.getElementById('name').value;
    let contactEmail = document.getElementById('email').value;
    let contactMessage = document.getElementById('message').value;
    var service_id="service_ll0jwtu";
    var template_id="template_t3vch8q";

    let body = "Name: " + contactName + <br/> +" Email: " + contactEmail + <br/>+"Message: " + contactMessage;

    emailjs.send(service_id, template_id,{
        to: 'poulomimondal513@gmail.com',
        from: "poulomimondal513@gmail.com",
        subject: "Portfolio Review",
        Body: body
    }).then(
        message => {
            alert("Thanks for messaging!");
            console.log(message);
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        },
        error => {
            console.error(error);
        }
    );
}
