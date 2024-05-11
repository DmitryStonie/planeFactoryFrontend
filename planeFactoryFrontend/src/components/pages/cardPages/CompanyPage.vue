<template>
  <CardPageHeader />
  <div class="mx-auto max-w-3xl px-6 bg-white border-0 shadow-lg sm:rounded-3xl">
    <CompanyInfo />
    <h1 class="text-2xl font-bold mb-4 mt-8 ml-4">Workshops</h1>
    <WorkshopsTable />
    <h1 class="text-2xl font-bold mb-4 mt-8 ml-4">Workshop areas</h1>
    <AreasTable />
    <h1 class="text-2xl font-bold mb-4 mt-8 ml-4">Labs</h1>
    <LabsTable />
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
  mounted(){
    this.$store.dispatch('getCompany', this.$route.params.id)
  },
  methods: {
    async saveData(){
      this.$store.dispatch('putCompany', this.$route.params.id)
    },
    async deleteData(){
      this.$store.dispatch('deleteCompany', this.$route.params.id)
      this.$router.go(-1)
    }
  }
}
</script>
