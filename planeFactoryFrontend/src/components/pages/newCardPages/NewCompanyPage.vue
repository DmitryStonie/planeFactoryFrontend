<template>
  <CardPageHeader />
  <div class="mx-auto max-w-3xl px-6 bg-white border-0 shadow-lg sm:rounded-3xl">
    <div class="relative z-0 w-full mb-4 mt-10">
      <textarea
        type="text"
        v-model="this.company.Name"
        name="name"
        rows="2"
        placeholder=" "
        required
        class="text-2xl pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      >
      </textarea>
      <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Name</label>
    </div>
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

export default {
  components: {
    CardPageHeader
  },
  data() {
    return {
      company: {
        ID: Number,
        Name: String("")
      }
    }
  },
  mounted() {
    this.$store.commit('cleanCompanies')
  },
  methods: {
    async saveData() {
      this.$store.dispatch('postCompany', this.company)
    }
  }
}
</script>
