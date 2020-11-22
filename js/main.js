function Encrypt(){//加密
    let plaintext = document.getElementById("plaintext").value;
    let pwd = document.getElementById("en_de_pwd").value;
    let ciphertext = CryptoJS.AES.encrypt(plaintext,pwd).toString();
    console.log(ciphertext);
    document.getElementById("ciphertext").value = ciphertext;
    document.getElementById("en_de_pwd").value = "";
}
function Decrypt(){//解密
    let ciphertext = document.getElementById("ciphertext").value;
    let pwd = document.getElementById("en_de_pwd").value;
    let plaintext = CryptoJS.AES.decrypt(ciphertext,pwd).toString(CryptoJS.enc.Utf8);
    if(plaintext === "")
    {
        alert("密碼錯誤");
    }
    else
    {
        document.getElementById("plaintext").value = plaintext;
    }
    document.getElementById("en_de_pwd").value = "";
}
let run = false;
function search(){
    let name = $("#name").val();
    let pwd = $("#pwd").val();
    let find_name = $("#select_seach_name").find(":selected").val();
    if(name == "" || pwd == ""){
        alert("請輸入完整");
    }else if(!run){
        run = true;
        $("#serch_btn").text("等待回傳")
        $.ajax({
            type: "POST",
            url: "https://script.google.com/macros/s/AKfycbwxH_A7eAA8h2XCXimNTgDtYt6FN80L6jRZThdGxl3kmuQ4oOLf/exec",
            data: {name:name,pwd:pwd,find_name:find_name},
            dataType: "text",
            success: function (response) {
                document.getElementById("ciphertext").value = response;
                $("#serch_btn").text("呼叫成功")
                setTimeout(function(){
                    $("#serch_btn").text("搜尋")
                    run = false;
                },1000);
            },error:function(res){
                console.log(res);
                run = false;
            }
        });
    }else{
        alert("等待API傳值");
    }
}
$(document).ready(function () {
    let aes_data=12;
    for(let i=1;i<=aes_data;i++){
        $("#select_seach_name").append(`<option value="${i}">${i}</option>`);
    }
});