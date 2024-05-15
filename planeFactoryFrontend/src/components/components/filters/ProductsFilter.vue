<template>
  <div class="m-10 max-w-screen-md">
    <div class="flex flex-col">
      <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
        <form class="">
          <div class="grid grid-rows-1 gap-6 md:grid-rows-2 lg:grid-rows-3 xl:grid-rows-4">
            <div class="flex flex-col">
              <label for="manufacturer" class="text-sm font-medium text-stone-600">Company</label>
              <select
                id="manufacturer"
                class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                v-model="$store.getters.FilterProps.selected.Company"
                @change="onCompanySelect()"
              >
                <option
                  v-for="option in $store.getters.FilterProps.companies"
                  :value="option"
                  :key="option.ID"
                >
                  {{ option.Name }}
                </option>
              </select>
            </div>
            <div class="flex flex-col">
              <label for="manufacturer" class="text-sm font-medium text-stone-600">Workshop</label>
              <select
                id="manufacturer"
                class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                v-model="$store.getters.FilterProps.selected.Workshop"
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
            </div>

            <div class="flex flex-col">
              <label for="manufacturer" class="text-sm font-medium text-stone-600"
                >WorkshopArea</label
              >
              <select
                id="manufacturer"
                class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                v-model="$store.getters.FilterProps.selected.Area"
                @change="onAreaSelect()"
              >
                <option
                  v-for="option in $store.getters.FilterProps.areas"
                  :value="option"
                  :key="option.ID"
                >
                  {{ option.Name }}
                </option>
              </select>
            </div>

            <div class="flex flex-col">
              <label for="manufacturer" class="text-sm font-medium text-stone-600">Category</label>
              <select
                id="manufacturer"
                class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                v-model="$store.getters.FilterProps.selected.Category"
              >
                <option
                  v-for="option in $store.getters.FilterProps.categories1"
                  :value="option.value"
                  :key="option.value"
                >
                  {{ option.value }}
                </option>
              </select>
            </div>
            <div class="flex flex-col">
              <label for="date" class="text-sm font-medium text-stone-600">Date from</label>
              <input
                type="date"
                id="date"
                class="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                v-model="$store.getters.FilterProps.selected.dateFrom1"
              />
            </div>

            <div class="flex flex-col">
              <label for="date" class="text-sm font-medium text-stone-600">Date to</label>
              <input
                type="date"
                id="date"
                class="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                v-model="$store.getters.FilterProps.selected.dateTo1"
              />
            </div>
          </div>

          <div class="mt-6 grid w-full grid-cols-2 justify-center space-x-4 md:flex">
            <button
              type="button"
              class="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring"
              @click="resetParams"
            >
              Reset
            </button>
            <button
              type="button"
              @click="search"
              class="rounded-lg bg-[#007bff] px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    resetParams() {
      this.$store.commit('cleanCompanyF')
      this.$store.commit('cleanWorkshopF')
      this.$store.commit('cleanAreaF')
      this.$store.commit('cleanCategoryF')
      this.$store.commit('cleanDateFrom1F')
      this.$store.commit('cleanDateTo1F')
      this.$store.dispatch('getCompaniesF')
      this.$store.dispatch('getWorkshopsF')
      this.$store.dispatch('getAreasF')
    },
    search() {
      this.$store.dispatch('getProducts', {
        company: this.$store.getters.FilterProps.selected.Company.ID,
        workshop: this.$store.getters.FilterProps.selected.Workshop.ID,
        area: this.$store.getters.FilterProps.selected.Area.ID,
        category: this.$store.getters.FilterProps.selected.Category,
        datefrom: this.$store.getters.FilterProps.selected.dateFrom1,
        dateto: this.$store.getters.FilterProps.selected.dateTo1
      })
    },
    onCompanySelect() {
      this.$store.dispatch('getCompaniesF')
    },
    selectCompany() {
      if (this.$store.getters.FilterProps.selected.Company.ID == 0) {
        this.$store.getters.FilterProps.companies.forEach((item) => {
          if (item.ID == this.$store.getters.FilterProps.selected.Workshop.Company) {
            this.$store.getters.FilterProps.selected.Company = item
          }
        })
      }
    },
    selectWorkshop() {
      if (this.$store.getters.FilterProps.selected.Workshop.ID == 0) {
        this.$store.getters.FilterProps.workshops.forEach((item) => {
          if (item.ID == this.$store.getters.FilterProps.selected.Area.Workshop) {
            this.$store.getters.FilterProps.selected.Workshop = item
          }
        })
      }
    },
    onWorkshopSelect() {
      this.selectCompany()
      this.$store.dispatch('getWorkshopsF')
    },
    onAreaSelect() {
      this.selectWorkshop()
      this.selectCompany()
    }
  },
  mounted() {
    this.$store.dispatch('getCompaniesF')
    this.$store.dispatch('getWorkshopsF')
    this.$store.dispatch('getAreasF')
  }
}
</script>
