import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import Experiences from './components/Experiences.vue';
import Contact from './components/Contact.vue';

export const routes = [
    {path: '/', component: Home },
    {path: '/projects', component: Projects},
    {path: '/experiences', component: Experiences},
    {path: '/contact', component: Contact},

];