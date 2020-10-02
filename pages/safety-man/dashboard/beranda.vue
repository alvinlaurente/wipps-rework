<script>
/**
 * Dashboard component
 */
export default {
    head() {
        return {
            title: "Beranda",
        };
    },
    data() {
        return {
            title: "Beranda",
            items: [{
                    text: "Dashboard",
                },
                {
                    text: "Beranda",
                    active: true,
                },
            ],
            user: JSON.parse(localStorage.getItem("user"))
        };
    },
    methods: {
        removeAllClass(className) {
            const els = document.getElementsByClassName(className);
            while (els[0]) {
                els[0].classList.remove(className);
            }
        },
        activateMenuDropdown() {
            this.removeAllClass("mm-active");
            this.removeAllClass("mm-show");

            var activeMenu = null;
            var menus = document.getElementsByClassName("side-nav-link-ref")
            for (let i = 0; i < menus.length; i++) {
                if (menus[i].innerText === "Beranda") {
                    activeMenu = menus[i];
                }
            }

            activeMenu.classList.add("mm-active")
            activeMenu.parentElement.classList.add("mm-active")
            activeMenu.parentElement.parentElement.classList.add("mm-show")
            activeMenu.parentElement.parentElement.parentElement.classList.add("mm-active")
        }
    },
    mounted: function () {
        this.activateMenuDropdown()
        fetch( process.env.baseUrl + `/form-types/form`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            }
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
            document.getElementById("menu-list").innerHTML = "";
            for (let i = 0; i < result.data.length; i++) {
                document.getElementById("menu-list").innerHTML += "" +
                    "<div class=\"col-lg-4\">\n" +
                    "    <div class=\"card\">\n" +
                    "        <div class=\"card-body\">\n" +
                    "            <h4 class=\"mb-0\">"+result.data[i].name+"</h4>\n" +
                    "            <p class=\"text-muted mb-0\">"+result.data[i].created+"</p>\n" +
                    "            <img src=\""+result.data[i].file+"\" alt=\""+result.data[i].file+"\">\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</div>"
            }
        })
    },
    middleware: [
      "authentication",
      "auth-safety-man"
    ],
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="row" id="menu-list">
    </div>
</div>
</template>

<style scoped>
.btn-orange{
    background-color: #E55A02;
    color: white;
}

.btn-orange:hover{
    background-color: #bf4900;
}
</style>
