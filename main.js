let Plaintext;
let Ciphertext;
let pwd;
function Encrypt(){
    Plaintext = document.getElementById("Plaintext").value;
    pwd = document.getElementById("Encrypt_pwd").value;
    let ncrypt_Ciphertext = CryptoJS.AES.encrypt(Plaintext,pwd).toString();
    document.getElementById("Encrypt_Ciphertext").innerHTML = ncrypt_Ciphertext;
    document.getElementById("Encrypt_pwd").value = "";
}
function Decrypt(){
    Ciphertext = document.getElementById("Ciphertext").value;
    pwd = document.getElementById("Decrypt_pwd").value;
    let Decrypt_Plaintext = CryptoJS.AES.decrypt(Ciphertext,pwd).toString(CryptoJS.enc.Utf8);
    document.getElementById("Decrypt_Plaintext").innerHTML = Decrypt_Plaintext;
    document.getElementById("Decrypt_pwd").value = "";
}
