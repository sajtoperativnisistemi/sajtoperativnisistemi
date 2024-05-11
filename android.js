document.getElementById("dugmeeeee").addEventListener("click", function() {
    var godina = prompt("Unesite godinu:");

    if (godina !== null && godina !== "") {
        var preporucenaVerzija = document.getElementById("preporucenaVerzija");

        if (godina >= 2008 && godina < 2009) {
            preporucenaVerzijaaaaa.value = "Android 1.0 (ASTRO)";
        } else if (godina >= 2009 && godina < 2010) {
            preporucenaVerzijaaaaa.value = "Android 1.5 (Cupcake) - 1.6 (Donut)";
        } else if (godina >= 2010 && godina < 2011) {
            preporucenaVerzijaaaaa.value = "Android 2.0 (Eclair) - 2.2 (Froyo)";
        } else if (godina >= 2011 && godina < 2012) {
            preporucenaVerzijaaaaa.value = "Android 2.3 (Gingerbread) - 3.2 (Honeycomb)";
        } else if (godina >= 2012 && godina < 2013) {
            preporucenaVerzijaaaaa.value = "Android 4.0 (Ice Cream Sandwich) - 4.3 (Jelly Bean)";
        } else if (godina >= 2013 && godina < 2014) {
            preporucenaVerzijaaaaa.value = "Android 4.4 (KitKat)";
        } else if (godina >= 2014 && godina < 2015) {
            preporucenaVerzijaaaaa.value = "Android 5.0 (Lollipop) - 5.1";
        } else if (godina >= 2015 && godina < 2016) {
            preporucenaVerzijaaaaa.value = "Android 6.0 (Marshmallow)";
        } else if (godina >= 2016 && godina < 2017) {
            preporucenaVerzijaaaaa.value = "Android 7.0 (Nougat) - 7.1";
        } else if (godina >= 2017 && godina < 2018) {
            preporucenaVerzijaaaaa.value = "Android 8.0 (Oreo) - 8.1";
        } else if (godina >= 2018 && godina < 2019) {
            preporucenaVerzijaaaaa.value = "Android 9.0 (Pie)";
        } else if (godina >= 2019 && godina < 2020) {
            preporucenaVerzijaaaaa.value = "Android 10.0 (Q)";
        } else if (godina >= 2020) {
            preporucenaVerzijaaaaa.value = "Android 11.0 (R) i novije verzije";
        } else {
            preporucenaVerzijaaaaa.value = "Godina nije u validnom opsegu";
        }
    }
});
