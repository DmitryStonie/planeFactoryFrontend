<template>
  <CardPageHeader />
  <div class="mx-auto max-w-3xl px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl mb-6">
    <div class="relative z-0 w-full mb-4">
      <input
        type="text"
        v-model="$store.getters.labs[0].Name"
        name="name"
        rows="2"
        placeholder=" "
        required
        class="text-2xl pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      />
      <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Name</label>
    </div>
    <p class="text-xl mb-6">Id: {{ $store.getters.labs[0].ID }}</p>
    <div class="relative z-0 w-full mb-5">
      <select
        name="select"
        v-model="$store.getters.labs[0].Company"
        onclick="this.setAttribute('value', this.value);"
        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      >
        <option>{{ $store.getters.company[0].Name }}</option>
        <option v-for="option in $store.getters.companies" :value="option.ID" :key="option.ID">
          {{ option.Name }}
        </option>
      </select>
      <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
        >Company</label
      >
    </div>
  </div>

  
  <div class="flex">
    <div class="basis-1/4">
      <TestedProductsFilter />
    </div>
    <div class="basis-1/2 bg-white border-0 shadow-lg sm:rounded-3xl mb-6">
      <div class="flex flex-wrap items-center justify-between gap-5 w-full mt-8 mb-4 ">
        <h1 class="text-2xl font-bold mb-4 ml-4">Tested products</h1>
        <div class="flex max-lg:ml-auto space-x-3">
          <router-link
            class="px-4 mr-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
            to="/products/new"
          >
            Add new
          </router-link>
        </div>
      </div>
      <div class="h-64 overflow-auto">
        <ProductsTable />
      </div>
    </div>
    <div class="basis-1/4"></div>
  </div>

  <div class="flex">
    <div class="basis-1/4">
      <TestersFilter />
    </div>
    <div class="basis-1/2 bg-white border-0 shadow-lg sm:rounded-3xl mb-6">
      <div class="flex flex-wrap items-center justify-between gap-5 w-full mt-8 mb-4">
        <h1 class="text-2xl font-bold mb-4 ml-4">Lab testers</h1>
        <div class="flex max-lg:ml-auto space-x-3">
          <router-link
            class="px-4 mr-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
            to="/employees/new"
          >
            Add new
          </router-link>
        </div>
      </div>
      <div class="h-64 overflow-auto">
        <EmployeesTable />
      </div>
    </div>
    <div class="basis-1/4"></div>
  </div>

  <div class="flex">
    <div class="basis-1/4">
      <EquipmentFilter/>
    </div>
    <div class="basis-1/2 bg-white border-0 shadow-lg sm:rounded-3xl mb-6">
      <div class="flex flex-wrap items-center justify-between gap-5 w-full mt-8 mb-4">
      <h1 class="text-2xl font-bold mb-4 ml-4">Lab equipment</h1>
      <div class="flex max-lg:ml-auto space-x-3">
        <router-link
          class="px-4 mr-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
          to="/equipments/new"
        >
          Add new
        </router-link>
      </div>
    </div>
    <div class="h-64 overflow-auto">
      <EquipmentsTable />
    </div>
    </div>
    <div class="basis-1/4"></div>
  </div>


</template>

<script>
import CardPageHeader from '../../components/CardPageHeader.vue'
import EmployeesTable from '../tables/EmployeesTable.vue'
import EquipmentsTable from '../tables/EquipmentsTable.vue'
import ProductsTable from '../tables/ProductsTable.vue'
import EquipmentFilter from '../../components/filters/EquipmentFilter.vue'
import TestedProductsFilter from '../../components/filters/TestedProductsFilter.vue'
import TestersFilter from '../../components/filters/TestersFilter.vue'

export default {
  components: {
    CardPageHeader,
    EmployeesTable,
    EquipmentsTable,
    ProductsTable,
    EquipmentFilter,
    TestedProductsFilter,
    TestersFilter
  },
  mounted() {
    this.$store.commit('cleanLabs')
    this.$store.commit('cleanEmployees')
    this.$store.commit('cleanLabEquipment')
    this.$store.commit('cleanProducts')
    this.$store.commit('cleanCompanies')
    this.$store.commit('cleanCompany')
    this.$store.dispatch('getLab', {id: this.$route.params.id})
  }
}
</script>
