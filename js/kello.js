const kellonpaivitys = setInterval(domkello, 1000);

function dom6() {
    clearInterval(kellonpaivitys);
}

function domkello() {
    const p = document.getElementById('kello');
    var d = new Date();
    p.innerHTML = ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2) + ':' + ('0' + d.getSeconds()).slice(-2);
}