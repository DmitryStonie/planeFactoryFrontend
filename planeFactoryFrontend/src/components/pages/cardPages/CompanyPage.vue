<template>
  <CardPageHeader />
  <div class="mx-auto max-w-3xl px-6 bg-white border-0 shadow-lg sm:rounded-3xl">
    <CompanyInfo />
    <div class="flex flex-wrap items-center justify-between gap-5 w-full mt-8 mb-4">
      <h1 class="text-2xl font-bold mb-4 ml-4">Workshops</h1>
      <div class="flex max-lg:ml-auto space-x-3">
        <router-link
          class="px-4 mr-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
          to="/workshops/new"
        >
          Add new
        </router-link>
      </div>
    </div>
    <div class="h-96 overflow-auto">
      <WorkshopsTable />
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
    <div class="h-96 overflow-auto">
      <AreasTable />
    </div>
    <div class="flex flex-wrap items-center justify-between gap-5 w-full mt-8 mb-4">
      <h1 class="text-2xl font-bold mb-4 ml-4">Labs</h1>
      <div class="flex max-lg:ml-auto space-x-3">
        <router-link
          class="px-4 mr-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
          to="/labs/new"
        >
          Add new
        </router-link>
      </div>
    </div>
    <div class="h-64 overflow-auto">
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
    </div>
  </div>
</template>

<script>
import CardPageHeader from '../../components/CardPageHeader.vue'
import CompanyInfo from '../companyInfo/CompanyInfo.vue'
import WorkshopsTable from '../tables/WorkshopsTable.vue'
import AreasTable from '../tables/AreasTable.vue'
import LabsTable from '../tables/LabsTable.vue'

export default {
  components: {
    CardPageHeader,
    CompanyInfo,
    WorkshopsTable,
    AreasTable,
    LabsTable
  },
  mounted() {
    this.$store.commit('cleanWorkshops')
    this.$store.commit('cleanAreas')
    this.$store.commit('cleanLabs')
    this.$store.commit('cleanCompanies')
    this.$store.dispatch('getCompany', this.$route.params.id)
  },
  unmounted() {
    this.$store.commit('cleanWorkshops')
    this.$store.commit('cleanAreas')
    this.$store.commit('cleanLabs')
  },
  methods: {
    async saveData() {
      this.$store.dispatch('putCompany', this.$route.params.id)
    }
  }
}
</script>
