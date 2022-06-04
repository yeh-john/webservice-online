
function search(){
    
    // define search_bar
    let search_bar = document.querySelector(".search-bar").value;

    console.log(search_bar);

    if (search_bar.length == 0) {
        document.querySelector(".error-msg").innerHTML = "Please enter text";
    } else {
        // Change space to special character
        let search_info = search_bar.replace(/\s+/g, "+");
        
        // Chage search value to url
        let url = `https://youtube.com/results?search_query=${search_info}`;
        
        // Jump to url
        setTimeout(() => window.open(url), 500);


        // If you want visitor can not back this web site you can use this code
        //   -------->  location.replace(url);
    }



};

// Plese Enter to search
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        search();
    }
});
