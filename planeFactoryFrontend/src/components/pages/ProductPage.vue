<template>
  <div class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
    <AntiHailRocketInfo :Reagent="items.antiHailRockets.Reagent" v-if="antiHail" />
    <CivilPlaneInfo :Capacity="items.civilPlanes.Capacity" v-if="civilPlane" />
    <CivilRocketInfo :Guidance="items.civilRockets.Guidance" v-if="civilRocket" />
    <GliderInfo :Capacity="items.gliders.Capacity" v-if="glider" />
    <HangGliderInfo :SailclothMaterial="items.hangGliders.SailclothMaterial" v-if="hangGlider" />
    <HelicopterInfo :Propellers="items.helicopters.Propellers" v-if="helicopter" />
    <MilitaryPlaneInfo :Type="items.militaryPlanes.Type" v-if="militaryPlane" />
    <MilitaryRocketInfo
      :Type="items.militaryRockets.Type"
      :Guidance="items.militaryRockets.Guidance"
      :WarheadWeight="items.militaryRockets.WarheadWeight"
      v-if="militaryRocket"
    />
    <PlaneInfo :Engines="items.planes.Engines" v-if="plane" />
    <ProductInfo
      :ID="this.items.products[0].ID"
      :Name="this.items.products[0].Name"
      :Workshop="this.items.products[0].Workshop"
      :ProductionDate="this.items.products[0].ProductionDate"
      :Description="this.items.products[0].Description"
      v-if="product"
    />
    <RocketInfo
      :Engines="items.rockets.Engines"
      :Propellant="items.rockets.Propellant"
      :Range="items.rockets.Range"
      :Weight="items.rockets.Weight"
      v-if="rocket"
    />
    <TransportPlaneInfo :Reagent="items.transportPlanes.Reagent" v-if="transportPlane" />
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
import axios from 'axios'

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
      console.warn('aboba1')
      let result = await axios.get('http://localhost:8082/products/' + this.$route.params.id)
      console.warn('http://localhost:8082/products/' + this.$route.params.id)
      this.items = result.data
      console.log(this.items.products[0].Description)
      if (this.items.antiHailRockets) {
        this.antiHail = true
      }
      if (this.items.civilPlanes) {
        this.civilPlane = true
      }
      if (this.items.civilRockets) {
        this.civilRocket = true
      }
      if (this.items.gliders) {
        this.glider = true
      }
      if (this.items.hangGliders) {
        this.hangGlider = true
      }
      if (this.items.helicopters) {
        this.helicopter = true
      }
      if (this.items.militaryPlanes) {
        this.militaryPlane = true
      }
      if (this.items.militaryRockets) {
        this.militaryRocket = true
      }
      if (this.items.planes) {
        this.plane = true
      }
      if (this.items.products) {
        this.product = true
      }
      if (this.items.rockets) {
        this.rocket = true
      }
      if (this.items.transportPlanes) {
        this.transportPlane = true
      }
    }
  },
  async mounted() {
    this.loadData()
  }
}

</script>
