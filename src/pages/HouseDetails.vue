<template>
  <div class=" row house-details-page d-flex justify-content-center">
    <div class="col-md-12 text-center">
    <h1>Welcome to the house details</h1></div>
    <div class="col-md-5">
      <div class="row text-center">

        <div class="col-md-12">
      <img class="w-100 " :src="house.imgUrl" alt="">
        </div>

        <div class="col-md-12">
          <h2>Year: {{house.year}}</h2>
            <h2> Bedrooms: {{house.bedrooms}}</h2> 
            <h2> Bathrooms: {{house.bathrooms}}</h2>
        </div>

        <div class="col-md-12">
          <h3>{{house.description}}</h3>
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
import { housesService } from '../services/HousesService'
import {useRoute, useRouter} from 'vue-router'

export default {
  setup(){
    const route = useRoute()
    const router = useRouter()
    onMounted(async()=>{
      try {
        await housesService.getHouseById(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })
    return {
      house: computed(()=> AppState.activeHouse),
      async destroy(){
        try {
          await housesService.destroy(route.params.id)
          //  navigate user back to home
          router.push({name: 'House'})
        } catch (error) {
          console.error(error)
        }
      }
    }
  }}
</script>


<style lang="scss" scoped>

</style>