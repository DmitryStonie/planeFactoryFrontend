<template>
    <CardPageHeader />
  <div class="mx-auto max-w-3xl px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
    <ProductNew v-if="$store.getters.Props.products" />
    <SelectCategory />
    <PlaneInfo v-if="$store.getters.Props.plane" />
    <TransportPlaneInfo v-if="$store.getters.Props.transportPlane" />
    <MilitaryPlaneInfo v-if="$store.getters.Props.militaryPlane" />
    <CivilPlaneInfo v-if="$store.getters.Props.civilPlane" />
    <HangGliderInfo v-if="$store.getters.Props.hangGlider" />
    <RocketInfo v-if="$store.getters.Props.rocket" />
    <MilitaryRocketInfo v-if="$store.getters.Props.militaryRocket" />
    <CivilRocketInfo v-if="$store.getters.Props.civilRocket" />
    <AntiHailRocketInfo v-if="$store.getters.Props.antiHail" />
    <HelicopterInfo v-if="$store.getters.Props.helicopter" />
    <GliderInfo v-if="$store.getters.Props.glider" />
    <div class="flex">
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
import AntiHailRocketInfo from '../productInfo/AntiHailRocketInfo.vue'
import CivilPlaneInfo from '../productInfo/CivilPlaneInfo.vue'
import CivilRocketInfo from '../productInfo/CivilRocketInfo.vue'
import GliderInfo from '../productInfo/GliderInfo.vue'
import HangGliderInfo from '../productInfo/HangGliderInfo.vue'
import HelicopterInfo from '../productInfo/HelicopterInfo.vue'
import MilitaryPlaneInfo from '../productInfo/MilitaryPlaneInfo.vue'
import MilitaryRocketInfo from '../productInfo/MilitaryRocketInfo.vue'
import PlaneInfo from '../productInfo/PlaneInfo.vue'
import ProductNew from '../newEntityComponents/ProductNew.vue'
import RocketInfo from '../productInfo/RocketInfo.vue'
import TransportPlaneInfo from '../productInfo/TransportPlaneInfo.vue'
import SelectCategory from '../newEntityComponents/SelectCategory.vue'
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
    ProductNew,
    RocketInfo,
    TransportPlaneInfo,
    SelectCategory,
    CardPageHeader
  },

  async mounted() {
    this.$store.commit('cleanProps')
    this.$store.commit('cleanProducts')
    this.$store.commit('setproductP', true)
    console.warn(this.$store.getters.Props.product)
  },
  unmounted() {
    this.$store.commit('cleanProps')
  },
  methods: {
    async saveData(){
      this.$store.commit('setproductP', true)
      if(!this.$store.getters.antiHailP){
        this.$store.commit('cleanantiHailRockets')
      }
      if(!this.$store.getters.civilPlaneP){
        this.$store.commit('cleancivilPlanes')
      }
      if(!this.$store.getters.civilRocketP){
        this.$store.commit('cleancivilRockets')
      }
      if(!this.$store.getters.gliderP){
        this.$store.commit('cleangliders')
      }
      if(!this.$store.getters.hangGliderP){
        this.$store.commit('cleanhangGliders')
      }
      if(!this.$store.getters.helicopterP){
        this.$store.commit('cleanhelicopters')
      }
      if(!this.$store.getters.militaryPlaneP){
        this.$store.commit('cleanmilitaryPlanes')
      }
      if(!this.$store.getters.militaryRocketP){
        this.$store.commit('cleanmilitaryRockets')
      }
      if(!this.$store.getters.planeP){
        this.$store.commit('cleanplanes')
      }
      if(!this.$store.getters.productP){
        this.$store.commit('cleanproducts')
      }
      if(!this.$store.getters.rocketP){
        this.$store.commit('cleanrockets')
      }
      if(!this.$store.getters.transportPlaneP){
        this.$store.commit('cleantransportPlanes')
      }
      this.$store.dispatch('postProduct')
      this.$router.push('/products/' + this.$store.getters.products[0].ID)
    }
  }
}
</script>