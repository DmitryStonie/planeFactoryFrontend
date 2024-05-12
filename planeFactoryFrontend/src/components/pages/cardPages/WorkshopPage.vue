<template>
  <CardPageHeader />
  <div class="mx-auto max-w-3xl px-6 bg-white border-0 shadow-lg sm:rounded-3xl">
    <div class="relative z-0 w-full mb-4 mt-10">
      <input
        type="text"
        v-model="$store.getters.workshops[0].Name"
        name="name"
        rows="2"
        placeholder=" "
        required
        class="text-2xl pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      />
      <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Name</label>
    </div>
    <p class="text-xl mb-6">Id: {{ $store.getters.workshops[0].ID }}</p>
    
    <div class="relative z-0 w-full mb-5">
    <select
      name="select"
      v-model="$store.getters.workshops[0].Boss"
      onclick="this.setAttribute('value', this.value);"
      class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
    >
      <option>{{$store.getters.bosses[0].Name}}</option>
      <option v-for="option in $store.getters.employees" :value="option.ID" :key="option.ID">
        {{ option.Name }}
      </option>
    </select>
    <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
      >Boss</label
    >
  </div>
    
    <div class="flex flex-wrap items-center justify-between gap-5 w-full mt-8 mb-4">
      <h1 class="text-2xl font-bold mb-4 ml-4">Workshop areas</h1>
      <div class="flex max-lg:ml-auto space-x-3">
        <router-link
          class="px-4 mr-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
          to="/areas/new"
        >
          Add new
        </router-link>
      </div>
    </div>
    <div class="h-64 overflow-auto">
      <AreasTable />
    </div>

    <div class="flex flex-wrap items-center justify-between gap-5 w-full mt-8  mb-4">
      <h1 class="text-2xl font-bold mb-4 ml-4">Works with Labs</h1>
      <div class="flex max-lg:ml-auto space-x-3">
        <router-link
          class="px-4 mr-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
          to="/labs/new"
        >
          Add new
        </router-link>
      </div>
    </div>
    <div class="h-32 overflow-auto">
      <LabsTable />
    </div>
    <div class="flex py-8">
      <button
      @click="saveData"
        id="button"
        type="button"
        class="w-1/2 ml-5 mr-5 px-6 py-3 mt-3 text-lg text-white transition-all duration-300 ease-linear rounded-lg shadow outline-none bg-[#007bff] hover:bg-transparent hover:text-[#007bff] hover:shadow-lg focus:outline-none"
      >
        Save
      </button>
      <button
      @click="deleteData"
        id="button"
        type="button"
        class="w-1/2 ml-5 mr-5 px-6 py-3 mt-3 text-lg text-white transition-all duration-300 ease-linear rounded-lg shadow outline-none bg-[#007bff] hover:bg-transparent hover:text-[#007bff] focus:outline-none"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import CardPageHeader from '../../components/CardPageHeader.vue'
import AreasTable from '../tables/AreasTable.vue'
import LabsTable from '../tables/LabsTable.vue'

export default {
  components: {
    CardPageHeader,
    AreasTable,
    LabsTable
  },
  mounted() {
    this.$store.commit('cleanWorkshops')
    this.$store.commit('cleanBosses')
    this.$store.commit('cleanAreas')
    this.$store.commit('cleanLabs')
    this.$store.commit('cleanEmployees')
    this.$store.dispatch('getWorkshop', this.$route.params.id)
  },
  methods: {
    async saveData() {
      this.$store.dispatch('putWorkshop', this.$route.params.id)
    }
  }
}
</script>
