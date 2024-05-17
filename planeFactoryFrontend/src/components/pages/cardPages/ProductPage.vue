<template>
  <CardPageHeader />
  <div class="mx-auto max-w-3xl px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
    <ProductInfo v-if="$store.getters.Props.products" />
    <PlaneInfo v-if="$store.getters.Props.planes" />
    <TransportPlaneInfo v-if="$store.getters.Props.transportPlanes" />
    <MilitaryPlaneInfo v-if="$store.getters.Props.militaryPlanes" />
    <CivilPlaneInfo v-if="$store.getters.Props.civilPlanes" />
    <HangGliderInfo v-if="$store.getters.Props.hangGliders" />
    <RocketInfo v-if="$store.getters.Props.rockets" />
    <MilitaryRocketInfo v-if="$store.getters.Props.militaryRockets" />
    <CivilRocketInfo v-if="$store.getters.Props.civilRockets" />
    <AntiHailRocketInfo v-if="$store.getters.Props.antiHailRockets" />
    <HelicopterInfo v-if="$store.getters.Props.helicopters" />
    <GliderInfo v-if="$store.getters.Props.gliders" />


    <div class="flex flex-wrap items-center justify-between gap-5 w-full mt-8  mb-4">
      <h1 class="text-2xl font-bold mb-4 ml-4">Jobs</h1>
      <div class="flex max-lg:ml-auto space-x-3">
        <router-link
          class="px-4 mr-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
          to="/jobs/new"
        >
          Add new
        </router-link>
      </div>
    </div>
    <div class="h-32 overflow-auto">
      <JobsTable />
    </div>
    <div class="flex flex-wrap items-center justify-between gap-5 w-full mt-8  mb-4">
      <h1 class="text-2xl font-bold mb-4 ml-4">Brigades involved</h1>
      <div class="flex max-lg:ml-auto space-x-3">
        <router-link
          class="px-4 mr-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
          to="/brigades/new"
        >
          Add new
        </router-link>
      </div>
    </div>
    <div class="h-32 overflow-auto">
      <BrigadesTable />
    </div>
    <div class="flex flex-wrap items-center justify-between gap-5 w-full mt-8  mb-4">
      <h1 class="text-2xl font-bold mb-4 ml-4">Tested by Labs</h1>
      <div class="flex max-lg:ml-auto space-x-3">
        <router-link
          class="px-4 mr-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
          to="/labs/new"
        >
          Add new
        </router-link>
      </div>
    </div>
    <div class="h-32 overflow-auto">
      <LabsTable />
    </div>




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
import AntiHailRocketInfo from '../productInfo/AntiHailRocketInfo.vue'
import CivilPlaneInfo from '../productInfo/CivilPlaneInfo.vue'
import CivilRocketInfo from '../productInfo/CivilRocketInfo.vue'
import GliderInfo from '../productInfo/GliderInfo.vue'
import HangGliderInfo from '../productInfo/HangGliderInfo.vue'
import HelicopterInfo from '../productInfo/HelicopterInfo.vue'
import MilitaryPlaneInfo from '../productInfo/MilitaryPlaneInfo.vue'
import MilitaryRocketInfo from '../productInfo/MilitaryRocketInfo.vue'
import PlaneInfo from '../productInfo/PlaneInfo.vue'
import ProductInfo from '../productInfo/ProductInfo.vue'
import RocketInfo from '../productInfo/RocketInfo.vue'
import TransportPlaneInfo from '../productInfo/TransportPlaneInfo.vue'
import CardPageHeader from '../../components/CardPageHeader.vue'
import JobsTable from '../tables/JobsTable.vue'
import BrigadesTable from '../tables/BrigadesTable.vue'
import LabsTable from '../tables/LabsTable.vue'

export default {
  components: {
    AntiHailRocketInfo,
    CivilPlaneInfo,
    CivilRocketInfo,
    GliderInfo,
    HangGliderInfo,
    HelicopterInfo,
    MilitaryPlaneInfo,
    MilitaryRocketInfo,
    PlaneInfo,
    ProductInfo,
    RocketInfo,
    TransportPlaneInfo,
    CardPageHeader,
    JobsTable,
    BrigadesTable,
    LabsTable
  },

  methods: {
    async saveData(){
      this.$store.dispatch('putProduct', this.$route.params.id)
    },
    async deleteData(){
      this.$store.dispatch('deleteProduct', this.$route.params.id)
      this.$router.go(-1)
    }
  },
  async mounted() {
    this.$store.commit('cleanProducts')
    this.$store.commit('cleanWorkshops')
    this.$store.commit('cleanLabs')
    this.$store.commit('cleanBrigades')
    this.$store.commit('cleanJobs')
    let result = await this.$store.dispatch('getProduct', this.$route.params.id)
    this.$store.commit('setProductProps', result.data)
    this.$store.dispatch('getWorkshops')
  },
  unmounted() {
    this.$store.commit('cleanProps')
  },
}
</script>
