<template>
  <h2 class="text-xl mb-2">Worker category: Turner</h2>
  <div class="flex flex-row space-x-4">
    <div class="relative z-0 w-full mb-5">
      <input
        type="date"
        v-model="$store.getters.turners[0].StartOfWork"
        name="date"
        placeholder=" "
        onclick="this.setAttribute('type', 'date');"
        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      />
      <label for="date" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
        >Start of work</label
      >
    </div>
  </div>
  <div class="flex flex-row space-x-4">
    <div class="relative z-0 w-full mb-5">
      <input
        type="date"
        v-model="$store.getters.turners[0].EndOfWork"
        name="date"
        placeholder=" "
        onclick="this.setAttribute('type', 'date');"
        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      />
      <label for="date" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
        >End of work</label
      >
    </div>
  </div>
  <div class="relative z-0 w-full mb-6">
    <input
      type="number"
      v-model.number="$store.getters.turners[0].Category"
      name="name"
      placeholder=" "
      required
      class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
    />
    <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Category</label>
  </div>
</template>

<script></script>
