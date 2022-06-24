
// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyHeader()};

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
    var header = document.getElementById("site-header");
    var sticky = 0;
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
