<template>
  <div class="job-form">
     <form class="d-flex flex-wrap justify-content-center my-4" @submit.prevent="createJob">
                    <div class="form-group d-flex flex-column">
                        
                        <input type="text" name="jobTitle" v-model="state.newJob.jobTitle" id="jobTitle" class="form-control" placeholder="Job Title"
                            required>
                    </div>
                    <div class="form-group d-flex flex-column">
                      
                        <input type="number" name="hours" v-model="state.newJob.hours" id="hours" class="form-control" placeholder="Hours" required>
                    </div>
                    <div class="form-group d-flex flex-column">
                 
                        <input type="number" name="rate" v-model="state.newJob.rate" id="rate" class="form-control" placeholder="rate" required
                            min="1">
                    </div>
                    <div class="form-group d-flex flex-column">
              
                        <input type="text" name="company" v-model="state.newJob.company" id="company" class="form-control" placeholder="company"
                            required>
                    </div>
                    <div class="form-group d-flex ">
                  
                        <div class="d-flex align-self-center">
                            <input type="text" name="description" v-model="state.newJob.description" id="description" class="form-control"
                                placeholder="Description" maxlength="240">
                        </div>
                        <div>
                          <button class="btn btn-success" @click="createJob">Create </button>
                        </div>
                    </div>



                </form>
  </div>
</template>


<script>
import { reactive } from '@vue/reactivity'
import { jobsService } from '../services/JobsService'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const state = reactive({
      newJob: {}
    })
    return {
      state,
      async createJob(){
        try {
          const newId = await jobsService.createJob(state.newJob)
          // NOTE clears the form
          state.newJob = {}
          router.push({name: 'JobDetails', params: {id: newId}})
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>