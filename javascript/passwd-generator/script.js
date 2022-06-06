let get_passwd = {
    change_pw: function() {
        // create passwd
        // print passwd in html
        
        var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!$%&*()-_";


        var passwdLength = document.querySelector(".pw-length").value;
        var passwd = "";
        

        for (var i=0; i<passwdLength; i++){
            var randomNum = Math.floor(Math.random() * chars.length);
            passwd += chars.substring(randomNum,randomNum+1);
        }
        // Add password
        document.querySelector(".passwd").value = passwd;
    },
    copy_pw: function() {
        // Copy passwd
        var passwd_value = document.querySelector(".passwd");
        passwd_value.focus();
        passwd_value.select();
        document.execCommand("copy");
    },
};

// When click generate btn to generate passwd
document.querySelector(".generate-btn").addEventListener("click", function() {
    get_passwd.change_pw();
});

// When click copy btn to copy passwd
document.querySelector(".copy-btn").addEventListener("click", function() {
    get_passwd.copy_pw();
});


// Automatic to create password when visitor visite website
addEventListener('load', (event) => {
    // Default passwd length
    document.querySelector(".pw-length").value = 10;
    var pagebutton= document.querySelector(".generate-btn");
    setTimeout(() => pagebutton.click(), 500);
});



function test(){
    let length_value = document.querySelector(".pw-length").value;
    if(length_value.length == 0){
        // Add css on error msg
        document.querySelector(".error-msg").style.padding = "20px";
        // Add mesage on error msg
        document.querySelector(".error-msg").innerHTML = "ERROR : Please enter number!!";
    } else {
        //Reset error msg
        document.querySelector(".error-msg").innerHTML = "";
        document.querySelector(".error-msg").style.padding = "";
    }
}
