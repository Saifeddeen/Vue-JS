<template>
    <!-- header -->
    <HeaderComponent />
    <!-- navbar -->
    <NavbarComponent />

    <!-- content -->
    <slot />

    <!-- footer -->
    <FooterComponent />
    <!-- copyright -->
    <CopyrightComponent />
</template>

<script setup>
import CopyrightComponent from './CopyrightComponent.vue';
import FooterComponent from './FooterComponent.vue';
import HeaderComponent from './HeaderComponent.vue';
import NavbarComponent from './NavbarComponent.vue';
</script>