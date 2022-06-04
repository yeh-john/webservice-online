
function search(){
    
    // define search_bar
    let search_bar = document.querySelector(".search-bar").value;

    console.log(search_bar);

    if (search_bar.length == 0) {
        var input = document.querySelector('.search-bar');
        input.placeholder='PLEASE ENTER TEXT';
        // Change placeholder color
    } else {
        // Change space to special character
        let search_info = search_bar.replace(/\s+/g, "+");
        
        // Chage search value to url
        let url = `https://youtube.com/results?search_query=${search_info}`;
        
        // Jump to url
        setTimeout(() => location.replace(url), 1000);
    }



};

// Plese Enter to search
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        search();
    }
});
