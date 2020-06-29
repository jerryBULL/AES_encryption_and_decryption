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
    if(Decrypt_Plaintext === "")
    {
        alert("密碼錯誤");
    }
    else
    {
        document.getElementById("Decrypt_Plaintext").innerHTML = Decrypt_Plaintext;
    }
    document.getElementById("Decrypt_pwd").value = "";
}

$(document).ready(function () {
    //複製功能
    $( "#Decrypt_Plaintext,#Encrypt_Ciphertext" ).on( "click", function() {
        let text = $( this ).select();
        document.execCommand("copy");
        $('#copy').fadeIn(400,function(){
            $("#copy").fadeOut(400);
        })
    });
});