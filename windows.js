document.getElementById("dugme").addEventListener("click", function() {
    var godina = prompt("Unesite godinu:");

    if (godina !== null && godina !== "") {
        var preporucenaVerzija = document.getElementById("preporucenaVerzija");

        if (godina >= 1985 && godina < 1995) {
            preporucenaVerzija.value = "Windows 1.0";
        } else if (godina >= 1995 && godina < 1998) {
            preporucenaVerzija.value = "Windows 95";
        } else if (godina >= 1998 && godina < 2000) {
            preporucenaVerzija.value = "Windows 98";
        } else if (godina >= 2000 && godina < 2001) {
            preporucenaVerzija.value = "Windows ME";
        } else if (godina >= 2001 && godina < 2006) {
            preporucenaVerzija.value = "Windows XP";
        } else if (godina >= 2006 && godina < 2009) {
            preporucenaVerzija.value = "Windows Vista";
        } else if (godina >= 2009 && godina < 2012) {
            preporucenaVerzija.value = "Windows 7";
        } else if (godina >= 2012 && godina < 2015) {
            preporucenaVerzija.value = "Windows 8 ili 8.1";
        } else if (godina >= 2015) {
            preporucenaVerzija.value = "Windows 10";
        } else {
            preporucenaVerzija.value = "Godina nije u validnom opsegu";
        }
    }
});
