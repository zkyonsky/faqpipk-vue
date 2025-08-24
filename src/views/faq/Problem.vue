<template>
    <div>
        <Header />
        
        <div class="main-container">
            <div class="content">
                <h1>Permasalahan dan Solusi</h1>
                
                <div class="faq-list">
                    
                    <div v-for="problem in problems" :key="problem.id">
                        <div class="faq-item">
                            <button @click="toggleCollapse(problem)" class="faq-question" aria-expanded="false">
                                {{ problem.name }}
                            </button>
                            <div v-show="problem.isCollapsed">
                                <div class="faq-answer">
                                <div class="mt-3" v-html="problem.solution"> </div>
                                <!-- <p>{{ problem.solution }}</p> -->
                                    <div v-if="problem.additional">
                                        <button @click="showModal = true" class="video-btn">Lihat Penjelasan</button>

                                        <Modal :is-open="showModal" title="My Awesome Modal" @close="showModal = false">
                                        <p>{{ problem.additional }}</p>
                                        <template #footer>
                                            <button @click="showModal = false">Close</button>
                                        </template>
                                        </Modal>

                                    </div>
                                </div>                           
                            </div>
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
import Modal from "../../components/Modal.vue";

export default {
  
    name: 'ProblemComponent',
    
    components: { 
        Header, 
        Footer,
        Modal 
    },

   
    methods: {
        goBack() {
          this.$router.back();
        },
        toggleCollapse(problem) {
          problem.isCollapsed = !problem.isCollapsed;
        },
      },

    setup() {
            
            //define state
            const problems  = ref([]);

            //define route
            const route = useRoute();

            const showModal = ref(false);

            

            //run hook onMounted
            onMounted(() => {

                //get faq detail / topic
                axios.get(`/api/problem/${route.params.id}`)
                    .then(response => {
                        problems.value = response.data.data;
                    })
            });

            return {
                problems,
                showModal
            }

    }



}



</script>