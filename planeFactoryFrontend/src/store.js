import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state () {
        return {
          antiHailRockets: [{
            Reagent : String
          }],
          civilPlanes: [{
            Capacity: Number
          }],
          civilRockets: [{
            Guidance: String
          }],
          gliders: [{
            Capacity : Number
          }],
          hangGliders: [{
            SailclothMaterial : String
          }],
          helicopters: [{
            Propellers : Number
          }],
          militaryPlanes: [{
            Type : String
          }],
          militaryRockets: [{
            Type: String,
            Guidance: String,
            WarheadWeight: Number
          }],
          planes: [{
            Engines : Number
          }],
          products: [{
            ID: Number,
            Name: String,
            Workshop: Number,
            ProductionDate: String,
            Description: String
          }],
          rockets: [{
            Engines: Number,
            Propellant: String,
            Range: Number,
            Weight: Number
          }],
          transportPlanes: [{
            Reagent: String
          }],
          productProps: {
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
        }
      },
      mutations: {
          setAntiHailRockets (state, payload) {
            state.antiHailRockets = payload
          },
          setCivilPlanes (state, payload) {
            state.civilPlanes = payload
          },
          setCivilRockets (state, payload) {
            state.civilRockets = payload
          },
          setGliders (state, payload) {
            state.gliders = payload
          },
          setHangGliders (state, payload) {
            state.hangGliders = payload
          },
          setHelicopters (state, payload) {
            state.helicopters = payload
          },
          setMilitaryPlanes (state, payload) {
            state.militaryPlanes = payload
          },
          setMilitaryRockets (state, payload) {
            state.militaryRockets = payload
          },
          setPlanes (state, payload) {
            state.planes = payload
          },
          setProducts (state, payload) {
            state.products = payload
          },
          setRockets (state, payload) {
            state.rockets = payload
          },
          setTransportPlanes (state, payload) {
            state.transportPlanes = payload
          },
          setantiHailP (state, payload) {
            state.productProps.antiHail = payload
          },
          setcivilPlaneP (state, payload) {
            state.productProps.civilPlane = payload
          },
          setcivilRocketP (state, payload) {
            state.productProps.civilRocket = payload
          },
          setgliderP (state, payload) {
            state.productProps.glider = payload
          },
          sethangGliderP (state, payload) {
            state.productProps.hangGlider = payload
          },
          sethelicopterP (state, payload) {
            state.productProps.helicopter = payload
          },
          setmilitaryPlaneP (state, payload) {
            state.productProps.militaryPlane = payload
          },
          setmilitaryRocketP (state, payload) {
            state.productProps.militaryRocket = payload
          },
          setplaneP (state, payload) {
            state.productProps.plane = payload
          },
          setproductP (state, payload) {
            state.productProps.product = payload
          },
          setrocketP (state, payload) {
            state.productProps.rocket = payload
          },
          settransportPlaneP (state, payload) {
            state.productProps.transportPlane = payload
          },
      },
      getters: {
        antiHailRockets (state){
            return state.antiHailRockets
        },
        civilPlanes (state){
            return state.civilPlanes
        },
        civilRockets (state){
            return state.civilRockets
        },
        gliders (state){
            return state.gliders
        },
        hangGliders (state){
            return state.products
        },
        helicopters (state){
            return state.helicopters
        },
        militaryPlanes (state){
            return state.militaryPlanes
        },
        militaryRockets (state){
            return state.militaryRockets
        },
        planes (state){
            return state.planes
        },
        products (state){
            return state.products
        },
        rockets (state){
            return state.rockets
        },
        transportPlanes (state){
            return state.transportPlanes
        },
        antiHailP (state){
            return state.productProps.antiHail
        },
        civilPlaneP (state){
            return state.productProps.civilPlane
        },
        civilRocketP (state){
            return state.productProps.civilRocket
        },
        gliderP (state){
            return state.productProps.glider
        },
        hangGliderP (state){
            return state.productProps.hangGlider
        },
        helicopterP (state){
            return state.productProps.helicopter
        },
        militaryPlaneP (state){
            return state.productProps.militaryPlane
        },
        militaryRocketP (state){
            return state.productProps.militaryRocket
        },
        planeP (state){
            return state.productProps.plane
        },
        productP (state){
            return state.productProps.product
        },
        rocketP (state){
            return state.productProps.rocket
        },
        transportPlaneP (state){
            return state.productProps.transportPlane
        },
      },
      actions:{
          async getAntiHailRockets (context) {
            let result = await axios.get('http://localhost:8082/antiHailRockets/')
            context.commit('setAntiHailRockets', result.data.antiHailRockets)
          },
          async getCivilPlanes (context) {
            let result = await axios.get('http://localhost:8082/civil-planes/')
            context.commit('setCivilPlanes', result.data.civilPlanes)
          },
          async getCivilRockets (context) {
            let result = await axios.get('http://localhost:8082/civil-rockets/')
            context.commit('setCivilRockets', result.data.civilRockets)
          },
          async getGliders (context) {
            let result = await axios.get('http://localhost:8082/gliders/')
            context.commit('setGliders', result.data.gliders)
          },
          async getHangGliders (context) {
            let result = await axios.get('http://localhost:8082/hang-gliders/')
            context.commit('setHangGliders', result.data.hangGliders)
          },
          async getHelicopters (context) {
            let result = await axios.get('http://localhost:8082/helicopters/')
            context.commit('setHelicopters', result.data.helicopters)
          },
          async getMilitaryPlanes (context) {
            let result = await axios.get('http://localhost:8082/military-planes/')
            context.commit('setMilitaryPlanes', result.data.militaryPlanes)
          },
          async getMilitaryRockets (context) {
            let result = await axios.get('http://localhost:8082/military-rockets/')
            context.commit('setMilitaryRockets', result.data.militaryRockets)
          },
          async getPlanes (context) {
            let result = await axios.get('http://localhost:8082/planes/')
            context.commit('setPlanes', result.data.planes)
          },
          async getProducts (context) {
            let result = await axios.get('http://localhost:8082/products/')
            context.commit('setProducts', result.data.products)
          },
          async getProduct (context, payload) {
            let result = await axios.get('http://localhost:8082/products/' + payload)
            let items = result.data
            items = result.data
            if (items.antiHailRockets) {
                context.commit('setantiHailP', true)
                context.commit('setAntiHailRockets', items.antiHailRockets)
            }
            if (items.civilPlanes) {
                context.commit('setcivilPlaneP', true)
                context.commit('setCivilPlanes', items.civilPlanes)
            }
            if (items.civilRockets) {
                context.commit('setcivilRocketP', true)
                context.commit('setCivilRockets', items.civilRockets)
            }
            if (items.gliders) {
                context.commit('setgliderP', true)
                context.commit('setGliders', items.gliders)
            }
            if (items.hangGliders) {
                context.commit('sethangGliderP', true)
                context.commit('setHangGliders', items.hangGliders)
            }
            if (items.helicopters) {
                context.commit('sethelicopterP', true)
                context.commit('setHelicopters', items.helicopters)
            }
            if (items.militaryPlanes) {
                context.commit('setmilitaryPlaneP', true)
                context.commit('setMilitaryPlanes', items.militaryPlanes)
            }
            if (items.militaryRockets) {
                context.commit('setmilitaryRocketP', true)
                context.commit('setMilitaryRockets', items.militaryRockets)
            }
            if (items.planes) {
                context.commit('setplaneP', true)
                context.commit('setPlanes', items.planes)
            }
            if (items.products) {
                context.commit('setproductP', true)
                context.commit('setProducts', items.products)
            }
            if (items.rockets) {
                context.commit('setrocketP', true)
                context.commit('setRockets', items.rockets)
            }
            if (items.transportPlanes) {
                context.commit('settransportPlaneP', true)
                context.commit('setTransportPlanes', items.transportPlanes)
            }
          },
          async getRockets (context) {
            let result = await axios.get('http://localhost:8082/rockets/')
            context.commit('setRockets', result.data.rockets)
          },
          async getTransportPlanes (context) {
            let result = await axios.get('http://localhost:8082/transport-planes/')
            context.commit('setTransportPlanes', result.data.transportPlanes)
          },
      }
    })
    

  export default store;