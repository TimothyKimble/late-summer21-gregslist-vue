<template>
  <div class=" row job-details-page d-flex justify-content-center">
    <div class="col-md-12 text-center">
    <h1>Welcome to the job details</h1></div>
    <div class="col-md-5">
      <div class="row text-center">

        <div class="col-md-12">
      <img class="w-100 " :src="job.imgUrl" alt="">
        </div>

        <div class="col-md-12">
          <h2>Title: {{job.jobTitle}}</h2>
            <h2> Hours: {{job.hours}}</h2> 
            <h2> Salary: ${{job.rate}} per hour</h2>
        </div>

        <div class="col-md-12">
          <h3>{{job.description}}</h3>
        </div>

        <div class="col-md-12">
          <div class="row d-flex justify-content-between">
          <div class="col-md-1 p-0 m-0">
           <button class="btn btn-danger w-100" @click="destroy">Delete</button>
          </div>
          <div class="col-md-1 p-0 m-0">
           <button class="btn btn-info w-100">Bid</button>
          </div>
          
          </div>
        </div>

      </div>
    </div>

   
  </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { jobsService } from '../services/JobsService'
import {useRoute, useRouter} from 'vue-router'

export default {
  setup(){
    const route = useRoute()
    const router = useRouter()
    onMounted(async()=>{
      try {
        await jobsService.getJobById(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })
    return {
      job: computed(()=> AppState.activeJob),
      async destroy(){
        try {
          await jobsService.destroy(route.params.id)
          //  navigate user back to home
          router.push({name: 'Job'})
        } catch (error) {
          console.error(error)
        }
      }
    }
  }}
</script>


<style lang="scss" scoped>

</style>