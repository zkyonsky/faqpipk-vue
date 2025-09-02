<template>
    <div>
        <Header />
        
        <div class="main-container">
            <div class="content">
                <div v-for="category in faqs.category" :key="category.name">
                    <h1>Cluster Topik {{ category.name }} PIPK</h1>
                </div>
               
                    <div v-if="faqs.topic == 0">

                        <div v-for="loader in topic_loader" :key="loader">
                            <div class="cluster-menu">
                                    <BulletListLoader />
                            </div>
                                                    
                        </div>

                        
                    </div>
                        
                    <div v-else>
                        <div class="cluster-menu">
                            <div v-for="topic in faqs.topic" :key="topic.id">
                                <router-link :to="{name: 'problem', params: {id: topic.id}}" class="cluster-item">
                                    {{ topic.name }}
                                </router-link>
                            </div>
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
import {BulletListLoader} from 'vue-content-loader';

export default {
  
    name: 'TopicComponent',
    
    components: { 
        //loader component
        BulletListLoader,
        //component app
        Header, 
        Footer 
    },

    methods: {
        goBack() {
          this.$router.back();
        }
      },

    setup() {
            
            //define state
            const faqs  = ref([]);

            //define route
            const route = useRoute();

            const topic_loader = ref([2]);


            //run hook onMounted
            onMounted(() => {

                //get faq detail / topic
                axios.get(`/api/topic/${route.params.id}`)
                    .then(response => {
                        faqs.value = response.data.data;
                    })

                
            });

            

            return {
                faqs,
                topic_loader
            }

        }



}



</script>