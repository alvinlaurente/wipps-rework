<script>
import {
    authFackMethods
} from "~/store/helpers";
/**
 * Topbar component
 */
export default {
    data() {
        return {
            languages: [{
                    flag: require("~/assets/images/flags/us.jpg"),
                    language: "en",
                    title: "English",
                },
                {
                    flag: require("~/assets/images/flags/french.jpg"),
                    language: "fr",
                    title: "French",
                },
                {
                    flag: require("~/assets/images/flags/spain.jpg"),
                    language: "es",
                    title: "spanish",
                },
                {
                    flag: require("~/assets/images/flags/china.png"),
                    language: "zh",
                    title: "Chinese",
                },
                {
                    flag: require("~/assets/images/flags/arabic.png"),
                    language: "ar",
                    title: "Arabic",
                },
            ],
            current_language: this.$i18n.locale,
            text: null,
            flag: null,
            value: null,
        };
    },
    mounted() {
        this.value = this.languages.find((x) => x.language === this.$i18n.locale);
        this.text = this.value.title;
        this.flag = this.value.flag;
    },
    methods: {
        ...authFackMethods,
        /**
         * Toggle menu
         */
        toggleMenu() {
            this.$parent.toggleMenu();
        },
        initFullScreen() {
            document.body.classList.toggle("fullscreen-enable");
            if (
                !document.fullscreenElement &&
                /* alternative standard method */
                !document.mozFullScreenElement &&
                !document.webkitFullscreenElement
            ) {
                // current working methods
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(
                        Element.ALLOW_KEYBOARD_INPUT
                    );
                }
            } else {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            }
        },
        /**
         * Toggle rightsidebar
         */
        toggleRightSidebar() {
            this.$parent.toggleRightSidebar();
        },
        /**
         * Set languages
         */
        setLanguage(locale, country, flag) {
            this.$i18n.locale = locale;
            this.current_language = locale;
            this.text = country;
            this.flag = flag;
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
                    <img class="rounded-circle header-profile-user" src="~/assets/images/users/avatar-4.jpg" alt="Header Avatar" />
                    <span class="d-none d-xl-inline-block ml-1 font-weight-medium font-size-15">{{ $t('navbar.dropdown.marcus.text')}}</span>
                    <i class="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
                </template>

                <!-- item-->
                <a class="dropdown-item" href="#">
                    <i class="uil uil-user-circle font-size-18 align-middle text-muted mr-1"></i>
                    <span class="align-middle">{{ $t('navbar.dropdown.marcus.list.profile') }}</span>
                </a>
                <a class="dropdown-item" href="#">
                    <i class="uil uil-wallet font-size-18 align-middle mr-1 text-muted"></i>
                    <span class="align-middle">{{ $t('navbar.dropdown.marcus.list.mywallet') }}</span>
                </a>
                <a class="dropdown-item d-block" href="#">
                    <i class="uil uil-cog font-size-18 align-middle mr-1 text-muted"></i>
                    <span class="align-middle">{{ $t('navbar.dropdown.marcus.list.settings') }}</span>
                    <span class="badge badge-soft-success badge-pill mt-1 ml-2">03</span>
                </a>
                <a class="dropdown-item" href="#">
                    <i class="uil uil-lock-alt font-size-18 align-middle mr-1 text-muted"></i>
                    <span class="align-middle">{{ $t('navbar.dropdown.marcus.list.lockscreen') }}</span>
                </a>
                <a class="dropdown-item" @click="logoutUser" href="javascript: void(0);">
                    <i class="uil uil-sign-out-alt font-size-18 align-middle mr-1 text-muted"></i>
                    <span class="align-middle">{{ $t('navbar.dropdown.marcus.list.logout') }}</span>
                </a>
            </b-dropdown>
        </div>
    </div>
</header>
</template>
