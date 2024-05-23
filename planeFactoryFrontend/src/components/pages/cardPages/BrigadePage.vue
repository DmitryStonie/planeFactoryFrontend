<template>
  <CardPageHeader />
  <div class="mx-auto max-w-3xl px-6 bg-white border-0 shadow-lg sm:rounded-3xl">
    <div class="relative z-0 w-full mb-4 mt-10">
      <input
        type="text"
        v-model="$store.getters.brigades[0].Name"
        name="name"
        rows="2"
        placeholder=" "
        required
        class="text-2xl pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      />
      <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Name</label>
    </div>
    <p class="text-xl mb-6">Id: {{ $store.getters.brigades[0].ID }}</p>
    <div class="relative z-0 w-full mb-5">
      <select
        name="select"
        v-model="$store.getters.brigades[0].WorkshopArea"
        onclick="this.setAttribute('value', this.value);"
        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      >
        <option v-for="option in $store.getters.areas" :value="option.ID" :key="option.ID">
          {{ option.Name }}
        </option>
      </select>
      <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
        >Area</label
      >
    </div>
    <div class="relative z-0 w-full mb-5">
      <select
        name="select"
        v-model="$store.getters.brigades[0].Foreman"
        onclick="this.setAttribute('value', this.value);"
        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      >
        <option>{{ getBoss($store.getters.brigades[0].Foreman) }}</option>
        <option v-for="option in $store.getters.workerE" :value="option.ID" :key="option.ID">
          {{ option.Name }}
        </option>
      </select>
      <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
        >Foreman</label
      >
    </div>
    <div class="flex flex-wrap items-center justify-between gap-5 w-full mt-8 mb-4">
      <h1 class="text-2xl font-bold mb-4 ml-4">Workers</h1>
      <h1 class="text-2xl font-medium mb-4 ml-2">count: {{ $store.getters.employees.length }}</h1>
      <div class="flex max-lg:ml-auto space-x-3">
        <router-link
          class="px-4 mr-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
          to="/employees/new"
        >
          Add new
        </router-link>
      </div>
    </div>
    <div class="h-64 overflow-auto">
      <EmployeesTable />
    </div>

    <div class="flex flex-wrap items-center justify-between gap-5 w-full mt-8  mb-4">
      <h1 class="text-2xl font-bold mb-4 ml-4">Jobs</h1>
      <div class="flex max-lg:ml-auto space-x-3">
        <router-link
          class="px-4 mr-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
          to="/jobs/new"
        >
          Add new
        </router-link>
      </div>
    </div>
    <div class="h-32 overflow-auto">
      <JobsTable />
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
import EmployeesTable from '../tables/EmployeesTable.vue'
import JobsTable from '../tables/JobsTable.vue'

export default {
  components: {
    CardPageHeader,
    EmployeesTable,
    JobsTable
  },
  data() {
    return {
      brigade: {
        ID: Number,
        WorkshopArea: Number,
        Foreman: Number,
        Name: String('')
      }
    }
  },
  mounted() {
    this.$store.commit('cleanAreas')
    this.$store.commit('cleanBrigades')
    this.$store.dispatch('getAreas')
    this.$store.dispatch('getWorkers')
    this.$store.dispatch('getBrigade', this.$route.params.id)
  },
  methods: {
    async saveData() {
      this.$store.dispatch('putBrigade', {
        id: this.$route.params.id,
        payload: this.$store.getters.brigades[0]
      })
    },
    async deleteData() {
      this.$store.commit('cleanBrigades')
      await this.$store.dispatch('deleteBrigade', this.$route.params.id)
      this.$router.go(-1)
    },
    getBoss(id) {
      const found = this.$store.getters.workers.find((element) => element.ID == id)
      if (found) {
        return found.Name
      }
      return ''
    }
  }
}
</script>
