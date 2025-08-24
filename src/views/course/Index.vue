<template>
    <div class="course">
        <Header />
        

         <div class="main-container">
    <!-- Left image -->
    <div class="left-side-image">
      <img src="/public/assets/img/Free.png" alt="Free">
    </div>

    <!-- Right image (Sertifikat) -->
    <div class="right-side-image">
      <img src="/public/assets/img/Sertifikat.png" alt="Sertifikat">
    </div>

    <!-- Content -->
    <div class="content">
      <h1>PELATIHAN OPEN ACCESS</h1>
      <div class="link-list">
        <div class="link-row top-row">
          <div v-for="cluster in clusters" :key="cluster.id">
            <router-link :to="{name: 'detail_course', params: {id: cluster.id}}" class="link-item">
              {{ cluster.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>


        <Footer />
    </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";

export default {
  
    name: 'CourseComponent',
    
    components: { 
        Header, 
        Footer 
    },


     setup() {
            
            //define state
            const clusters  = ref([]);

            //define route
            const route = useRoute();

            //run hook onMounted
            onMounted(() => {

                //get faq detail / topic
                axios.get(`/api/cluster`)
                    .then(response => {
                        clusters.value = response.data.data;
                    })
            });

            return {
                clusters,
            }
     }
    
   
}


</script>