<template>
  <div class=" row car-details-page d-flex justify-content-center">
    <div class="col-md-12 text-center">
    <h1>Welcome to the car details</h1></div>
    <div class="col-md-6">
      <div class="row text-center">

        <div class="col-md-12">
      <img class="w-100 " :src="car.imgUrl" alt="">
        </div>

        <div class="col-md-12">
          <h2>{{car.make}} - {{car.model}}</h2>
        </div>

        <div class="col-md-12">
          <h3>{{car.description}}</h3>
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
import { carsService } from '../services/CarsService'
import {useRoute, useRouter} from 'vue-router'

export default {
  setup(){
    const route = useRoute()
    const router = useRouter()
    onMounted(async()=>{
      try {
        await carsService.getCarById(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })
    return {
      car: computed(()=> AppState.activeCar),
      async destroy(){
        try {
          await carsService.destroy(route.params.id)
          //  navigate user back to home
          router.push({name: 'Home'})
        } catch (error) {
          console.error(error)
        }
      }
    }
  }}
</script>


<style lang="scss" scoped>

</style>