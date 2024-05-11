document.getElementById("dugmee").addEventListener("click", function() {
    var godina = prompt("Unesite godinu:");

    if (godina !== null && godina !== "") {
        var preporucenaVerzijaa = document.getElementById("preporucenaVerzijaa");

        if (godina >= 1991 && godina < 1994) {
            preporucenaVerzijaa.value = "Linux 0.01";
        } else if (godina >= 1994 && godina < 1996) {
            preporucenaVerzijaa.value = "Slackware 1.0";
        } else if (godina >= 1996 && godina < 2000) {
            preporucenaVerzijaa.value = "Slackware 3.x";
        } else if (godina >= 2000 && godina < 2002) {
            preporucenaVerzijaa.value = "Slackware 7.x";
        } else if (godina >= 2002 && godina < 2006) {
            preporucenaVerzijaa.value = "Slackware 9.x - 10.x";
        } else if (godina >= 2006 && godina < 2013) {
            preporucenaVerzijaa.value = "Slackware 11.x - 14.0";
        } else if (godina >= 2013 && godina < 2022) {
            preporucenaVerzijaa.value = "Slackware 14.1 - 15.0";
        } else {
            preporucenaVerzijaa.value = "Godina nije u validnom opsegu";
        }
    }
});