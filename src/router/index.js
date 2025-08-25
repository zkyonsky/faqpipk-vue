//import vue router
import { createRouter, createWebHistory } from 'vue-router';

//import axios
import axios from 'axios';

//default base URL / EndPoint API
axios.defaults.baseURL = "https://pipk.my.id";

//define a routes
const routes = [
    {
        path: '/',
        name: 'faq',
        component: () => import( /* webpackChunkName: "Faq" */ "../views/faq/Index.vue"),
    },
    {
        path: '/course',
        name: 'course',
        component: () => import( /* webpackChunkName: "CourseIndex" */ "../views/course/Index.vue"),
    },
    {
        path: '/faq/:id',
        name: 'topic',
        component: () => import( /* webpackChunkName: "faqTopic" */ "../views/faq/Topic.vue")
    },
    {
        path: '/topic/:id',
        name: 'problem',
        component: () => import( /* webpackChunkName: "Problem" */ "../views/faq/Problem.vue")
    },
    {
        path: '/cluster/:id',
        name: 'detail_course',
        component: () => import( /* webpackChunkName: "Problem" */ "../views/course/Course.vue")
    },
    // {
    //     path: '/event',
    //     name: 'event',
    //     component: () => import( /* webpackChunkName: "EventIndex" */ "../views/event/Index.vue")
    // },
    // {
    //     path: '/event/:slug',
    //     name: 'detail_event',
    //     component: () => import( /* webpackChunkName: "EventShow" */ "../views/event/Show.vue")
    // },
    // {
    //     path: '/photo',
    //     name: 'photo',
    //     component: () => import( /* webpackChunkName: "PhotoIndex" */ "../views/photo/Index.vue")
    // },
    // {
    //     path: '/video',
    //     name: 'video',
    //     component: () => import( /* webpackChunkName: "VideoIndex" */ "../views/video/Index.vue")
    // },
    // {
    //     path: '/contact',
    //     name: 'contact',
    //     component: () => import( /* webpackChunkName: "ContactIndex" */ "../views/contact/Index.vue")
    // },
    // {
    //     path: '/:slug',
    //     name: 'detail_post',
    //     component: () => import( /* webpackChunkName: "PostShow" */ "../views/post/Show.vue")
    // },
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // <-- routes
})

export default router
