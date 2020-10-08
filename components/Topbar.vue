<script>
import {
    layoutComputed
} from "~/store/helpers";
import {
    authFackMethods
} from "~/store/helpers";
/**
 * Topbar component
 */
export default {
    data() {
        return {
            
        };
    },
    mounted: function(){
        var logoutUser = null;
        var menus = document.getElementsByClassName("logout");

        logoutUser = menus;

        logoutUser.onclick = function(){
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          window.location.href = '/account/login';
        };
    },
    methods: {
        ...authFackMethods,
        toggleMenu() {
            this.$parent.toggleMenu();
        },
        profilUser() {
            this.$router.push({
                path: "/account/profil",
            });
        },
        logoutUser() {
            this.logout();
            this.$router.push({
                path: "/account/login",
            });
        },
    },
};
</script>

<template>
<header id="page-topbar">
    <div class="navbar-header">
        <div class="d-flex">
            <!-- LOGO -->
            <div class="navbar-brand-box">
                <nuxt-link to="/" class="logo logo-dark">
                    <span class="logo-sm">
                        <img src="~/assets/images/logo-sm.png" alt height="22" />
                    </span>
                    <span class="logo-lg">
                        <img src="~/assets/images/logo-dark.png" alt height="20" />
                    </span>
                </nuxt-link>

                <nuxt-link to="/" class="logo logo-light">
                    <span class="logo-sm">
                        <img src="~/assets/images/logo-sm.png" alt height="22" />
                    </span>
                    <span class="logo-lg">
                        <img src="~/assets/images/logo-light.png" alt height="20" />
                    </span>
                </nuxt-link>
            </div>

            <button @click="toggleMenu" type="button" class="btn btn-sm px-3 font-size-16 header-item vertical-menu-btn" id="vertical-menu-btn">
                <i class="fa fa-fw fa-bars"></i>
            </button>
        </div>

        <div class="d-flex">
            <b-dropdown class="d-inline-block" toggle-class="header-item" right variant="white">
                <template v-slot:button-content>
                    <img class="rounded-circle header-profile-user" src="~/assets/images/users/avatar.jpg" alt="Header Avatar" />
                    <span id="sidebar-user-name" class="d-none d-xl-inline-block ml-1 font-weight-medium font-size-15">Priawan Admin</span>
                    <i class="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
                </template>

                <!-- item-->
                <button class="dropdown-item" @click="profilUser">
                    <i class="uil uil-user-circle font-size-18 align-middle text-muted mr-1"></i>
                    <span class="align-middle">{{ $t('navbar.dropdown.marcus.list.profile') }}</span>
                </button>
                <a class="dropdown-item logout" @click="logoutUser" href="javascript: void(0);">
                    <i class="uil uil-sign-out-alt font-size-18 align-middle mr-1 text-muted"></i>
                    <span class="align-middle">{{ $t('navbar.dropdown.marcus.list.logout') }}</span>
                </a>
            </b-dropdown>
        </div>
    </div>
</header>
</template>
