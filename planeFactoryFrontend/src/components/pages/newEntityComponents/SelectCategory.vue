<template>
  <div class="relative z-0 w-full mb-5">
    <select
      name="select"
      class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      v-model="this.selected"
      v-on:input="update($event.target.value)"
    >
      <option v-for="option in this.categories" :value="option.o1" :key="option.key">
        {{ option.o1 }}
      </option>
    </select>
    <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
      >Category</label
    >
  </div>
</template>

<script>
export default {
  methods: {
    update(value) {
      if (this.prevSelected === 'AntiHailRocket') {
        this.$store.commit('setrocketP', false)
        this.$store.commit('setcivilRocketP', false)
        this.$store.commit('setantiHailP', false)
      } else if (this.prevSelected === 'CivilPlane') {
        this.$store.commit('setplaneP', false)
        this.$store.commit('setcivilPlaneP', false)
      } else if (this.prevSelected === 'CivilRocket') {
        this.$store.commit('setrocketP', false)
        this.$store.commit('setcivilRocketP', false)
      } else if (this.prevSelected === 'Glider') {
        this.$store.commit('setgliderP', false)
      } else if (this.prevSelected === 'HangGlider') {
        this.$store.commit('sethangGliderP', false)
      } else if (this.prevSelected === 'Helicopter') {
        this.$store.commit('sethelicopterP', false)
      } else if (this.prevSelected === 'MilitaryPlane') {
        this.$store.commit('setplaneP', false)
        this.$store.commit('setmilitaryPlaneP', false)
      } else if (this.prevSelected === 'MilitaryRocket') {
        this.$store.commit('setrocketP', false)
        this.$store.commit('setmilitaryRocketP', false)
      } else if (this.prevSelected === 'Plane') {
        this.$store.commit('setplaneP', false)
      } else if (this.prevSelected === 'Rocket') {
        this.$store.commit('setrocketP', false)
      } else if (this.prevSelected === 'TransportPlane') {
        this.$store.commit('setplaneP', false)
        this.$store.commit('settransportPlaneP', false)
      }

      if (value === 'AntiHailRocket') {
        this.$store.commit('setrocketP', true)
        this.$store.commit('setcivilRocketP', true)
        this.$store.commit('setantiHailP', true)
      } else if (value === 'CivilPlane') {
        this.$store.commit('setplaneP', true)
        this.$store.commit('setcivilPlaneP', true)
      } else if (value === 'CivilRocket') {
        this.$store.commit('setrocketP', true)
        this.$store.commit('setcivilRocketP', true)
      } else if (value === 'Glider') {
        this.$store.commit('setgliderP', true)
      } else if (value === 'HangGlider') {
        this.$store.commit('sethangGliderP', true)
      } else if (value === 'Helicopter') {
        this.$store.commit('sethelicopterP', true)
      } else if (value === 'MilitaryPlane') {
        this.$store.commit('setplaneP', true)
        this.$store.commit('setmilitaryPlaneP', true)
      } else if (value === 'MilitaryRocket') {
        this.$store.commit('setrocketP', true)
        this.$store.commit('setmilitaryRocketP', true)
      } else if (value === 'Plane') {
        this.$store.commit('setplaneP', true)
      } else if (value === 'Rocket') {
        this.$store.commit('setrocketP', true)
      } else if (value === 'TransportPlane') {
        this.$store.commit('setplaneP', true)
        this.$store.commit('settransportPlaneP', true)
      }
      this.prevSelected = value
    }
  },
  data() {
    return {
      categories: [
        { o1: 'None' },
        { o1: 'AntiHailRocket' },
        { o1: 'CivilPlane' },
        { o1: 'CivilRocket' },
        { o1: 'Glider' },
        { o1: 'HangGlider' },
        { o1: 'Helicopter' },
        { o1: 'MilitaryPlane' },
        { o1: 'MilitaryRocket' },
        { o1: 'Plane' },
        { o1: 'Rocket' },
        { o1: 'TransportPlane' }
      ],
      selected: String,
      prevSelected: String
    }
  },
  
}
</script>
