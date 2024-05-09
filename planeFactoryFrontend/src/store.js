import { createStore } from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate"

const store = createStore({
    state () {
        return {
          antiHailRockets: [{
            ID: Number,
            Reagent : String
          }],
          civilPlanes: [{
            ID: Number,
            Capacity: Number
          }],
          civilRockets: [{
            ID: Number,
            Guidance: String
          }],
          gliders: [{
            ID: Number,
            Capacity : Number
          }],
          hangGliders: [{
            ID: Number,
            SailclothMaterial : String
          }],
          helicopters: [{
            ID: Number,
            Propellers : Number
          }],
          militaryPlanes: [{
            ID: Number,
            Type : String
          }],
          militaryRockets: [{
            ID: Number,
            Type: String,
            Guidance: String,
            WarheadWeight: Number
          }],
          planes: [{
            ID: Number,
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
            ID: Number,
            Engines: Number,
            Propellant: String,
            Range: Number,
            Weight: Number
          }],
          transportPlanes: [{
            ID: Number,
            CarryingWeight: String
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
          },
          areas :  [{
            ID : Number,
            Workshop  : Number,
            Boss        : Number,
            Name : String
          }],
          assemblers :  [{
            ID : Number,
            StartOfWork : String,
            EndOfWork   : String
          }],
          brigades :  [{
            ID : Number,
            WorkshopArea   : Number,
            Foreman              : Number,
            Name          : String
          }],
          companies :  [{
            ID : Number,
            Name : String
          }],
          conductedTesting   :  [{
            Test : Number,
            Tester : String
          }],
          employees :  [{
            ID : Number,
            Name : String,
            Birthdate        : String,
            WorkExperience   : String,
            Salary           : Number
          }],
          engineeringStaff :  [{
            ID : Number,
          }],
          engineers :  [{
            ID : Number,
            StartOfWork  : String,
            EndOfWork    : String,
          }],
          jobs :  [{
            ID : Number,
            Product  : String,
            Brigade  : String,
            Status   : String,
            Order    : Number
          }],
          labEquipment :  [{
            ID : Number,
            Lab : Number,
            Name : String
          }],
          labs :  [{
            ID : Number,
            Company : Number,
            Name : String
          }],
          locksmiths :  [{
            ID : Number,
            Category : Number,
            StartOfWork : String,
            EndOfWork : String,
          }],
          otherProducts :  [{
            ID : Number,
          }],
          technicians :  [{
            ID : Number,
            StartOfWork : String,
            EndOfWork : String,
          }],
          technologists :  [{
            ID : Number,
            StartOfWork : String,
            EndOfWork : String,
          }],
          testers :  [{
            ID : Number,
            Lab : Number
          }],
          tests :  [{
            ID : Number,
            Product : Number,
            Lab : Number,
            TimeStart : String,
            TimeEnd : String,
            Name : String,
            Description : String
          }],
          turners :  [{
            ID : Number,
            Category : Number,
            StartOfWork : String,
            EndOfWork : String,
          }],
          usedInTest :  [{
            Equipment : Number,
            Test : Number
          }],
          usesOfServices :  [{
            TestingLaboratory : Number,
            Workshop          : Number
          }],
          welders :  [{
            ID : Number,
            Category : Number,
            StartOfWork : String,
            EndOfWork : String,
          }],
          workers  :  [{
            ID : Number,
            Brigade : Number,
            Name : String
          }],
          worksAsMaster  :  [{
            EngineeringStaff: Number,
            WorkshopArea: Number
          }],
          workshops  :  [{
            ID : Number,
            Company : Number,
            Boss : Number,
            Name : String
          }],
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
          setPlane (state, payload) {
            state.planes[0].Engines = payload
          },
          cleanProps(state) {
            state.productProps = {
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
          setAreas (state, payload) {
            state.areas = payload
          },
          setAssemblers (state, payload) {
            state.assemblers = payload
          },
          setBrigades (state, payload) {
            state.brigades = payload
          },
          setCompanies (state, payload) {
            state.companies = payload
          },
          setConductedTesting (state, payload) {
            state.conductedTesting = payload
          },
          setEmployees (state, payload) {
            state.employees = payload
          },
          setEngineeringStaff (state, payload) {
            state.engineeringStaff = payload
          },
          setEngineers (state, payload) {
            state.engineers = payload
          },
          setJobs (state, payload) {
            state.jobs = payload
          },
          setLabEquipment (state, payload) {
            state.labEquipment = payload
          },
          setLabs (state, payload) {
            state.labs = payload
          },
          setLocksmiths (state, payload) {
            state.locksmiths = payload
          },
          setOtherProducts (state, payload) {
            state.otherProducts = payload
          },
          setTechnicians (state, payload) {
            state.technicians = payload
          },
          setTechnologists (state, payload) {
            state.technologists = payload
          },
          setTesters (state, payload) {
            state.testers = payload
          },
          setTests (state, payload) {
            state.tests = payload
          },
          setTurners (state, payload) {
            state.turners = payload
          },
          setUsedInTest (state, payload) {
            state.usedInTest = payload
          },
          setUsesOfServices (state, payload) {
            state.usesOfServices = payload
          },
          setWelders (state, payload) {
            state.welders = payload
          },
          setWorkers (state, payload) {
            state.workers = payload
          },
          setWorksAsMaster (state, payload) {
            state.worksAsMaster = payload
          },
          setWorkshops (state, payload) {
            state.workshops = payload
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
        areas (state){
          return state.Areas
        },
        assemblers(state){
          return state.Assemblers
        },
        brigades(state){
          return state.Brigades
        },
        companies(state){
          return state.Companies
        },
        conductedTesting(state){
          return state.ConductedTesting
        },
        employees(state){
          return state.Employees
        },
        engineeringStaff(state){
          return state.EngineeringStaff
        },
        engineers(state){
          return state.Engineers
        },
        jobs(state){
          return state.Jobs
        },
        labEquipment(state){
          return state.LabEquipment
        },
        labs(state){
          return state.Labs
        },
        locksmiths(state){
          return state.Locksmiths
        },
        otherProducts(state){
          return state.OtherProducts
        },
        technicians(state){
          return state.Technicians
        },
        technologists(state){
          return state.Technologists
        },
        testers(state){
          return state.Testers
        },
        tests(state){
          return state.Tests
        },
        turners(state){
          return state.Turners
        },
        usedInTest(state){
          return state.UsedInTest
        },
        usesOfServices(state){
          return state.UsesOfServices
        },
        welders(state){
          return state.Welders
        },
        workers(state){
          return state.Workers
        },
        worksAsMaster(state){
          return state.WorksAsMaster
        },
        workshops(state){
          return state.Workshops
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
          async putProduct (state, payload) {
            if (state.getters.antiHailP) {
                await axios.put('http://localhost:8082/antiHailRockets/' + payload, state.getters.antiHailRockets[0])
            }
            if (state.getters.civilPlaneP) {
                await axios.put('http://localhost:8082/civil-planes/' + payload, state.getters.civilPlanes[0])
            }
            if (state.getters.civilRocketP) {
                await axios.put('http://localhost:8082/civil-rockets/' + payload, state.getters.civilRockets[0])
            }
            if (state.getters.gliderP) {
                await axios.put('http://localhost:8082/gliders/' + payload, state.getters.gliders[0])
            }
            if (state.getters.hangGliderP) {
                await axios.put('http://localhost:8082/hang-gliders/' + payload,state.getters.hangGliders[0])
            }
            if (state.getters.helicopterP) {
                await axios.put('http://localhost:8082/helicopters/' + payload, state.getters.helicopters[0])
            }
            if (state.getters.militaryPlaneP) {
                await axios.put('http://localhost:8082/military-planes/' + payload, state.getters.militaryPlanes[0])
            }
            if (state.getters.militaryRocketP) {
                await axios.put('http://localhost:8082/military-rockets/' + payload, state.getters.militaryRockets[0])
            }
            if (state.getters.planeP) {
                await axios.put('http://localhost:8082/planes/' + payload, state.getters.planes[0])
            }
            if (state.getters.productP) {
                await axios.put('http://localhost:8082/products/' + payload, state.getters.products[0])
            }
            if (state.getters.rocketP) {
                await axios.put('http://localhost:8082/rockets/' + payload, state.getters.rockets[0])
            }
            if (state.getters.transportPlaneP) {
                await axios.put('http://localhost:8082/transport-planes/' + payload, state.getters.transportPlanes[0])
            }
          },
          async getRockets (context) {
            let result = await axios.get('http://localhost:8082/rockets')
            context.commit('setRockets', result.data.rockets)
          },
          async getTransportPlanes (context) {
            let result = await axios.get('http://localhost:8082/transport-planes')
            context.commit('setTransportPlanes', result.data.transportPlanes)
          },
          async getAreas (context) {
            let result = await axios.get('http://localhost:8082/areas')
            context.commit('setAreas', result.data.areas)
          },
          async getAssemblers (context) {
            let result = await axios.get('http://localhost:8082/assemblers')
            context.commit('setAssemblers', result.data.assemblers)
          },
          async getBrigades (context) {
            let result = await axios.get('http://localhost:8082/brigades')
            context.commit('setBrigades', result.data.brigades)
          },
          async getCompanies (context) {
            let result = await axios.get('http://localhost:8082/companies')
            context.commit('setCompanies', result.data.companies)
          },
          async getConductedTesting (context) {
            let result = await axios.get('http://localhost:8082/conducted-testing')
            context.commit('setConductedTesting', result.data.conductedTesting)
          },
          async getEmployees (context) {
            let result = await axios.get('http://localhost:8082/employees')
            context.commit('setEmployees', result.data.employees)
          },
          async getEngineeringStaff (context) {
            let result = await axios.get('http://localhost:8082/engineering-staff')
            context.commit('setEngineeringStaff', result.data.engineeringStaff)
          },
          async getEngineers (context) {
            let result = await axios.get('http://localhost:8082/engineers')
            context.commit('setEngineers', result.data.engineers)
          },
          async getJobs (context) {
            let result = await axios.get('http://localhost:8082/jobs')
            context.commit('setJobs', result.data.jobs)
          },
          async getLabEquipment (context) {
            let result = await axios.get('http://localhost:8082/lab-equipment')
            context.commit('setLabEquipment', result.data.labEquipment)
          },
          async getLabs (context) {
            let result = await axios.get('http://localhost:8082/labs')
            context.commit('setLabs', result.data.labs)
          },
          async getLocksmiths (context) {
            let result = await axios.get('http://localhost:8082/locksmiths')
            context.commit('setLocksmiths', result.data.locksmiths)
          },
          async getOtherProducts (context) {
            let result = await axios.get('http://localhost:8082/other-products')
            context.commit('setOtherProducts', result.data.otherProducts)
          },
          async getTechnicians (context) {
            let result = await axios.get('http://localhost:8082/technicians')
            context.commit('setTechnicians', result.data.technicians)
          },
          async getTechnologists (context) {
            let result = await axios.get('http://localhost:8082/technologists')
            context.commit('setTechnologists', result.data.technologists)
          },
          async getTesters (context) {
            let result = await axios.get('http://localhost:8082/tests')
            context.commit('setTesters', result.data.testers)
          },
          async getTests (context) {
            let result = await axios.get('http://localhost:8082/testers')
            context.commit('setTests', result.data.tests)
          },
          async getTurners (context) {
            let result = await axios.get('http://localhost:8082/turners')
            context.commit('setTurners', result.data.turners)
          },
          async getUsedInTest (context) {
            let result = await axios.get('http://localhost:8082/used-in-test')
            context.commit('setUsedInTest', result.data.usedInTest)
          },
          async getUsesOfServices (context) {
            let result = await axios.get('http://localhost:8082/uses-of-services')
            context.commit('setUsesOfServices', result.data.usesOfServices)
          },
          async getWelders (context) {
            let result = await axios.get('http://localhost:8082/welders')
            context.commit('setWelders', result.data.welders)
          },
          async getWorkers (context) {
            let result = await axios.get('http://localhost:8082/workers')
            context.commit('setWorkers', result.data.workers)
          },
          async getWorksAsMaster (context) {
            let result = await axios.get('http://localhost:8082/works-as-master')
            context.commit('setWorksAsMaster', result.data.worksAsMaster)
          },
          async getWorkshops (context) {
            let result = await axios.get('http://localhost:8082/workshops')
            context.commit('setWorkshops', result.data.workshops)
          },
      },
      plugins: [createPersistedState()]
    })
    

  export default store;