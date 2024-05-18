<template>
  <CardPageHeader />
  <div class="mx-auto max-w-3xl px-6 bg-white border-0 shadow-lg sm:rounded-3xl">
    <div class="relative z-0 w-full mb-4 mt-10">
      <input
        type="text"
        v-model="this.test.Name"
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
        v-model="this.test.Description"
        rows="8"
        class="mb-8 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Description..."
      ></textarea>
    </form>

    <div class="relative z-0 w-full mb-5">
      <input v-model="this.test.Product" list="product" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"/>
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
        v-model="this.test.Lab"
        onclick="this.setAttribute('value', this.value);"
        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      >
        <option v-for="option in $store.getters.labs" :value="option.ID" :key="option.ID">
          {{ option.Name }}
        </option>
      </select>
      <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
        >Lab</label
      >
    </div>
    <div class="flex flex-row space-x-4">
      <div class="relative z-0 w-full mb-5">
        <input
          type="date"
          v-model="this.test.TimeStart"
          name="date"
          placeholder=" "
          onclick="this.setAttribute('type', 'date');"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="date" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
          >Date of start</label
        >
      </div>
    </div>
    <div class="flex flex-row space-x-4">
      <div class="relative z-0 w-full mb-5">
        <input
          type="date"
          v-model="this.test.TimeEnd"
          name="date"
          placeholder=" "
          onclick="this.setAttribute('type', 'date');"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="date" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
          >Date of end</label
        >
      </div>
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
      test: {
        Product: Number(0),
        Lab: Number,
        TimeStart: String(''),
        TimeEnd: String(''),
        Name: String(''),
        Description: String('')
      }
    }
  },
  mounted() {
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getLabs')
  },
  unmounted() {
    this.$store.commit('cleanProps')
  },
  methods: {
    async saveData() {
      let result = await this.$store.dispatch('postTest', this.test)
      if (result.data.status == 'OK') {
        this.$store.commit('setTests', result.data.tests)
        this.$router.push('/tests/' + this.$store.getters.tests[0].ID)
      } else {
        alarm('Не удалось создать тест')
      }
    }
  }
}
</script>
