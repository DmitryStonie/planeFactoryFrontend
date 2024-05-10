<template>
  <HomePageHeader />
    <div class="flex min-h-screen items-top justify-center ">
    <div class="overflow-x-auto ">
      <table class="min-w-full bg-white shadow-md rounded-xl ">
        <thead>
          <tr class="bg-blue-gray-100 text-gray-700">
            <th class="py-3 px-4 text-left">Id</th>
            <th class="py-3 px-4 text-left ">Name</th>
            <th class="py-3 px-4 text-left">Workshop</th>
            <th class="py-3 px-4 text-left">Production date</th>
            <th class="py-3 px-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody class="text-blue-gray-900">
          <tr v-for="item in $store.getters.products" :key="item.ID" class="border-b border-blue-gray-200">
            <td class="py-3 px-4">{{ item.ID }}</td>
            <td class="py-3 px-4">{{ item.Name }}</td>
            <td class="py-3 px-4 ">{{ item.Workshop }}</td>
            <td class="py-3 px-4">{{ item.ProductionDate }}</td>
            <td class="py-3 px-4">
              <router-link :to="'/products/' + item.ID">Edit</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import HomePageHeader from '../../components/HomePageHeader.vue'

export default {
  components: {
    HomePageHeader 
  },
  async mounted() {
    this.$store.commit('setAddP', true)
    this.$store.commit('setAddLink', "/products/new")
    this.$store.commit('setAddText', "Add new")
    this.$store.dispatch('getProducts')
  },
  unmounted(){
    this.$store.commit('cleanAddProps')
  },
}
</script>