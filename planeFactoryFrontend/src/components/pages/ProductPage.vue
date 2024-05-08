<template>
  <div id="app">
    <AntiHailRocketInfo v-if="antiHail" />
    <CivilPlaneInfo v-if="civilPlane" />
    <CivilRocketInfo v-if="civilRocket" />
    <GliderInfo v-if="glider" />
    <HangGliderInfo v-if="hangGlider" />
    <HelicopterInfo v-if="helicopter" />
    <MilitaryPlaneInfo v-if="militaryPlane" />
    <MilitaryRocketInfo v-if="militaryRocket" />
    <PlaneInfo v-if="plane" />
    <ProductInfo v-if="product" />
    <RocketInfo v-if="rocket" />
    <TransportPlaneInfo v-if="transportPlane" />
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
  data() {
    return {
      items: [],
      antiHail: false,
      civilPlane: false,
      civilRocket: false,
      glider: false,
      hangGlider: false,
      helicopter: false,
      militaryPlane: false,
      militaryRocket: false,
      plane: false,
      product: false,
      rocket: false,
      transportPlane: false
    }
  },
  methods: {
    async loadData() {
      let user = localStorage.getItem('user-info')
      this.name = JSON.parse(user).name
      let result = await axios.get('http://localhost:8082/products/' + this.$route.params.id)
      this.items = result.data
      if (this.items.AntiHailRockets) {
        this.antiHail = true
      } else if (this.items.CivilPlanes) {
        this.civilPlane = true
      } else if (this.items.CivilRockets) {
        this.civilRocket = true
      } else if (this.items.Gliders) {
        this.glider = true
      } else if (this.items.HangGliders) {
        this.hangGlider = true
      } else if (this.items.Helicopters) {
        this.helicopter = true
      } else if (this.items.MilitaryPlanes) {
        this.militaryPlane = true
      } else if (this.items.MilitaryRockets) {
        this.militaryRocket = true
      } else if (this.items.Planes) {
        this.plane = true
      } else if (this.items.Products) {
        this.product = true
      } else if (this.items.Rockets) {
        this.rocket = true
      } else if (this.items.TransportPlanes) {
        this.transportPlane = true
      }
    }
  },
  async mounted() {
    this.loadData()
  }
}
</script>
