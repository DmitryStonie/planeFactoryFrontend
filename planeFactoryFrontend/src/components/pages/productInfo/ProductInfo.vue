<template>
  <h1 class="text-2xl font-bold mb-2">{{ $store.getters.products[0].Name }}</h1>
  <p class="text-xl mb-6">Id: {{ $store.getters.products[0].ID }}</p>
  <div class="relative z-0 w-full mb-5">
    <select
      name="select"
      v-model="$store.getters.products[0].Workshop"
      onclick="this.setAttribute('value', this.value);"
      class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
    >
      <option>{{$store.getters.products[0].Workshop}}</option>
      <option v-for="option in $store.getters.workshops" :value="option.ID" :key="option.ID">
        {{ option.Name }}
      </option>
    </select>
    <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
      >Workshop</label
    >
  </div>
  <div class="flex flex-row space-x-4">
    <div class="relative z-0 w-full mb-5">
      <input
        type="date"
        v-model="$store.getters.products[0].ProductionDate"
        name="date"
        placeholder=" "
        onclick="this.setAttribute('type', 'date');"
        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      />
      <label for="date" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Date</label>
    </div>
  </div>
  <form class="mx-auto">
    <label for="message" class="block mb-2 text-l font-medium text-gray-900 dark:text-white"
      >Description</label
    >
    <textarea
      id="message"
      v-model="$store.getters.products[0].Description"
      rows="8"
      class="mb-8 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Description..."
    ></textarea>
  </form>
</template>

<script>
</script>
