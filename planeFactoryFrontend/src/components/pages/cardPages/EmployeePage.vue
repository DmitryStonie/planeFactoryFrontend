<template>
  <CardPageHeader />
  <div class="mx-auto max-w-3xl px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
    <EmployeeInfo v-if="$store.getters.employeeP"/>
    <EngineeringStaffInfo v-if="$store.getters.engineeringStaffP"/>
    <WorkerInfo v-if="$store.getters.workerP"/>
    <TesterInfo v-if="$store.getters.testerP"/>
    <AssemblerInfo v-if="$store.getters.assemblerP"/>
    <TurnerInfo v-if="$store.getters.turnerP"/>
    <LocksmithInfo v-if="$store.getters.locksmithP"/>
    <WelderInfo v-if="$store.getters.welderP"/>
    <EngineerInfo v-if="$store.getters.engineerP"/>
    <TechnologistInfo v-if="$store.getters.technologistP"/>
    <TechnicianInfo v-if="$store.getters.technicianP"/>
    <div class="flex">
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
import AssemblerInfo from '../employeeInfo/AssemblerInfo.vue'
import EmployeeInfo from '../employeeInfo/EmployeeInfo.vue'
import EngineerInfo from '../employeeInfo/EngineerInfo.vue'
import EngineeringStaffInfo from '../employeeInfo/EngineeringStaffInfo.vue'
import LocksmithInfo from '../employeeInfo/LocksmithInfo.vue'
import TechnicianInfo from '../employeeInfo/TechnicianInfo.vue'
import TechnologistInfo from '../employeeInfo/TechnologistInfo.vue'
import TesterInfo from '../employeeInfo/TesterInfo.vue'
import TurnerInfo from '../employeeInfo/TurnerInfo.vue'
import WelderInfo from '../employeeInfo/WelderInfo.vue'
import WorkerInfo from '../employeeInfo/WorkerInfo.vue'
export default {
  components: {
    CardPageHeader,
    AssemblerInfo,
    EmployeeInfo,
    EngineerInfo,
    EngineeringStaffInfo,
    LocksmithInfo,
    TechnicianInfo,
    TechnologistInfo,
    TesterInfo,
    TurnerInfo,
    WelderInfo,
    WorkerInfo
  },

  async mounted() {
    this.$store.dispatch('getEmployee', this.$route.params.id)
  },
  unmounted() {
    this.$store.commit('cleanEmployeeProps')
  },
  methods: {
    async saveData(){
      this.$store.dispatch('putEmployee', this.$route.params.id)
    },
    async deleteData(){
      this.$store.dispatch('deleteEmployee', this.$route.params.id)
      this.$router.go(-1)
    }
  }
}
</script>
