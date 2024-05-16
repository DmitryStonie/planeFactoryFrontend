import { createStore } from 'vuex'
import axios from 'axios'
// import createPersistedState from "vuex-persistedstate"
import moment from 'moment'

const store = createStore({
  state() {
    return {
      //products
      antiHailRockets: [{
        ID: Number,
        Reagent: String
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
        Capacity: Number
      }],
      hangGliders: [{
        ID: Number,
        SailclothMaterial: String
      }],
      helicopters: [{
        ID: Number,
        Propellers: Number
      }],
      militaryPlanes: [{
        ID: Number,
        Type: String
      }],
      militaryRockets: [{
        ID: Number,
        Type: String,
        Guidance: String,
        WarheadWeight: Number
      }],
      planes: [{
        ID: Number,
        Engines: Number
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
      products: [{
        ID: Number,
        Name: String,
        Workshop: Number,
        ProductionDate: String,
        Description: String
      }],
      //other 23 entities
      areas: [{
        ID: Number,
        Workshop: Number,
        Boss: Number,
        Name: String
      }],
      assemblers: [{
        ID: Number,
        StartOfWork: String,
        EndOfWork: String
      }],
      brigades: [{
        ID: Number,
        WorkshopArea: Number,
        Foreman: Number,
        Name: String
      }],
      companies: [{
        ID: Number,
        Name: String
      }],
      conductedTesting: [{
        Test: Number,
        Tester: String
      }],
      employees: [{
        ID: Number,
        Name: String,
        Birthdate: String,
        WorkExperience: String,
        Salary: Number
      }],
      engineeringStaff: [{
        ID: Number,
      }],
      engineers: [{
        ID: Number,
        StartOfWork: String,
        EndOfWork: String,
      }],
      jobs: [{
        ID: Number,
        Product: String,
        Brigade: String,
        Status: String,
        Order: Number
      }],
      labEquipment: [{
        ID: Number,
        Lab: Number,
        Name: String
      }],
      labs: [{
        ID: Number,
        Company: Number,
        Name: String
      }],
      locksmiths: [{
        ID: Number,
        Category: Number,
        StartOfWork: String,
        EndOfWork: String,
      }],
      technicians: [{
        ID: Number,
        StartOfWork: String,
        EndOfWork: String,
      }],
      technologists: [{
        ID: Number,
        StartOfWork: String,
        EndOfWork: String,
      }],
      testers: [{
        ID: Number,
        Lab: Number
      }],
      tests: [{
        ID: Number,
        Product: Number,
        Lab: Number,
        TimeStart: String,
        TimeEnd: String,
        Name: String,
        Description: String
      }],
      turners: [{
        ID: Number,
        Category: Number,
        StartOfWork: String,
        EndOfWork: String,
      }],
      usedInTest: [{
        Equipment: Number,
        Test: Number
      }],
      usesOfServices: [{
        TestingLaboratory: Number,
        Workshop: Number
      }],
      welders: [{
        ID: Number,
        Category: Number,
        StartOfWork: String,
        EndOfWork: String,
      }],
      workers: [{
        ID: Number,
        Brigade: Number,
        Name: String
      }],
      worksAsMaster: [{
        EngineeringStaff: Number,
        WorkshopArea: Number
      }],
      workshops: [{
        ID: Number,
        Company: Number,
        Boss: Number,
        Name: String
      }],
      //extra entities
      bosses: [{
        ID: Number,
        Name: String,
        Birthdate: String,
        WorkExperience: String,
        Salary: Number
      }],
      foremen: [{
        ID: Number,
        Name: String,
        Birthdate: String,
        WorkExperience: String,
        Salary: Number
      }],
      workshop: [{
        ID: Number,
        Company: Number,
        Boss: Number,
        Name: String
      }],
      company: [{
        ID: Number,
        Name: String
      }],
      //UI elements state
      //Add new button
      addProperties: [{
        addP: Boolean,
        addLink: String,
        addText: String
      }],
      //
      Props: {
        //products
        antiHailRockets: false,
        civilPlanes: false,
        civilRockets: false,
        gliders: false,
        hangGliders: false,
        helicopters: false,
        militaryPlanes: false,
        militaryRockets: false,
        planes: false,
        rockets: false,
        transportPlanes: false,
        products: false,
        //other 23
        areas: false,
        assemblers: false,
        brigades: false,
        companies: false,
        conductedTesting: false,
        employees: false,
        engineeringStaff: false,
        engineers: false,
        jobs: false,
        labEquipment: false,
        labs: false,
        locksmiths: false,
        technicians: false,
        technologists: false,
        testers: false,
        tests: false,
        turners: false,
        usedInTest: false,
        usesOfServices: false,
        welders: false,
        workers: false,
        worksAsMaster: false,
        workshops: false,
        //extra entities
        bosses: false,
        foremen: false,
        workshop: false,
        company: false,
      },
      FilterProps:{
        workshops: [{
          ID: Number,
          Company: Number,
          Boss: Number,
          Name: String
        }],
        companies: [{
          ID: Number,
          Name: String
        }],
        areas: [{
          ID: Number,
          Workshop: Number,
          Boss: Number,
          Name: String
        }],
        brigades: [{
          ID: Number,
          WorkshopArea: Number,
          Foreman: Number,
          Name: String
        }],
        categories1: [
          {value: "all"},
          {value: "plane"},
          {value: "hang glider"},
          {value: "rocket"},
          {value: "helicopter"},
          {value: "glider"},
          {value: "transport plane"},
          {value: "military plane"},
          {value: "civil plane"},
          {value: "military rocket"},
          {value: "civil rocket"},
          {value: "anti-hail rocket"},
        ],
        categories2 :[
          {value: "all"},
          {value: "worker"},
          {value: "engineering staff"},
          {value: "tester"},
          {value: "engineer"},
          {value: "technologist"},
          {value: "technician"},
          {value: "assembler"},
          {value: "turner"},
          {value: "locksmith"},
          {value: "welder"},
        ],
        selected: {
          Company: {
            ID: 0,
            Name: ""
          },
          Workshop: {
            ID: 0,
            Company: 0,
            Boss: 0,
            Name: ""
          },
          Area: {
            ID: 0,
            Workshop: 0,
            Boss: 0,
            Name: ""
          },
          Category: "",
          Brigade: {
            ID: 0,
            WorkshopArea: 0,
            Foreman: 0,
            Name: ""
          },
          category1: "",
          dateFrom1: "",
          dateTo1: "",
          category2: "",
          dateFrom2: "",
          dateTo2: "",
          category3: "",
          dateFrom3: "",
          dateTo3: "",
        },
      }
    }
  },
  mutations: {
    //products
    setAntiHailRockets(state, payload) {
      state.antiHailRockets = payload
    },
    setCivilPlanes(state, payload) {
      state.civilPlanes = payload
    },
    setCivilRockets(state, payload) {
      state.civilRockets = payload
    },
    setGliders(state, payload) {
      state.gliders = payload
    },
    setHangGliders(state, payload) {
      state.hangGliders = payload
    },
    setHelicopters(state, payload) {
      state.helicopters = payload
    },
    setMilitaryPlanes(state, payload) {
      state.militaryPlanes = payload
    },
    setMilitaryRockets(state, payload) {
      state.militaryRockets = payload
    },
    setPlanes(state, payload) {
      state.planes = payload
    },
    setRockets(state, payload) {
      state.rockets = payload
    },
    setTransportPlanes(state, payload) {
      state.transportPlanes = payload
    },
    setProducts(state, payload) {
      state.products = payload
    },
    //other 23
    setAreas(state, payload) {
      state.areas = payload
    },
    setAssemblers(state, payload) {
      state.assemblers = payload
    },
    setBrigades(state, payload) {
      state.brigades = payload
    },
    setCompanies(state, payload) {
      state.companies = payload
    },
    setConductedTesting(state, payload) {
      state.conductedTesting = payload
    },
    setEmployees(state, payload) {
      state.employees = payload
    },
    setEngineeringStaff(state, payload) {
      state.engineeringStaff = payload
    },
    setEngineers(state, payload) {
      state.engineers = payload
    },
    setJobs(state, payload) {
      state.jobs = payload
    },
    setLabEquipment(state, payload) {
      state.labEquipment = payload
    },
    setLabs(state, payload) {
      state.labs = payload
    },
    setLocksmiths(state, payload) {
      state.locksmiths = payload
    },
    setTechnicians(state, payload) {
      state.technicians = payload
    },
    setTechnologists(state, payload) {
      state.technologists = payload
    },
    setTesters(state, payload) {
      state.testers = payload
    },
    setTests(state, payload) {
      state.tests = payload
    },
    setTurners(state, payload) {
      state.turners = payload
    },
    setUsedInTest(state, payload) {
      state.usedInTest = payload
    },
    setUsesOfServices(state, payload) {
      state.usesOfServices = payload
    },
    setWelders(state, payload) {
      state.welders = payload
    },
    setWorkers(state, payload) {
      state.workers = payload
    },
    setWorksAsMaster(state, payload) {
      state.worksAsMaster = payload
    },
    setWorkshops(state, payload) {
      state.workshops = payload
    },
    //extra entities
    setBosses(state, payload) {
      state.bosses = payload
    },
    setForemen(state, payload) {
      state.foremen = payload
    },
    setWorkshop(state, payload){
      state.workshop = payload
    },
    setCompany(state, payload){
      state.company = payload
    },
    //set Props
    //products
    setantiHailP(state, payload) {
      state.Props.antiHail = payload
    },
    setcivilPlaneP(state, payload) {
      state.Props.civilPlane = payload
    },
    setcivilRocketP(state, payload) {
      state.Props.civilRocket = payload
    },
    setgliderP(state, payload) {
      state.Props.glider = payload
    },
    sethangGliderP(state, payload) {
      state.Props.hangGlider = payload
    },
    sethelicopterP(state, payload) {
      state.Props.helicopter = payload
    },
    setmilitaryPlaneP(state, payload) {
      state.Props.militaryPlane = payload
    },
    setmilitaryRocketP(state, payload) {
      state.Props.militaryRocket = payload
    },
    setplaneP(state, payload) {
      state.Props.plane = payload
    },
    setrocketP(state, payload) {
      state.Props.rocket = payload
    },
    settransportPlaneP(state, payload) {
      state.Props.transportPlane = payload
    },
    setproductP(state, payload) {
      state.Props.product = payload
    },
    //other 23
    setAreasP(state, payload){
      state.Props.areas = payload
    },
    setAssemblerP(state, payload){
      state.Props.assembler = payload
    },
    setBrigadesP(state, payload){
      state.Props.brigades = payload
    },
    setCompaniesP(state, payload){
      state.Props.companies = payload
    },
    setConductedTestingP(state, payload){
      state.Props.conductedTesting = payload
    },
    setEmployeeP(state, payload){
      state.Props.employee = payload
    },
    setEngineeringStaffP(state, payload){
      state.Props.engineeringStaff = payload
    },
    setEngineerP(state, payload){
      state.Props.engineer = payload
    },
    setJobsP(state, payload){
      state.Props.jobs = payload
    },
    setLabEquipmentP(state, payload){
      state.Props.labEquipment = payload
    },
    setLabsP(state, payload){
      state.Props.labs = payload
    },
    setLocksmithP(state, payload){
      state.Props.locksmith = payload
    },
    setTechnicianP(state, payload){
      state.Props.technician = payload
    },
    setTechnologistP(state, payload){
      state.Props.technologist = payload
    },
    setTesterP(state, payload){
      state.Props.tester = payload
    },
    setTestsP(state, payload){
      state.Props.tests = payload
    },
    setTurnerP(state, payload){
      state.Props.turner = payload
    },
    setUsedInTestP(state, payload){
      state.Props.usedInTest = payload
    },
    setUsesOfServicesP(state, payload){
      state.Props.usesOfServices = payload
    },
    setWelderP(state, payload){
      state.Props.welder = payload
    },
    setWorkerP(state, payload){
      state.Props.worker = payload
    },
    //extra entities
    setBossP(state, payload){
      state.Props.bosses = payload
    },
    setForemenP(state, payload){
      state.Props.foremen = payload
    },
    setWorkshopP(state, payload){
      state.Props.workshop = payload
    },
    setCompanyP(state, payload){
      state.Props.company = payload
    },
    //add new button
    setAddP(state, payload) {
      state.addProperties.addP = payload
    },
    setAddLink(state, payload) {
      state.addProperties.addLink = payload
    },
    setAddText(state, payload) {
      state.addProperties.addText = payload
    },
    //filters
    setFilterProps(state, payload){
      state.FilterProps = payload
    },
    setSelected(state, payload){
      state.FilterProps.selected = payload
    },
    setWorkshopsF(state, payload) {
      state.FilterProps.workshops = payload
    },
    setCompaniesF(state, payload) {
      state.FilterProps.companies = payload
    },
    setAreasF(state, payload) {
      state.FilterProps.areas = payload
    },
    setBrigadesF(state, payload) {
      state.FilterProps.brigades = payload
    },
    setCategoriesF(state, payload) {
      state.FilterProps.categories = payload
      console.warn(state.FilterProps.categories)
    },
    setWorkshopF(state, payload) {
      state.FilterProps.selected.Workshop = payload
    },
    setCompanyF(state, payload) {
      state.FilterProps.selected.Company = payload
    },
    setAreaF(state, payload) {
      state.FilterProps.selected.Area = payload
    },
    setCategoryF(state, payload) {
      state.FilterProps.selected.Category = payload
      console.warn(payload)
    },
    setBrigadeF(state, payload) {
      state.FilterProps.selected.Brigade = payload
    },
    setCategory1F(state, payload) {
      state.FilterProps.selected.category1 = payload
    },
    setDateFrom1F(state, payload) {
      state.FilterProps.selected.dateFrom1 = payload
    },
    setDateTo1F(state, payload) {
      state.FilterProps.selected.dateTo1 = payload
    },
    setCategory2F(state, payload) {
      state.FilterProps.selected.category2 = payload
    },
    setDateFrom2F(state, payload) {
      state.FilterProps.selected.dateFrom2 = payload
    },
    setDateTo2F(state, payload) {
      state.FilterProps.selected.dateTo2 = payload
    },
    setCategory3F(state, payload) {
      state.FilterProps.selected.category3 = payload
    },
    setDateFrom3F(state, payload) {
      state.FilterProps.selected.dateFrom3 = payload
    },
    setDateTo3F(state, payload) {
      state.FilterProps.selected.dateTo3 = payload
    },
    //cleaners
    cleanAddProps(state) {
      state.addProperties = {
        addP: false,
        addLink: "",
        addText: ""
      }
    },
    cleanProps(state) {
      state.productProps = {
        antiHailRockets: false,
        civilPlanes: false,
        civilRockets: false,
        gliders: false,
        hangGliders: false,
        helicopters: false,
        militaryPlanes: false,
        militaryRockets: false,
        planes: false,
        rockets: false,
        transportPlanes: false,
        products: false,
        //other 23
        areas: false,
        assemblers: false,
        brigades: false,
        companies: false,
        conductedTesting: false,
        employees: false,
        engineeringStaff: false,
        engineers: false,
        jobs: false,
        labEquipment: false,
        labs: false,
        locksmiths: false,
        technicians: false,
        technologists: false,
        testers: false,
        tests: false,
        turners: false,
        usedInTest: false,
        usesOfServices: false,
        welders: false,
        workers: false,
        worksAsMaster: false,
        workshops: false,
        //extra entities
        bosses: false,
        foremen: false,
        workshop: false,
        company: false,
      }
    },
    cleanProducts(state) {
      state.products = [{}]
    },
    cleanAntiHailRockets(state) {
      state.antiHailRockets = [{}]
    },
    cleanCivilPlanes(state) {
      state.civilPlanes = [{}]
    },
    cleanCivilRockets(state) {
      state.civilRockets = [{}]
    },
    cleanGliders(state) {
      state.gliders = [{}]
    },
    cleanHangGliders(state) {
      state.hangGliders = [{}]
    },
    cleanHelicopters(state) {
      state.helicopters = [{}]
    },
    cleanMilitaryPlanes(state) {
      state.militaryPlanes = [{}]
    },
    cleanMilitaryRockets(state) {
      state.militaryRockets = [{}]
    },
    cleanPlanes(state) {
      state.planes = [{}]
    },
    cleanRockets(state) {
      state.rockets = [{}]
    },
    cleanTransportPlanes(state) {
      state.transportPlanes = [{}]
    },
    cleanWorkshops(state){
      state.workshops = [{}]
    },
    cleanAreas(state){
      state.areas = [{}]
    },
    cleanLabs(state){
      state.labs = [{}]
    },
    cleanCompanies(state){
      state.companies = [{}]
    },
    cleanBosses(state){
      state.bosses = [{}]
    },
    cleanEmployees(state){
      state.employees = [{}]
    },
    cleanWorkshop(state){
      state.workshop = [{}]
    },
    cleanForemen(state){
      state.workshop = [{}]
    },
    cleanBrigades(state){
      state.workshop = [{}]
    },
    cleanCompany(state){
      state.company = [{}]
    },
    cleanLabEquipment(state){
      state.labEquipment = [{}]
    },
    //filters
    cleanWorkshopsF(state){
      state.FilterProps.workshops = [{}]
    },
    cleanCompaniesF(state){
      state.FilterProps.companies = [{}]
    },
    cleanAreasF(state){
      state.FilterProps.areas = [{}]
    },
    cleanBrigadesF(state){
      state.FilterProps.brigades = [{}]
    },
    cleanWorkshopF(state){
      state.FilterProps.selected.Workshop = {
        ID: 0,
        Company: 0,
        Boss: 0,
        Name: ""
      }
    },
    cleanCompanyF(state){
      state.FilterProps.selected.Company = {
        ID:0, 
        name: " "
      }
    },
    cleanAreaF(state){
      state.FilterProps.selected.Area = {
        ID: 0,
        Workshop: 0,
        Boss: 0,
        Name: ""
      }
    },
    cleanCategoryF(state){
      state.FilterProps.selected.Category = {
        ID: 0,
        WorkshopArea: 0,
        Foreman: 0,
        Name: ""
      }
    },
    cleanBrigadeF(state){
      state.FilterProps.selected.Brigade = {
        ID: 0,
        WorkshopArea: 0,
        Foreman: 0,
        Name: ""
      }
    },
    cleanCategory1F(state){
      state.FilterProps.selected.category1 = ""
    },
    cleanDateFrom1F(state){
      state.FilterProps.selected.dateFrom1 = ""
    },
    cleanDateTo1F(state){
      state.FilterProps.selected.dateTo1 = ""
    },
    cleanCategory2F(state){
      state.FilterProps.selected.category2 = ""
    },
    cleanDateFrom2F(state){
      state.FilterProps.selected.dateFrom2 = ""
    },
    cleanDateTo2F(state){
      state.FilterProps.selected.dateTo2 = ""
    },
    cleanCategory3F(state){
      state.FilterProps.selected.category3 = ""
    },
    cleanDateFrom3F(state){
      state.FilterProps.selected.dateFrom3 = ""
    },
    cleanDateTo3F(state){
      state.FilterProps.selected.dateTo3 = ""
    },
    cleanFilter(state){
      state.commit("cleanWorkshopsF")
      state.commit("cleanCompaniesF")
      state.commit("cleanAreasF")
      state.commit("cleanBrigadesF")
      state.commit("cleanWorkshopF")
      state.commit("cleanCompanyF")
      state.commit("cleanAreaF")
      state.commit("cleanCategoryF")
      state.commit("cleanCategory1F")
      state.commit("cleanDateFrom1F")
      state.commit("cleanDateTo1F")
      state.commit("cleanCategory2F")
      state.commit("cleanDateFrom2F")
      state.commit("cleanDateTo2F")
      state.commit("cleanCategory3F")
      state.commit("cleanDateFrom3F")
      state.commit("cleanDateTo3F")
    }
  },
  getters: {
    //products
    antiHailRockets(state) {
      return state.antiHailRockets
    },
    civilPlanes(state) {
      return state.civilPlanes
    },
    civilRockets(state) {
      return state.civilRockets
    },
    gliders(state) {
      return state.gliders
    },
    hangGliders(state) {
      return state.products
    },
    helicopters(state) {
      return state.helicopters
    },
    militaryPlanes(state) {
      return state.militaryPlanes
    },
    militaryRockets(state) {
      return state.militaryRockets
    },
    planes(state) {
      return state.planes
    },
    rockets(state) {
      return state.rockets
    },
    transportPlanes(state) {
      return state.transportPlanes
    },
    products(state) {
      return state.products
    },
    //other 23

    //props
    antiHailP(state) {
      return state.Props.antiHail
    },
    civilPlaneP(state) {
      return state.Props.civilPlane
    },
    civilRocketP(state) {
      return state.Props.civilRocket
    },
    gliderP(state) {
      return state.Props.glider
    },
    hangGliderP(state) {
      return state.Props.hangGlider
    },
    helicopterP(state) {
      return state.Props.helicopter
    },
    militaryPlaneP(state) {
      return state.Props.militaryPlane
    },
    militaryRocketP(state) {
      return state.Props.militaryRocket
    },
    planeP(state) {
      return state.Props.plane
    },
    productP(state) {
      return state.Props.product
    },
    rocketP(state) {
      return state.Props.rocket
    },
    transportPlaneP(state) {
      return state.Props.transportPlane
    },
    areas(state) {
      return state.areas
    },
    assemblers(state) {
      return state.assemblers
    },
    brigades(state) {
      return state.brigades
    },
    companies(state) {
      return state.companies
    },
    conductedTesting(state) {
      return state.conductedTesting
    },
    employees(state) {
      return state.employees
    },
    engineeringStaff(state) {
      return state.engineeringStaff
    },
    engineers(state) {
      return state.engineers
    },
    jobs(state) {
      return state.jobs
    },
    labEquipment(state) {
      return state.labEquipment
    },
    labs(state) {
      return state.labs
    },
    locksmiths(state) {
      return state.locksmiths
    },
    otherProducts(state) {
      return state.otherProducts
    },
    technicians(state) {
      return state.technicians
    },
    technologists(state) {
      return state.technologists
    },
    testers(state) {
      return state.testers
    },
    tests(state) {
      return state.tests
    },
    turners(state) {
      return state.turners
    },
    usedInTest(state) {
      return state.usedInTest
    },
    usesOfServices(state) {
      return state.usesOfServices
    },
    welders(state) {
      return state.welders
    },
    workers(state) {
      return state.workers
    },
    worksAsMaster(state) {
      return state.worksAsMaster
    },
    workshops(state) {
      return state.workshops
    },
    addP(state) {
      return state.addProperties.addP
    },
    addLink(state) {
      return state.addProperties.addLink
    },
    addText(state) {
      return state.addProperties.addText
    },
    //EmployeeCard
    employeeP(state){
      return state.Props.employee
    },
    engineeringStaffP(state){
      return state.Props.engineeringStaff
    },
    workerP(state){
      return state.Props.worker
    },
    testerP(state){
      return state.Props.tester
    },
    assemblerP(state){
      return state.Props.assembler
    },
    turnerP(state){
      return state.Props.turner
    },
    locksmithP(state){
      return state.Props.locksmith
    },
    welderP(state){
      return state.Props.welder
    },
    engineerP(state){
      return state.Props.engineer
    },
    technologistP(state){
      return state.Props.technologist
    },
    technicianP(state){
      return state.Props.technician
    },
    
    bosses(state){
      return state.bosses
    },
    foremen(state){
      return state.foremen
    },
    //AreaPage
    workshop(state){
      return state.workshop
    },
    company(state){
      return state.company
    },
    //filters
    FilterProps(state){
      return state.FilterProps
    },
    selected(state){
      return state.FilterProps.selected
    },
    workshopsF(state){
      return state.FilterProps.workshops
    },
    companiesF(state){
      return state.FilterProps.companies
    },
    areasF(state){
      return state.FilterProps.areas
    },
    brigadesF(state){
      return state.FilterProps.brigades
    },
    categoriesF(state){
      return state.FilterProps.categories1
    },
    CompanyF(state){
      return state.FilterProps.selected.Company
    },
    WorkshopF(state){
      return state.FilterProps.selected.Workshop
    },
    AreaF(state){
      return state.FilterProps.selected.Area
    },
    CategoryF(state){
      return state.FilterProps.selected.Category
    },
    BrigadeF(state){
      return state.FilterProps.selected.Brigade
    },
    Category1F(state){
      return state.FilterProps.selected.category1
    },
    dateFrom1F(state){
      return state.FilterProps.selected.dateFrom
    },
    dateTo1F(state){
      return state.FilterProps.selected.dateTo
    },
    Category2F(state){
      return state.FilterProps.selected.category1
    },
    dateFrom2F(state){
      return state.FilterProps.selected.dateFrom
    },
    dateTo2F(state){
      return state.FilterProps.selected.dateTo
    },
    Category3F(state){
      return state.FilterProps.selected.category1
    },
    dateFrom3F(state){
      return state.FilterProps.selected.dateFrom
    },
    dateTo3F(state){
      return state.FilterProps.selected.dateTo
    },
  },
  actions: {
    async getAntiHailRockets(context) {
      let result = await axios.get('http://localhost:8082/antiHailRockets/')
      context.commit('setAntiHailRockets', result.data.antiHailRockets)
    },
    async getCivilPlanes(context) {
      let result = await axios.get('http://localhost:8082/civil-planes/')
      context.commit('setCivilPlanes', result.data.civilPlanes)
    },
    async getCivilRockets(context) {
      let result = await axios.get('http://localhost:8082/civil-rockets/')
      context.commit('setCivilRockets', result.data.civilRockets)
    },
    async getGliders(context) {
      let result = await axios.get('http://localhost:8082/gliders/')
      context.commit('setGliders', result.data.gliders)
    },
    async getHangGliders(context) {
      let result = await axios.get('http://localhost:8082/hang-gliders/')
      context.commit('setHangGliders', result.data.hangGliders)
    },
    async getHelicopters(context) {
      let result = await axios.get('http://localhost:8082/helicopters/')
      context.commit('setHelicopters', result.data.helicopters)
    },
    async getMilitaryPlanes(context) {
      let result = await axios.get('http://localhost:8082/military-planes/')
      context.commit('setMilitaryPlanes', result.data.militaryPlanes)
    },
    async getMilitaryRockets(context) {
      let result = await axios.get('http://localhost:8082/military-rockets/')
      context.commit('setMilitaryRockets', result.data.militaryRockets)
    },
    async getPlanes(context) {
      let result = await axios.get('http://localhost:8082/planes/')
      context.commit('setPlanes', result.data.planes)
    },
    async getProducts(context, payload) {
      let result = await axios.get('http://localhost:8082/products', {params:  payload})
      console.warn(result.data)
      result.data.products.forEach(item => {
        if (item.ProductionDate) {
          item.ProductionDate = date(item.ProductionDate)
        }
      });
      context.commit('setProducts', result.data.products)
    },
    async getRockets(context) {
      let result = await axios.get('http://localhost:8082/rockets')
      context.commit('setRockets', result.data.rockets)
    },
    async getTransportPlanes(context) {
      let result = await axios.get('http://localhost:8082/transport-planes')
      context.commit('setTransportPlanes', result.data.transportPlanes)
    },
    async getAreas(context) {
      let result = await axios.get('http://localhost:8082/areas')
      if(result.data.areas){
        context.commit('setAreas', result.data.areas)
      }
      if(result.data.foremen){
        context.commit('setForemen', result.data.foremen)
      }
    },
    async getAssemblers(context) {
      let result = await axios.get('http://localhost:8082/assemblers')
      context.commit('setAssemblers', result.data.assemblers)
    },
    async getBrigades(context) {
      let result = await axios.get('http://localhost:8082/brigades')
      context.commit('setBrigades', result.data.brigades)
    },
    async getCompanies(context, payload) {
      let result = await axios.get('http://localhost:8082/companies')
      context.commit('setCompanies', result.data.companies)
    },
    async getConductedTesting(context) {
      let result = await axios.get('http://localhost:8082/conducted-testing')
      context.commit('setConductedTesting', result.data.conductedTesting)
    },
    async getEmployees(context, payload) {
      let result = await axios.get('http://localhost:8082/employees', {params:  payload})
      if(result.data.employees){
      result.data.employees.forEach(item => {
        if (item.Birthdate) {
          item.Birthdate = date(item.Birthdate)
        }
        if (item.WorkExperience) {
          item.WorkExperience = date(item.WorkExperience)
        }
      });
    }
      context.commit('setEmployees', result.data.employees)
    },
    async getEngineeringStaff(context) {
      let result = await axios.get('http://localhost:8082/engineering-staff')
      context.commit('setEngineeringStaff', result.data.engineeringStaff)
    },
    async getEngineers(context) {
      let result = await axios.get('http://localhost:8082/engineers')
      context.commit('setEngineers', result.data.engineers)
    },
    async getJobs(context) {
      let result = await axios.get('http://localhost:8082/jobs')
      context.commit('setJobs', result.data.jobs)
    },
    async getLabEquipment(context) {
      let result = await axios.get('http://localhost:8082/lab-equipment')
      context.commit('setLabEquipment', result.data.labEquipment)
    },
    async getLabs(context) {
      let result = await axios.get('http://localhost:8082/labs',)
      context.commit('setLabs', result.data.labs)
    },
    async getLocksmiths(context) {
      let result = await axios.get('http://localhost:8082/locksmiths')
      context.commit('setLocksmiths', result.data.locksmiths)
    },
    async getOtherProducts(context) {
      let result = await axios.get('http://localhost:8082/other-products')
      context.commit('setOtherProducts', result.data.otherProducts)
    },
    async getTechnicians(context) {
      let result = await axios.get('http://localhost:8082/technicians')
      context.commit('setTechnicians', result.data.technicians)
    },
    async getTechnologists(context) {
      let result = await axios.get('http://localhost:8082/technologists')
      context.commit('setTechnologists', result.data.technologists)
    },
    async getTesters(context) {
      let result = await axios.get('http://localhost:8082/tests')
      context.commit('setTesters', result.data.testers)
    },
    async getTests(context) {
      let result = await axios.get('http://localhost:8082/testers')
      context.commit('setTests', result.data.tests)
    },
    async getTurners(context) {
      let result = await axios.get('http://localhost:8082/turners')
      context.commit('setTurners', result.data.turners)
    },
    async getUsedInTest(context) {
      let result = await axios.get('http://localhost:8082/used-in-test')
      context.commit('setUsedInTest', result.data.usedInTest)
    },
    async getUsesOfServices(context) {
      let result = await axios.get('http://localhost:8082/uses-of-services')
      context.commit('setUsesOfServices', result.data.usesOfServices)
    },
    async getWelders(context) {
      let result = await axios.get('http://localhost:8082/welders')
      context.commit('setWelders', result.data.welders)
    },
    async getWorkers(context) {
      let result = await axios.get('http://localhost:8082/workers')
      context.commit('setWorkers', result.data.workers)
    },
    async getWorksAsMaster(context) {
      let result = await axios.get('http://localhost:8082/works-as-master')
      context.commit('setWorksAsMaster', result.data.worksAsMaster)
    },
    async getWorkshops(context) {
      let result = await axios.get('http://localhost:8082/workshops')
      if(result.data.workshops){
        context.commit('setWorkshops', result.data.workshops)
      }
      if(result.data.bosses){
        context.commit('setBosses', result.data.bosses)
      }
    },
    //ProductCard
    async getProduct(context, payload) {
      let result = await axios.get('http://localhost:8082/products/' + payload)
      context.dispatch('parseResponse', result.data)
    },
    async putProduct(state, payload) {
      if (state.getters.antiHailP) {
        axios.put('http://localhost:8082/antiHailRockets/' + payload, state.getters.antiHailRockets[0])
      }
      if (state.getters.civilPlaneP) {
        axios.put('http://localhost:8082/civil-planes/' + payload, state.getters.civilPlanes[0])
      }
      if (state.getters.civilRocketP) {
        axios.put('http://localhost:8082/civil-rockets/' + payload, state.getters.civilRockets[0])
      }
      if (state.getters.gliderP) {
        axios.put('http://localhost:8082/gliders/' + payload, state.getters.gliders[0])
      }
      if (state.getters.hangGliderP) {
        axios.put('http://localhost:8082/hang-gliders/' + payload, state.getters.hangGliders[0])
      }
      if (state.getters.helicopterP) {
        axios.put('http://localhost:8082/helicopters/' + payload, state.getters.helicopters[0])
      }
      if (state.getters.militaryPlaneP) {
        axios.put('http://localhost:8082/military-planes/' + payload, state.getters.militaryPlanes[0])
      }
      if (state.getters.militaryRocketP) {
        axios.put('http://localhost:8082/military-rockets/' + payload, state.getters.militaryRockets[0])
      }
      if (state.getters.planeP) {
        axios.put('http://localhost:8082/planes/' + payload, state.getters.planes[0])
      }
      if (state.getters.productP) {
        axios.put('http://localhost:8082/products/' + payload, state.getters.products[0])
      }
      if (state.getters.rocketP) {
        axios.put('http://localhost:8082/rockets/' + payload, state.getters.rockets[0])
      }
      if (state.getters.transportPlaneP) {
        axios.put('http://localhost:8082/transport-planes/' + payload, state.getters.transportPlanes[0])
      }
    },
    async postProduct(context) {
      if (context.getters.productP) {
        let result = await axios.post('http://localhost:8082/products/', context.getters.products[0])
        context.commit('setProducts', result.data.products[0])
      } else{
        return
      }
      if (context.getters.planeP) {
        let obj = context.getters.planes
        obj[0].ID = context.getters.products[0]
        context.commit('setPlanes', obj)
        axios.post('http://localhost:8082/planes/', context.getters.planes[0])
      }
      if (context.getters.rocketP) {
        let obj = context.getters.rockets
        obj[0].ID = context.getters.products[0]
        context.commit('setPlanes', obj)
        axios.post('http://localhost:8082/rockets/', context.getters.rockets[0])
      }
      if (context.getters.gliderP) {
        let obj = context.getters.gliders
        obj[0].ID = context.getters.products[0]
        context.commit('setPlanes', obj)
        axios.post('http://localhost:8082/gliders/', context.getters.gliders[0])
      }
      if (context.getters.hangGliderP) {
        let obj = context.getters.hangGliders
        obj[0].ID = context.getters.products[0]
        context.commit('setPlanes', obj)
        axios.post('http://localhost:8082/hang-gliders/', context.getters.hangGliders[0])
      }
      if (context.getters.helicopterP) {
        let obj = context.getters.helicopters
        obj[0].ID = context.getters.products[0]
        context.commit('setPlanes', obj)
        axios.post('http://localhost:8082/helicopters/', context.getters.helicopters[0])
      }
      if (context.getters.civilPlaneP) {
        let obj = context.getters.civilPlanes
        obj[0].ID = context.getters.products[0]
        context.commit('setPlanes', obj)
        axios.post('http://localhost:8082/civil-planes/', context.getters.civilPlanes[0])
      }
      if (context.getters.civilRocketP) {
        let obj = context.getters.civilRockets
        obj[0].ID = context.getters.products[0]
        context.commit('setPlanes', obj)
        axios.post('http://localhost:8082/civil-rockets/', context.getters.civilRockets[0])
      }
      if (context.getters.militaryPlaneP) {
        let obj = context.getters.militaryPlanes
        obj[0].ID = context.getters.products[0]
        context.commit('setPlanes', obj)
        axios.post('http://localhost:8082/military-planes/', context.getters.militaryPlanes[0])
      }
      if (context.getters.militaryRocketP) {
        let obj = context.getters.militaryRockets
        obj[0].ID = context.getters.products[0]
        context.commit('setPlanes', obj)
        axios.post('http://localhost:8082/military-rockets/', context.getters.militaryRockets[0])
      }
      if (context.getters.transportPlaneP) {
        let obj = context.getters.transportPlanes
        obj[0].ID = context.getters.products[0]
        context.commit('setPlanes', obj)
        axios.post('http://localhost:8082/transport-planes/', context.getters.transportPlanes[0])
      }
      if (context.getters.antiHailP) {
        let obj = context.getters.antiHailRockets
        obj[0].ID = context.getters.products[0]
        context.commit('setPlanes', obj)
        axios.post('http://localhost:8082/antiHailRockets/', context.getters.antiHailRockets[0])
      }
    },
    async deleteProduct(state, payload) {
      if (state.getters.antiHailP) {
        axios.delete('http://localhost:8082/antiHailRockets/' + payload, state.getters.antiHailRockets[0])
      }
      if (state.getters.civilRocketP) {
        axios.delete('http://localhost:8082/civil-rockets/' + payload, state.getters.civilRockets[0])
      }
      if (state.getters.militaryPlaneP) {
        axios.delete('http://localhost:8082/military-planes/' + payload, state.getters.militaryPlanes[0])
      }
      if (state.getters.militaryRocketP) {
        axios.delete('http://localhost:8082/military-rockets/' + payload, state.getters.militaryRockets[0])
      }
      if (state.getters.transportPlaneP) {
        axios.delete('http://localhost:8082/transport-planes/' + payload, state.getters.transportPlanes[0])
      }
      if (state.getters.civilPlaneP) {
        axios.delete('http://localhost:8082/civil-planes/' + payload, state.getters.civilPlanes[0])
      }
      if (state.getters.planeP) {
        axios.delete('http://localhost:8082/planes/' + payload, state.getters.planes[0])
      }
      if (state.getters.hangGliderP) {
        axios.delete('http://localhost:8082/hang-gliders/' + payload, state.getters.hangGliders[0])
      }
      if (state.getters.helicopterP) {
        axios.delete('http://localhost:8082/helicopters/' + payload, state.getters.helicopters[0])
      }
      if (state.getters.rocketP) {
        axios.delete('http://localhost:8082/rockets/' + payload, state.getters.rockets[0])
      }
      if (state.getters.gliderP) {
        axios.delete('http://localhost:8082/gliders/' + payload, state.getters.gliders[0])
      }
      if (state.getters.productP) {
        axios.delete('http://localhost:8082/products/' + payload, state.getters.products[0])
      }
    },
    //CompanyCard
    async getEmployee(context, payload){
      let result = await axios.get('http://localhost:8082/employees/' + payload)
      context.dispatch('parseResponse', result.data)    },
    async putEmployee(state, payload){
      if (state.getters.employeeP) {
        axios.put('http://localhost:8082/employees/' + payload, state.getters.employees[0])
      }
      if (state.getters.engineeringStaffP) {
        axios.put('http://localhost:8082/engineering-staff/' + payload, state.getters.engineeringStaff[0])
      }
      if (state.getters.workerP) {
        axios.put('http://localhost:8082/workers/' + payload, state.getters.workers[0])
      }
      if (state.getters.testerP) {
        axios.put('http://localhost:8082/testers/' + payload, state.getters.testers[0])
      }
      if (state.getters.assemblerP) {
        axios.put('http://localhost:8082/assemblers/' + payload, state.getters.assemblers[0])
      }
      if (state.getters.turnerP) {
        axios.put('http://localhost:8082/turners/' + payload, state.getters.turners[0])
      }
      if (state.getters.locksmithP) {
        axios.put('http://localhost:8082/locksmiths/' + payload, state.getters.locksmiths[0])
      }
      if (state.getters.welderP) {
        axios.put('http://localhost:8082/welders/' + payload, state.getters.welders[0])
      }
      if (state.getters.engineerP) {
        axios.put('http://localhost:8082/engineers/' + payload, state.getters.engineers[0])
      }
      if (state.getters.technologistP) {
        axios.put('http://localhost:8082/technologists/' + payload, state.getters.technologists[0])
      }
      if (state.getters.technicianP) {
        axios.put('http://localhost:8082/technicians/' + payload, state.getters.technicians[0])
      }
    },
    // async postEmployee(context){
      
    // },
    async deleteEmployee(state, payload){
      if (state.getters.assemblerP) {
        axios.delete('http://localhost:8082/assemblers/' + payload, state.getters.assemblers[0])
      }
      if (state.getters.turnerP) {
        axios.delete('http://localhost:8082/turners/' + payload, state.getters.turners[0])
      }
      if (state.getters.locksmithP) {
        axios.delete('http://localhost:8082/locksmiths/' + payload, state.getters.locksmiths[0])
      }
      if (state.getters.welderP) {
        axios.delete('http://localhost:8082/welders/' + payload, state.getters.welders[0])
      }
      if (state.getters.engineerP) {
        axios.delete('http://localhost:8082/engineers/' + payload, state.getters.engineers[0])
      }
      if (state.getters.technologistP) {
        axios.delete('http://localhost:8082/technologists/' + payload, state.getters.technologists[0])
      }
      if (state.getters.technicianP) {
        axios.delete('http://localhost:8082/technicians/' + payload, state.getters.technicians[0])
      }
      if (state.getters.engineeringStaffP) {
        axios.delete('http://localhost:8082/engineering-staff/' + payload, state.getters.engineeringStaff[0])
      }
      if (state.getters.workerP) {
        axios.delete('http://localhost:8082/workers/' + payload, state.getters.workers[0])
      }
      if (state.getters.testerP) {
        axios.delete('http://localhost:8082/testers/' + payload, state.getters.testers[0])
      }
      if (state.getters.employeeP) {
        axios.delete('http://localhost:8082/employees/' + payload, state.getters.employees[0])
      }
    },
    // //CompanyCard
    async getCompany(context, payload){
      let result = await axios.get('http://localhost:8082/companies/' + payload)
      console.warn(result.data)
      context.dispatch('parseResponse', result.data)    },
    async putCompany(state, payload){
      axios.put('http://localhost:8082/companies/' + payload, state.getters.companies[0])
    },
    // async postCompany(context){

    // },
    // async deleteCompany(state, payload){
    //         //not works
    //         axios.delete('http://localhost:8082/companies/' + payload, state.getters.companies[0])
    // },
    // //WorkshopCard
    async getWorkshop(context, payload){
      let result = await axios.get('http://localhost:8082/workshops/' + payload)
      context.dispatch('parseResponse', result.data)    },
    async putWorkshop(state, payload){
      axios.put('http://localhost:8082/workshops/' + payload, state.getters.workshops[0])
    },
    // async postWorkshop(context){
      
    // },
    async deleteWorkshop(state, payload){
      axios.delete('http://localhost:8082/workshops/' + payload, state.getters.workshops[0])
    },
    //AreaCard
    async getArea(context, payload){
      let result = await axios.get('http://localhost:8082/areas/' + payload)
      context.dispatch('parseResponse', result.data)
    },
    async putArea(state, payload){
      axios.put('http://localhost:8082/areas/' + payload, state.getters.areas[0])
    },
    // async postArea(context){
      
    // },
    async deleteArea(state, payload){
      axios.delete('http://localhost:8082/areas/' + payload, state.getters.areas[0])
    },
    // //LabCard
    async getLab(context, {id, payload}){
      let result = await axios.get('http://localhost:8082/labs/' + id, payload)
      context.dispatch('parseResponse', result.data)
    },
    async putLab(state, payload){
      axios.put('http://localhost:8082/labs/' + payload, state.getters.labs[0])
    },
    // async postLab(context){
      
    // },
    async deleteLab(state, payload){
      axios.delete('http://localhost:8082/labs/' + payload, state.getters.labs[0])
    },
    // //BrigadeCard
    async getBrigade(context, payload){
      let result = await axios.get('http://localhost:8082/brigades/' + payload)
      context.dispatch('parseResponse', result.data)
    },
    async putBrigade(state, payload){
      axios.put('http://localhost:8082/labs/' + payload, state.getters.brigades[0])

    },
    // async postBrigade(context){
      
    // },
    async deleteBrigade(state, payload){
      axios.delete('http://localhost:8082/labs/' + payload, state.getters.brigades[0])

    },
    // //TestCard
    async getTest(context, payload){
      let result = await axios.get('http://localhost:8082/tests/' + payload)
      context.dispatch('parseResponse', result.data)
    },
    async putTest(state, payload){
      axios.put('http://localhost:8082/tests/' + payload, state.getters.tests[0])
    },
    // async postTest(context){
      
    // },
    async deleteTest(state, payload){
      axios.delete('http://localhost:8082/tests/' + payload, state.getters.test[0])

    },
    //cleanProps
    cleanAllProductsState(context){
      context.commit('cleanproducts')
      context.commit('cleanantiHailRockets')
      context.commit('cleancivilPlanes')
      context.commit('cleancivilRockets')
      context.commit('cleangliders')
      context.commit('cleanhangGliders')
      context.commit('cleanhelicopters')
      context.commit('cleanmilitaryPlanes')
      context.commit('cleanmilitaryRockets')
      context.commit('cleanplanes')
      context.commit('cleanrockets')
      context.commit('cleantransportPlanes')
    },
    async parseResponse(context, items){
      console.warn(items)
      if(items.antiHailRockets){
        context.commit('setantiHailP', true)
        context.commit('setAntiHailRockets', items.antiHailRockets)
      }
      if(items.civilPlanes){
        context.commit('setcivilPlaneP', true)
        context.commit('setCivilPlanes', items.civilPlanes)
      }
      if(items.civilRockets){
        context.commit('setcivilRocketP', true)
        context.commit('setCivilRockets', items.civilRockets)
      }
      if(items.gliders){
        context.commit('setgliderP', true)
        context.commit('setGliders', items.gliders)
      }
      if(items.hangGliders){
        context.commit('sethangGliderP', true)
        context.commit('setHangGliders', items.hangGliders)
      }
      if(items.helicopters){
        context.commit('sethelicopterP', true)
        context.commit('setHelicopters', items.helicopters)
      }
      if(items.militaryPlanes){
        context.commit('setmilitaryPlaneP', true)
        context.commit('setMilitaryPlanes', items.militaryPlanes)
      }
      if(items.militaryRockets){
        context.commit('setmilitaryRocketP', true)
        context.commit('setMilitaryRockets', items.militaryRockets)
      }
      if(items.planes){
        context.commit('setplaneP', true)
        context.commit('setPlanes', items.planes)
      }
      if(items.rockets){
        context.commit('setrocketP', true)
        context.commit('setRockets', items.rockets)
      }
      if(items.transportPlanes){
        context.commit('settransportPlaneP', true)
        context.commit('setTransportPlanes', items.transportPlanes)
      }
      if(items.products){
        items.products.forEach(item => {
          if (item.ProductionDate) {
            item.ProductionDate = date(item.ProductionDate)
          }
        });
        context.commit('setproductP', true)
        context.commit('setProducts', items.products)
      }
      if(items.areas){
        context.commit('setAreas', items.areas)
      }
      if(items.assemblers){
        items.assemblers.forEach(item => {
          if (item.StartOfWork) {
            item.StartOfWork = date(item.StartOfWork)
          }
          if (item.EndOfWork) {
            item.EndOfWork = date(item.EndOfWork)
          }
        });
        context.commit('setAssemblerP', true)
        context.commit('setAssemblers', items.assemblers)
      }
      if(items.brigades){
        context.commit('setBrigades', items.brigades)
      }
      if(items.companies){
        context.commit('setCompanies', items.companies)
      }
      if(items.conductedTesting){
        context.commit('setConductedTesting', items.conductedTesting)
      }
      if(items.employees){
        items.employees.forEach(item => {
          if (item.Birthdate) {
            item.Birthdate = date(item.Birthdate)
          }
          if (item.WorkExperience) {
            item.WorkExperience = date(item.WorkExperience)
          }
        });
        context.commit('setEmployeeP', true)
        context.commit('setEmployees', items.employees)
      }
      if(items.engineeringStaff){
        context.commit('setEngineeringStaffP', true)
        context.commit('setEngineeringStaff', items.engineeringStaff)
      }
      if(items.engineers){
        items.engineers.forEach(item => {
          if (item.StartOfWork) {
            item.StartOfWork = date(item.StartOfWork)
          }
          if (item.EndOfWork) {
            item.EndOfWork = date(item.EndOfWork)
          }
        });
        context.commit('setEngineerP', true)
        context.commit('setEngineers', items.engineers)
      }
      if(items.jobs){
        context.commit('setJobs', items.jobs)
      }
      if(items.labEquipment){
        context.commit('setLabEquipment', items.labEquipment)
      }
      if(items.labs){
        context.commit('setLabs', items.labs)
      }
      if(items.locksmiths){
        items.locksmiths.forEach(item => {
          if (item.StartOfWork) {
            item.StartOfWork = date(item.StartOfWork)
          }
          if (item.EndOfWork) {
            item.EndOfWork = date(item.EndOfWork)
          }
        });
        context.commit('setLocksmithP', true)
        context.commit('setLocksmiths', items.locksmiths)
      }
      if(items.setTechnicians){
        items.technicians.forEach(item => {
          if (item.StartOfWork) {
            item.StartOfWork = date(item.StartOfWork)
          }
          if (item.EndOfWork) {
            item.EndOfWork = date(item.EndOfWork)
          }
        });
        context.commit('setTechnicianP', true)
        context.commit('setTechnicians', items.technicians)
      }
      if(items.technologists){
        items.technologists.forEach(item => {
          if (item.StartOfWork) {
            item.StartOfWork = date(item.StartOfWork)
          }
          if (item.EndOfWork) {
            item.EndOfWork = date(item.EndOfWork)
          }
        });
        context.commit('setTechnologistP', true)
        context.commit('setTechnologists', items.technologists)
      }
      if(items.testers){
        context.commit('setTesterP', true)
        context.commit('setTesters', items.testers)
      }
      if(items.tests){
        items.tests.forEach(item => {
          if (item.TimeStart) {
            item.TimeStart = date(item.TimeStart)
          }
          if (item.TimeEnd) {
            item.TimeEnd = date(item.TimeEnd)
          }
        });
        context.commit('setTests', items.tests)
      }
      if(items.turners){
        items.locksmiths.forEach(item => {
          if (item.StartOfWork) {
            item.StartOfWork = date(item.StartOfWork)
          }
          if (item.EndOfWork) {
            item.EndOfWork = date(item.EndOfWork)
          }
        });
        context.commit('setTurnerP', true)
        context.commit('setTurners', items.turners)
      }
      if(items.usedInTest){
        context.commit('setUsedInTest', items.usedInTest)
      }
      if(items.usesOfServices){
        context.commit('setUsesOfServices', items.usesOfServices)
      }
      if(items.welders){
        items.welders.forEach(item => {
          if (item.StartOfWork) {
            item.StartOfWork = date(item.StartOfWork)
          }
          if (item.EndOfWork) {
            item.EndOfWork = date(item.EndOfWork)
          }
        });
        context.commit('setWelderP', true)
        context.commit('setWelders', items.welders)
      }
      if(items.workers){
        context.commit('setWorkerP', true)
        context.commit('setWorkers', items.workers)
      }
      if(items.worksAsMaster){
        context.commit('setWorksAsMaster', items.worksAsMaster)
      }
      if(items.workshops){
        context.commit('setWorkshops', items.workshops)
      }
      //extra stores
      if(items.bosses){
        context.commit('setBosses', items.bosses)
      }
      if(items.foremen){
        context.commit('setForemen', items.foremen)
      }
      if(items.workshop){
        context.commit('setWorkshop', items.workshop)
      }
      if(items.company){
        context.commit('setCompany', items.company)
        context.commit('setCompany', items.company)
      }
    },
    //filters
    async getCompaniesF({context, state}) {
      if(state.FilterProps.selected.Company.ID != 0){
        let result = await axios.get('http://localhost:8082/companies/' + state.FilterProps.selected.Company.ID)
        store.commit('setWorkshopsF', result.data.workshops)
        store.commit('setAreasF', result.data.areas)
        store.commit('setBrigadesF', result.data.brigades)
      } else{
        let result = await axios.get('http://localhost:8082/companies')
        store.commit('setCompaniesF', result.data.companies)
      }
    },
    async getWorkshopsF({context, state}) {
      if(state.FilterProps.selected.Workshop.ID != 0){
        let result = await axios.get('http://localhost:8082/workshops/' + state.FilterProps.selected.Workshop.ID)
        store.commit('setAreasF', result.data.areas)
        store.commit('setBrigadesF', result.data.brigades)
      } else{
        let result = await axios.get('http://localhost:8082/workshops')
        store.commit('setWorkshopsF', result.data.workshops)
      }
    },
    async getAreasF({context, state}) {
      if(state.FilterProps.selected.Area.ID != 0){
        let result = await axios.get('http://localhost:8082/areas/'  + state.FilterProps.selected.Workshop.ID)
        store.commit('setBrigadesF', result.data.brigades)
      }else{
        let result = await axios.get('http://localhost:8082/areas')
        store.commit('setAreasF', result.data.areas)
      }
    },
    async getBrigadesF(context) {
      let result = await axios.get('http://localhost:8082/brigades')
      context.commit('setBrigadesF', result.data.brigades)
    },
  },
})
  // plugins: [createPersistedState()]


export default store;

function date(value) {
  if (value) {
    return moment(String(value)).format('YYYY-MM-DD')
  }
}
