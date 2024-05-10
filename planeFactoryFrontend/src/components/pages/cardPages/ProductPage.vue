<template>
  <CardPageHeader />
  <div class="mx-auto max-w-3xl px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
    <ProductInfo v-if="$store.getters.productP" />
    <PlaneInfo v-if="$store.getters.planeP" />
    <TransportPlaneInfo v-if="$store.getters.transportPlaneP" />
    <MilitaryPlaneInfo v-if="$store.getters.militaryPlaneP" />
    <CivilPlaneInfo v-if="$store.getters.civilPlaneP" />
    <HangGliderInfo v-if="$store.getters.hangGliderP" />
    <RocketInfo v-if="$store.getters.rocketP" />
    <MilitaryRocketInfo v-if="$store.getters.militaryRocketP" />
    <CivilRocketInfo v-if="$store.getters.civilRocketP" />
    <AntiHailRocketInfo v-if="$store.getters.antiHailP" />
    <HelicopterInfo v-if="$store.getters.helicopterP" />
    <GliderInfo v-if="$store.getters.gliderP" />
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
    CardPageHeader
  },

  async mounted() {
    this.$store.dispatch('getProduct', this.$route.params.id)
    this.$store.dispatch('getWorkshops')
  },
  unmounted() {
    this.$store.commit('cleanProps')
  },
  methods: {
    async saveData(){
      this.$store.dispatch('putProduct', this.$route.params.id)
    },
    async deleteData(){
      this.$store.dispatch('deleteProduct', this.$route.params.id)
      this.$router.go(-1)
    }
  }
}
</script>
