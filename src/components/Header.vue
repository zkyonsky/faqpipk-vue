<template>
    <div class="header">
        <div class="logo">
            <img src="/public/assets/img/Logo.png">
        </div>
        <div class="nav-links">
            <router-link :to="{name: 'faq'}" class="nav-link">FAQ</router-link>
            <router-link :to="{name: 'course'}" class="nav-link">Open Access</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>