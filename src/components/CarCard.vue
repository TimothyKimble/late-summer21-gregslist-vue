<template>
      <div class="car m-2 bg-light shadow shrink">
        <!-- passing required param ':id' -->
        <router-link :to="{name: 'CarDetails', params: {id: car.id}}">
          <img :src="car.imgUrl" class="w-100" :alt="car.make">
          <div class="p-3">
              <div class="text-center">
                  <p><b>{{car.year}} - {{car.make}}</b></p>
              </div>
          </div>
        </router-link>
      </div>
</template>


<script>
export default {
  props: {
    // value captured from the parent data
    car: {
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