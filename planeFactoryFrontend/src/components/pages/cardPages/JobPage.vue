<template>
  <CardPageHeader />
  <div class="mx-auto max-w-3xl px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
    <div class="relative z-0 w-full mb-4 mt-2">
      <input
        type="text"
        v-model="$store.getters.jobs[0].Name"
        name="name"
        rows="2"
        placeholder=" "
        required
        class="text-2xl pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      />
      <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Name</label>
    </div>
    <form class="mx-auto">
      <label for="message" class="block mb-2 text-l font-medium text-gray-900 dark:text-white"
        >Description</label
      >
      <textarea
        id="message"
        v-model="$store.getters.jobs[0].Description"
        rows="8"
        class="mb-8 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Description..."
      ></textarea>
    </form>
    <div class="relative z-0 w-full mb-5">
      <input
        type="number"
        v-model="$store.getters.jobs[0].Product"
        list="product"
        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      />
      <datalist id="product">
        <option v-for="option in $store.getters.products" :value="option.ID" :key="option.ID">
          {{ option.ID }}
        </option>
      </datalist>
      <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
        >Product Id</label
      >
    </div>
    <div class="relative z-0 w-full mb-5">
      <select
        name="select"
        v-model="$store.getters.jobs[0].Brigade"
        onclick="this.setAttribute('value', this.value);"
        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      >
        <option v-for="option in $store.getters.brigades" :value="option.ID" :key="option.ID">
          {{ option.Name }}
        </option>
      </select>
      <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
        >Brigade</label
      >
    </div>

    <fieldset class="relative z-0 w-full p-px mb-5">
      <legend class="absolute text-gray-500 transform scale-75 -top-3 origin-0">Set status</legend>
      <div class="block pt-3 pb-2 space-x-4">
        <label>
          <input
            type="radio"
            name="radio"
            value="true"
            v-model="$store.getters.jobs[0].Status"
            class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
          />
          Done
        </label>
        <label>
          <input
            type="radio"
            name="radio"
            value="false"
            v-model="$store.getters.jobs[0].Status"
            class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
          />
          Undone
        </label>
      </div>
      <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
    </fieldset>
    <div class="relative z-0 w-full mb-6">
      <input
        type="number"
        v-model.number="$store.getters.jobs[0].Order"
        name="name"
        placeholder=" "
        required
        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      />
      <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
        >Order</label
      >
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
export default {
  components: {
    CardPageHeader
  },
  mounted() {
    this.$store.commit('cleanProducts')
    this.$store.commit('cleanBrigades')
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getBrigades')
    this.$store.dispatch('getJob', this.$route.params.id)
  },
  methods: {
    async saveData() {
      this.$store.dispatch('putJob', {
        id: this.$route.params.id,
        payload: this.$store.getters.jobs[0]
      })
    },
    async deleteData() {
      this.$store.commit('cleanJobs')
      await this.$store.dispatch('deleteJob', this.$route.params.id)
      this.$router.go(-1)
    },
  }
}
</script>
