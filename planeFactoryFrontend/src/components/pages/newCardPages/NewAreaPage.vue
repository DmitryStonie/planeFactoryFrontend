<template>
  <CardPageHeader />
  <div class="mx-auto max-w-3xl px-6 bg-white border-0 shadow-lg sm:rounded-3xl">
    <div class="relative z-0 w-full mb-4 mt-10">
      <input
        type="text"
        v-model="this.area.Name"
        name="name"
        rows="2"
        placeholder=" "
        required
        class="text-2xl pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      />
      <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Name</label>
    </div>

    <div class="relative z-0 w-full mb-5">
      <select
        name="select"
        v-model="$store.getters.FilterProps.selected.Company"
        onclick="this.setAttribute('value', this.value);"
        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      >
        <option
          v-for="option in $store.getters.FilterProps.companies"
          :value="option"
          :key="option.ID"
          @change="onCompanySelect()"
        >
          {{ option.Name }}
        </option>
      </select>
      <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
        >Company</label
      >
    </div>

    <div class="relative z-0 w-full mb-5">
      <select
        name="select"
        v-model="$store.getters.FilterProps.selected.Workshop"
        onclick="this.setAttribute('value', this.value);"
        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        @change="onWorkshopSelect()"
        >
      <option
                  v-for="option in $store.getters.FilterProps.workshops"
                  :value="option"
                  :key="option.ID"
                >
                  {{ option.Name }}
                </option>
      </select>
      <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
        >Workshop</label
      >
    </div>

    <div class="relative z-0 w-full mb-5">
      <select
        name="select"
        v-model="this.area.Boss"
        onclick="this.setAttribute('value', this.value);"
        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      >
        <option v-for="option in $store.getters.employees" :value="option.ID" :key="option.ID">
          {{ option.Name }}
        </option>
      </select>
      <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
        >Boss</label
      >
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
      area: {
        ID: Number,
        Workshop: Number,
        Boss: Number,
        Name: String("")
      }
    }
  },
  mounted() {
    this.$store.commit('cleanCompanyF')
    this.$store.commit('cleanWorkshopF')
    this.$store.dispatch('getCompaniesF')
    this.$store.dispatch('getWorkshopsF')
    this.$store.dispatch('getEngineeringStaff')
  },
  unmounted(){
    this.$store.commit('cleanProps')
  },  
  methods: {
    selectCompany() {
      if (this.$store.getters.FilterProps.selected.Company.ID == 0) {
        this.$store.getters.FilterProps.companies.forEach((item) => {
          if (item.ID == this.$store.getters.FilterProps.selected.Workshop.Company) {
            this.$store.getters.FilterProps.selected.Company = item
          }
        })
      }
    },
    onCompanySelect() {
      this.$store.dispatch('getCompaniesF')
    },
    onWorkshopSelect() {
      this.selectCompany()
    },
    async saveData() {
    this.area.Workshop = this.$store.getters.FilterProps.selected.Workshop.ID
      let result = await this.$store.dispatch('postArea', this.area)
      if (result.data.status == 'OK') {
        this.$store.commit('setAreas', result.data.areas)
        this.$router.push('/areas/' + this.$store.getters.areas[0].ID)
      } else {
        alarm('Не удалось создать компанию')
      }
    }
  }
}
</script>
