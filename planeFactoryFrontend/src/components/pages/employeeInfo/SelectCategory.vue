<template>
  <div class="relative z-0 w-full mb-5">
    <select
      name="select"
      class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      v-model="this.selected"
      v-on:input="update($event.target.value)"
    >
      <option v-for="option in this.categories" :value="option.o1" :key="option.key">
        {{ option.o1 }}
      </option>
    </select>
    <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
      >Category</label
    >
  </div>
</template>

<script>
export default {
  methods: {
    update(value) {
      if (this.prevSelected === 'Assembler') {
        this.$store.commit('setAssemblerP', false)
        this.$store.commit('setWorkerP', false)
      } else if (this.prevSelected === 'Turner') {
        this.$store.commit('setTurnerP', false)
        this.$store.commit('setWorkerP', false)
      } else if (this.prevSelected === 'Locksmith') {
        this.$store.commit('setLocksmithP', false)
        this.$store.commit('setWorkerP', false)
      } else if (this.prevSelected === 'Welder') {
        this.$store.commit('setWelderP', false)
        this.$store.commit('setWorkerP', false)
      } else if (this.prevSelected === 'Engineer') {
        this.$store.commit('sethangEngineerP', false)
        this.$store.commit('setEngineeringStaffP', false)
      } else if (this.prevSelected === 'Technologist') {
        this.$store.commit('setTechnologistP', false)
        this.$store.commit('setEngineeringStaffP', false)
      } else if (this.prevSelected === 'Technician') {
        this.$store.commit('setTechnicianP', false)
        this.$store.commit('setEngineeringStaffP', false)
      } else if (this.prevSelected === 'Tester') {
        this.$store.commit('setTesterP', false)
      } else if (this.prevSelected === 'Worker') {
        this.$store.commit('setWorkerP', false)
      } else if (this.prevSelected === 'Engineering staff') {
        this.$store.commit('setEngineeringStaffP', false)
      }

      if (value === 'Assembler') {
        this.$store.commit('setAssemblerP', true)
        this.$store.commit('setWorkerP', true)
      } else if (value === 'Turner') {
        this.$store.commit('setTurnerP', true)
        this.$store.commit('setWorkerP', true)
      } else if (value === 'Locksmith') {
        this.$store.commit('setLocksmithP', true)
        this.$store.commit('setWorkerP', true)
      } else if (value === 'Welder') {
        this.$store.commit('setWelderP', true)
        this.$store.commit('setWorkerP', true)
      } else if (value === 'Engineer') {
        this.$store.commit('sethangEngineerP', true)
        this.$store.commit('setEngineeringStaffP', true)
      } else if (value === 'Technologist') {
        this.$store.commit('setTechnologistP', true)
        this.$store.commit('setEngineeringStaffP', true)
      } else if (value === 'Technician') {
        this.$store.commit('setTechnicianP', true)
        this.$store.commit('setEngineeringStaffP', true)
      } else if (value === 'Tester') {
        this.$store.commit('setTesterP', true)
      } else if (value === 'Worker') {
        this.$store.commit('setWorkerP', true)
      } else if (value === 'Engineering staff') {
        this.$store.commit('setEngineeringStaffP', true)
      }
      this.prevSelected = value
    }
  },
  data() {
    return {
      categories: [
        { o1: 'None' },
        { o1: 'Worker' },
        { o1: 'Engineering staff' },
        { o1: 'Tester' },
        { o1: 'Assembler' },
        { o1: 'Locksmith' },
        { o1: 'Turner' },
        { o1: 'Welder' },
        { o1: 'Engineer' },
        { o1: 'Technologist' },
        { o1: 'Technician' },
      ],
      selected: String,
      prevSelected: String
    }
  },
  
}
</script>
