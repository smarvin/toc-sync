(function () {
    window.addEventListener('load', function () {
        var menuItem = document.getElementsByClassName('menu_active')[0].parentElement;
        var menuItemTopLocation = menuItem.offsetTop;

        // Now we tell the div to scroll to that position using scrollTop:
        document.getElementById('docs_menu_container').scrollTop = menuItemTopLocation;
    });
})();
