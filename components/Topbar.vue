<template>
<header id="page-topbar">
    <div class="navbar-header">
        <div class="d-flex">
            <!-- LOGO -->
            <div class="navbar-brand-box">
                <span class="logo-lg">
                    <img src="~/assets/images/logo.png" alt height="20" />
                </span>
            </div>

            <button @click="toggleMenu" type="button" class="btn btn-sm px-3 font-size-16 header-item vertical-menu-btn" id="vertical-menu-btn">
                <i class="fa fa-fw fa-bars"></i>
            </button>
        </div>
    </div>
</header>
</template>