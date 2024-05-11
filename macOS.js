document.getElementById("dugmeee").addEventListener("click", function() {
    var godina = prompt("Unesite godinu:");

    if (godina !== null && godina !== "") {
        var preporucenaVerzijaaa = document.getElementById("preporucenaVerzijaaa");

        if (godina >= 2001 && godina < 2002) {
            preporucenaVerzijaaa.value = "Mac OS X 10.0 (Cheetah)";
        } else if (godina >= 2002 && godina < 2003) {
            preporucenaVerzijaaa.value = "Mac OS X 10.1 (Puma)";
        } else if (godina >= 2003 && godina < 2005) {
            preporucenaVerzijaaa.value = "Mac OS X 10.2 (Jaguar) - 10.3 (Panther)";
        } else if (godina >= 2005 && godina < 2006) {
            preporucenaVerzijaaa.value = "Mac OS X 10.4 (Tiger)";
        } else if (godina >= 2006 && godina < 2007) {
            preporucenaVerzijaaa.value = "Mac OS X 10.5 (Leopard)";
        } else if (godina >= 2007 && godina < 2009) {
            preporucenaVerzijaaa.value = "Mac OS X 10.6 (Snow Leopard) - 10.8 (Mountain Lion)";
        } else if (godina >= 2009 && godina < 2012) {
            preporucenaVerzijaaa.value = "OS X 10.9 (Mavericks) - 10.11 (El Capitan)";
        } else if (godina >= 2012 && godina < 2017) {
            preporucenaVerzijaaa.value = "macOS 10.12 (Sierra) - 10.15 (Catalina)";
        } else if (godina >= 2017) {
            preporucenaVerzijaaa.value = "macOS 11.0 (Big Sur) i novije verzije";
        } else {
            preporucenaVerzijaaa.value = "Godina nije u validnom opsegu";
        }
    }
});
