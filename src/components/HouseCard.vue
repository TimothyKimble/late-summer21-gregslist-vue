<template>
      <div class="House m-2 bg-light shadow shrink">
        <!-- passing required param ':id' -->
        <router-link :to="{name: 'HouseDetails', params: {id: house.id}}">
          <img :src="house.imgUrl" class="w-100" :alt="house.year">
          <div class="p-3">
              <div class="text-center">
                  <p><b>Year: {{house.year}} - Bedrooms: {{house.bedrooms}}</b></p>
              </div>
          </div>
        </router-link>
      </div>
</template>


<script>
export default {
  props: {
    // value captured from the parent data
    house: {
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