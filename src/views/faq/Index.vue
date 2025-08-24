<template>
    <div class="faq">
        <Header />
        

         <div class="main-container">
            <div class="content-faq">
                <h1>FAQ PIPK</h1>
                <div class="menu-grid">
                    <router-link :to="{name: 'topic', params: {id: '1'}}" class="menu-item">
                        <div class="menu-image">
                            <img src="/public/assets/img/Penerapan.png" alt="Penerapan">
                        </div>
                            <div class="menu-title">Penerapan</div>
                    </router-link>
                    

                    <router-link :to="{name: 'topic', params: {id: '2'}}" class="menu-item">
                        <div class="menu-image">
                            <img src="/public/assets/img/Penilaian.png" alt="Penilaian">
                        </div>
                            <div class="menu-title">Penilaian</div>
                    </router-link>

                    <router-link :to="{name: 'topic', params: {id: '3'}}" class="menu-item">
                        <div class="menu-image">
                            <img src="/public/assets/img/Reviu.png" alt="Reviu">
                        </div>
                            <div class="menu-title">Reviu</div>
                    </router-link>
                </div>
            </div>
        </div>


        <Footer />
    </div>
</template>

<script>
 //import hook onMounted from vue
import { ref, onMounted } from 'vue';

import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";

export default {
  
    name: 'FaqComponent',
    
    components: { 
        Header, 
        Footer 
    },
    
   
}




</script>