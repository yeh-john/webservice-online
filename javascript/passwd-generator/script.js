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
};








// When click .change-pw-btn to do get_passwd
document.querySelector(".generate-btn").addEventListener("click", function() {
    get_passwd.change_pw();
});
