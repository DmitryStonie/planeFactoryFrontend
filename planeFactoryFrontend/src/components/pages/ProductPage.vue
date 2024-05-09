<template>
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
  </div>
</template>

<script>
import AntiHailRocketInfo from './productInfo/AntiHailRocketInfo.vue'
import CivilPlaneInfo from './productInfo/CivilPlaneInfo.vue'
import CivilRocketInfo from './productInfo/CivilRocketInfo.vue'
import GliderInfo from './productInfo/GliderInfo.vue'
import HangGliderInfo from './productInfo/HangGliderInfo.vue'
import HelicopterInfo from './productInfo/HelicopterInfo.vue'
import MilitaryPlaneInfo from './productInfo/MilitaryPlaneInfo.vue'
import MilitaryRocketInfo from './productInfo/MilitaryRocketInfo.vue'
import PlaneInfo from './productInfo/PlaneInfo.vue'
import ProductInfo from './productInfo/ProductInfo.vue'
import RocketInfo from './productInfo/RocketInfo.vue'
import TransportPlaneInfo from './productInfo/TransportPlaneInfo.vue'

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
    TransportPlaneInfo
  },

  async mounted() {
    this.$store.dispatch('getProduct', this.$route.params.id)
  },
  unmounted() {
    this.$store.commit('cleanProps')
  }
}
</script>
