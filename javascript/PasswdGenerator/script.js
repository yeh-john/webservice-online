
// Video url:  https://youtu.be/fOvYE1i_IiY





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
        document.querySelector("#passwd-1").innerHTML = passwd;
        document.querySelector("#passwd-2").innerHTML = passwd;


    },
};








// When click .change-pw-btn to do get_passwd
document.querySelector(".change-pw-btn").addEventListener("click", function() {
    get_passwd.change_pw();
});







/* 

document.querySelector(".change-pw-btn").addEventListener("click", function() {

    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!$%&*()-_";

    var passwdLength = document.querySelector(".pw-length").value;


    document.querySelector(".passwd").innerHTML = passwdLength;
    
});

 */







/* 

example website :  https://www.lastpass.com/features/password-generator

XSS pdf url :   https://www.cs.columbia.edu/~suman/6183_slides/


 */



