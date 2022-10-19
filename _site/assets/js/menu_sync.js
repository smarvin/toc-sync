(function () {
    window.addEventListener('load', function () {
        var menuItem = document.getElementsByClassName('menu_active')[0].parentElement;
        var menuItemTopLocation = menuItem.offsetTop;

        var container = document.getElementById('docs_menu_container')
        var newLocation = menuItemTopLocation - (container.offsetHeight - menuItem.scrollHeight - 50);

        container.scrollTop = newLocation;
    });
})();
