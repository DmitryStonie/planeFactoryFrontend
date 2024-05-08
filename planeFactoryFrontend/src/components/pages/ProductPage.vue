<template>
  <div id="app">
    <AntiHailRocketInfo :Reagent=items.AntiHailRockets[0].Reagent v-if="antiHail" />
    <CivilPlaneInfo :Capacity=items.CivilPlanes[0].Capacity v-if="civilPlane" />
    <CivilRocketInfo :Guidance=items.CivilRockets[0].Guidance v-if="civilRocket" />
    <GliderInfo :Capacity=items.Gliders[0].Capacity v-if="glider" />
    <HangGliderInfo :SailclothMaterial=items.HangGliders[0].SailclothMaterial v-if="hangGlider" />
    <HelicopterInfo :Propellers=items.Helicopters[0].Propellers v-if="helicopter" />
    <MilitaryPlaneInfo :Type=items.MilitaryPlanes[0].Type v-if="militaryPlane" />
    <MilitaryRocketInfo :Type=items.MilitaryRockets[0].Type :Guidance=items.MilitaryRockets[0].Guidance :WarheadWeight=items.MilitaryRockets[0].WarheadWeight v-if="militaryRocket" />
    <PlaneInfo :Engines=items.Planes[0].Engines v-if="plane" />
    <ProductInfo :ID=items.Products[0].ID :Name=items.Products[0].Name :Workshop=items.Products[0].Workshop :ProductionDate=items.Products[0].ProductionDate :Description=items.Products[0].Description v-if="product" />
    <RocketInfo :Engines=items.Rockets[0].Engines  :Propellant=items.Rockets[0].Propellant :Range=items.Rockets[0].Range :Weight=items.Rockets[0].Weight v-if="rocket" />
    <TransportPlaneInfo :Reagent=items.TransportPlanes[0].Reagent v-if="transportPlane" />
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
