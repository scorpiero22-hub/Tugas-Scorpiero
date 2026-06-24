function ambilNilai() {
    let a = parseFloat(document.getElementById("angka1").value);
    let b = parseFloat(document.getElementById("angka2").value);

    return {a, b};
}

function tambah() {
    let {a,b} = ambilNilai();
    document.getElementById("hasil").innerHTML = a + b;
}

function kurang() {
    let {a,b} = ambilNilai();
    document.getElementById("hasil").innerHTML = a - b;
}

function kali() {
    let {a,b} = ambilNilai();
    document.getElementById("hasil").innerHTML = a * b;
}

function bagi() {
    let {a,b} = ambilNilai();
    document.getElementById("hasil").innerHTML = a / b;
}