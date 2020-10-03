export default (context, inject) => {
    const activateMenuDropdown = MenuName => {
        const els = document.getElementsByClassName("mm-active");
        while (els[0]) {
            els[0].classList.remove("mm-active");
        }
        const els2 = document.getElementsByClassName("mm-show");
        while (els2[0]) {
            els2[0].classList.remove("mm-show");
        }
        const els5 = document.getElementsByClassName("active");
        while (els5[0]) {
            els5[0].classList.remove("active");
        }
        var activeMenu = null;
        const menus = document.getElementsByClassName("side-nav-link-ref");
        for (let i = 0; i < menus.length; i++) {
            if (menus[i].innerText === MenuName) {
                activeMenu = menus[i];
            }

        }
        if (activeMenu) {
          activeMenu.classList.add("mm-active")
          activeMenu.parentElement.classList.add("mm-active")
          activeMenu.parentElement.parentElement.classList.add("mm-show")
          activeMenu.parentElement.parentElement.parentElement.classList.add("mm-active")
        }

    }
    inject('activateMenuDropdown', activateMenuDropdown)
}
