import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams'
    },
    {
      name: 'teams',
      path: '/teams',
      component: TeamsList,
      children: [
        {
          name: 'team-members',
          path: '/teams/:teamId',
          component: TeamMembers,
          props: true
        }
      ]
      // alias: '/'
    },
    {
      path: '/users',
      component: UsersList
    },
    {
      path: '/:notFound(.*)',
      redirect: '/teams'
    }
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (savedPosition) {
      savedPosition;
    }
    return { left: 0, top: 0 };
  }
});

const app = createApp(App);

app.use(router);

app.mount('#app');
