<template>
    <div>
        <Header />
        
        <div class="main-container">
            <div class="content">
                <div v-for="cluster in courses.cluster" :key="cluster.name">
                    <h1>Open Access Kluster {{ cluster.name }} </h1>
                </div>      

                    <div class="cluster-menu">
                        <div v-for="course in courses.courses" :key="course.id">
                            <a @click="courseLink(course)" class="cluster-item">
                                {{ course.name }}
                            </a>
                        </div>
                    </div>

                    

                <div class="back-section">
                    <button @click="goBack()" class="btn-back">Kembali</button>
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

    methods: {
        goBack() {
          this.$router.back();
        },
        courseLink(course){
        window.open(course.address, "_blank");
        // window.location.href = course.address;
        }
      },

    setup() {
            
            //define state
            const courses  = ref([]);

            //define route
            const route = useRoute();

            //run hook onMounted
            onMounted(() => {

                //get faq detail / topic
                axios.get(`/api/cluster/${route.params.id}`)
                    .then(response => {
                        courses.value = response.data.data;
                    })
            });

            return {
                courses,
            }

        }



}



</script>