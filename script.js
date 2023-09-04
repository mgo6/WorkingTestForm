const form = document.querySelector("#form")




form.addEventListener("submit", (e) => {
    e.preventDefault();
    var Name = document.getElementById("name").value;
    var Telegram = document.getElementById("telegram").value;
    var Age = document.getElementById("age").value;
    var Comment = document.getElementById("comment").value;

    var my_text = `New Message* %0A - Name : ${Name} %0A - Telegram_id : ${Telegram} %0A - Age : ${Age} %0A - Message : ${Comment}`

    var token = "6640124679:AAGJYkCwzugGNV9wFHttm870ilVurmKkXpY";
    var chat_id = -1001730640956
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}/`


    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();


    function createNotification() {
        const notif = document.createElement('div')
        notif.classList.add('toast')


        notif.innerHTML = ` <strong id="x">FORM SUBMITTED SUCCESSFULL</strong><br><strong>» THANK TOU «</strong>  `

        toasts.appendChild(notif);

        setTimeout(() => {
            notif.remove()
        }, 2500)
    }
    createNotification();


    form.reset();
});