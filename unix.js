document.getElementById("dugmeeee").addEventListener("click", function() {
    var godina = prompt("Unesite godinu:");

    if (godina !== null && godina !== "") {
        var preporucenaVerzijaaaa = document.getElementById("preporucenaVerzijaaaa");

        if (godina >= 1969 && godina < 1972) {
            preporucenaVerzijaaaa.value = "Unix 1.0 (Prva verzija Unixa)";
        } else if (godina >= 1972 && godina < 1974) {
            preporucenaVerzijaaaa.value = "Unix V2 (Bell Labs)";
        } else if (godina >= 1974 && godina < 1979) {
            preporucenaVerzijaaaa.value = "Unix V4 - V7 (BSD)";
        } else if (godina >= 1979 && godina < 1984) {
            preporucenaVerzijaaaa.value = "Unix System III i Unix System V (AT&T)";
        } else if (godina >= 1984 && godina < 1988) {
            preporucenaVerzijaaaa.value = "Unix System V Release 2 (SVR2)";
        } else if (godina >= 1988 && godina < 1993) {
            preporucenaVerzijaaaa.value = "Unix System V Release 3 (SVR3)";
        } else if (godina >= 1993 && godina < 1995) {
            preporucenaVerzijaaaa.value = "Unix System V Release 4 (SVR4)";
        } else if (godina >= 1995 && godina < 2001) {
            preporucenaVerzijaaaa.value = "UnixWare 7 i OpenServer 5 (The Santa Cruz Operation)";
        } else if (godina >= 2001 && godina < 2005) {
            preporucenaVerzijaaaa.value = "Unix System V Release 5 (SVR5)";
        } else if (godina >= 2005 && godina < 2024) {
            preporucenaVerzijaaaa.value = "Danas postoje različite distribucije i varijante Unix operativnih sistema";
        } else {
            preporucenaVerzijaaaa.value = "Godina nije u validnom opsegu";
        }
    }
});
