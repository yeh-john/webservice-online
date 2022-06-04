
function search(){
    
    // define search_bar
    let search_bar = document.querySelector(".search-bar").value;
    
    // Change space to special character
    let search_info = search_bar.replace(/\s+/g, "+");
    
    // Chage search value to url
    let url = `https://youtube.com/results?search_query=${search_info}`;
    
    // Jump to url
    setTimeout(() => location.replace(url), 1000);

};

// Plese Enter to search
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        search();
    }
});
