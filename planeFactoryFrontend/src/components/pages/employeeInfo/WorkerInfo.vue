<template>
  <h2 class="text-2xl mb-2">Category: Worker</h2>
  <div class="relative z-0 w-full mb-5">
    <select
      name="select"
      v-model="$store.getters.workers[0].Brigade"
      onclick="this.setAttribute('value', this.value);"
      class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
    >
      <option>{{$store.getters.workers[0].Brigade}}</option>
      <option v-for="option in $store.getters.brigades" :value="option.ID" :key="option.ID">
        {{ option.ID }}
      </option>
    </select>
    <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
      >Brigade</label
    >
  </div>
</template>

<script></script>
