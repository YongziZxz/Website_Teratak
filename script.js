function scrollToKatalog() {
    document.getElementById('katalog').scrollIntoView({ behavior: 'smooth' });
}

function showDetail(paket) {
    let detail = "";
    if (paket === 'silver') {
        detail = "Paket Silver termasuk dekorasi standar, pelaminan, dan sound system.";
    } else if (paket === 'gold') {
        detail = "Paket Gold termasuk dekorasi premium, catering 200 pax, dokumentasi.";
    } else if (paket === 'platinum') {
        detail = "Paket Platinum termasuk dekorasi mewah, catering 500 pax, dokumentasi full HD, MC & hiburan.";
    }
    alert(detail);
}
