<template>
  <div class="house-form">
     <form class="d-flex flex-wrap justify-content-center" @submit.prevent="createHouse">
                    <div class="form-group d-flex flex-column">
                        <label class='m-0' for="year">Year Built</label>
                        <input type="text" name="year" v-model="state.newHouse.year" id="year" class="form-control" placeholder="Year Built"
                            required>
                    </div>
                    <div class="form-group d-flex flex-column">
                        <label class='m-0' for="bedrooms">bedrooms</label>
                        <input type="text" name="bedrooms" v-model="state.newHouse.bedrooms" id="bedrooms" class="form-control" placeholder="Bed" required>
                    </div>
                    <div class="form-group d-flex flex-column">
                        <label class='m-0' for="bath">Bath</label>
                        <input type="number" name="bathrooms" v-model="state.newHouse.bathrooms" id="bathrooms" class="form-control" placeholder="Bath" required
                            min="1">
                    </div>
                    <div class="form-group d-flex flex-column">
                        <label class='m-0' for="price">Price</label>
                        <input type="number" name="price" v-model="state.newHouse.price" id="price" class="form-control" placeholder="Price"
                            required>
                    </div>
                    <div class="form-group d-flex flex-column">
                        <label class="m-0" for="imgUrl">Image Url</label>
                        <input type="text" name="imgUrl" v-model="state.newHouse.imgUrl" id="imgUrl" class="form-control" placeholder="Url">
                    </div>
                    <div class="form-group d-flex flex-column">
                        <label class='m-0' for="description">Description</label>
                        <div class="d-flex align-self-center">
                            <input type="text" name="description" v-model="state.newHouse.description" id="description" class="form-control"
                                placeholder="Description" maxlength="240">
                        </div>
                    </div>
                    <div class="form-group d-flex flex-column">
                        <label class='m-0' for="description">Levels</label>
                        <div class="d-flex align-self-center">
                            <input type="number" name="levels" v-model="state.newHouse.levels"  id="levels" class="form-control" placeholder="Levels"
                                maxlength="240">
                            <button type="submit" class="btn btn-outline-success">Add</button>
                        </div>
                    </div>



                </form>
  </div>
</template>


<script>
import { reactive } from '@vue/reactivity'
import { housesService } from '../services/HousesService'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const state = reactive({
      newHouse: {}
    })
    return {
      state,
      async createHouse(){
        try {
          const newId = await housesService.createHouse(state.newHouse)
          // NOTE clears the form
          debugger
          state.newHouse = {}
          router.push({name: 'HouseDetails', params: {id: newId}})
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