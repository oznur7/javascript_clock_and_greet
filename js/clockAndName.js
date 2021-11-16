function getName () {
    var name = prompt("Lütfen adınızı giriniz: ")
    document.getElementById("myName").innerText = name;
}

function showTime() {
    var date = new Date();
    var hour = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    var weekDay = date.getDay();

    var wDayArray = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
    var wDayName = wDayArray[weekDay]

    hour = hour < 10 ? "0" + hour : hour;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    var time = hour + ":" + mins + ":" + secs + "" + weekDay;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setTimeout(showTime, 1000);

}

getName();
showTime();