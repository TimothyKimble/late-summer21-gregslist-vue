import { createRouter, createWebHashHistory } from 'vue-router'
import CarDetailsPage from '../pages/CarDetailsPage.vue'
import HouseDetails from '../pages/HouseDetails.vue'
import House from '../pages/House.vue'
import Home from '../pages/Home.vue'
import JobDetails from '../pages/JobDetails.vue'
import Job from '../pages/Job.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    // required param ':id'
    path: '/car-details/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  }, {
     // required param ':id'
     path: '/house-details/:id',
     name: 'HouseDetails',
     component: HouseDetails
  }, {
    path: '/houses',
    name: 'House',
    component: House
  }, {
    // required param ':id'
    path: '/job-details/:id',
    name: 'JobDetails',
    component: JobDetails
 }, {
  path: '/jobs',
  name: 'Job',
  component: Job
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
