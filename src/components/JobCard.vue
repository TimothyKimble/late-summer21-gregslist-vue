<template>
      <div class="Job m-2 bg-light shadow shrink">
        <!-- passing required param ':id' -->
        <router-link :to="{name: 'JobDetails', params: {id: job.id}}">
          <img src="https://placekitten.com/200/200" class="w-100" :alt="job.year">
          <div class="p-3">
              <div class="text-center">
                  <p><b>Title: {{job.jobTitle}} - Rate: ${{job.rate}} per hour</b></p>
              </div>
          </div>
        </router-link>
      </div>
</template>


<script>
export default {
  props: {
    // value captured from the parent data
    job: {
      type: Object,
      required: true
    }
  },
  setup(){
    return {}
  }}
</script>


<style lang="scss" scoped>
.grow { 
transition: all .2s ease-in-out; 
}

.grow:hover { 
transform: scale(1.1); 
}

.shrink { 
transition: all .3s ease-in-out; 
}

.shrink:hover { 
transform: scale(0.96); 
}
</style>