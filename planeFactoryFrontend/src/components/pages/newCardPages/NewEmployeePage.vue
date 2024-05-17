<template>
  <CardPageHeader />
  <div class="mx-auto max-w-3xl px-6 bg-white border-0 shadow-lg sm:rounded-3xl">
    <NewEmployeeInfo v-if="$store.getters.employeeP"/>
    <SelectCategory />
    <NewEngineeringStaffInfo v-if="$store.getters.engineeringStaffP"/>
    <NewWorkerInfo v-if="$store.getters.workerP"/>
    <NewTesterInfo v-if="$store.getters.testerP"/>
    <NewAssemblerInfo v-if="$store.getters.assemblerP"/>
    <NewTurnerInfo v-if="$store.getters.turnerP"/>
    <NewLocksmithInfo v-if="$store.getters.locksmithP"/>
    <NewWelderInfo v-if="$store.getters.welderP"/>
    <NewEngineerInfo v-if="$store.getters.engineerP"/>
    <NewTechnologistInfo v-if="$store.getters.technologistP"/>
    <NewTechnicianInfo v-if="$store.getters.technicianP"/>
    <div class="flex py-8">
      <button
        @click="saveData"
        id="button"
        type="button"
        class="w-full ml-5 mr-5 px-6 py-3 mt-3 text-lg text-white transition-all duration-300 ease-linear rounded-lg shadow outline-none bg-[#007bff] hover:bg-transparent hover:text-[#007bff] hover:shadow-lg focus:outline-none"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
import CardPageHeader from '../../components/CardPageHeader.vue'
import NewEmployeeInfo from '../newEmployeeInfo/NewEmployeeInfo.vue'
import SelectCategory from '../newEmployeeInfo/SelectCategory.vue'
import NewAssemblerInfo from '../newEmployeeInfo/NewAssemblerInfo.vue'
import NewEngineerInfo from '../newEmployeeInfo/NewEngineerInfo.vue'
import NewEngineeringStaffInfo from '../newEmployeeInfo/NewEngineeringStaffInfo.vue'
import NewLocksmithInfo from '../newEmployeeInfo/NewLocksmithInfo.vue'
import NewTechnicianInfo from '../newEmployeeInfo/NewTechnicianInfo.vue'
import NewTechnologistInfo from '../newEmployeeInfo/NewTechnologistInfo.vue'
import NewTesterInfo from '../newEmployeeInfo/NewTesterInfo.vue'
import NewTurnerInfo from '../newEmployeeInfo/NewTurnerInfo.vue'
import NewWelderInfo from '../newEmployeeInfo/NewWelderInfo.vue'
import NewWorkerInfo from '../newEmployeeInfo/NewWorkerInfo.vue'

export default {
  components: {
    CardPageHeader,
    NewEmployeeInfo,
    SelectCategory,
    NewAssemblerInfo,
    NewEngineerInfo,
    NewEngineeringStaffInfo,
    NewLocksmithInfo,
    NewTechnicianInfo,
    NewTechnologistInfo,
    NewTesterInfo,
    NewTurnerInfo,
    NewWelderInfo,
    NewWorkerInfo
  },
  mounted() {
    this.$store.commit('cleanEmployees')
    this.$store.commit('cleanLabs')
    this.$store.commit('cleanBrigades')
    this.$store.commit('cleanWorkshops')
    this.$store.commit('cleanWorkers')
    this.$store.commit('cleanProps')
    this.$store.commit('setEmployeeP', true)
  },
  unmounted(){
    this.$store.commit('cleanProps')
  },
  methods: {
    async saveData() {
      let result = await this.$store.dispatch('postEmployee')
      //
      console.warn(result.data)
      if (result.data.status == 'OK') {
        this.$store.commit('setEmployees', result.data.employees)
        this.$router.push('/employees/' + this.$store.getters.employees[0].ID)
      } else {
        alarm('Не удалось создать работика')
      }
    }
  }
}
</script>
