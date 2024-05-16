<template>
  <div class="relative z-0 w-full mb-4 mt-10">
    <textarea
      type="text"
      v-model="$store.getters.companies[0].Name"
      name="name"
      rows="2"
      placeholder=" "
      required
      class="text-2xl pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
    >
    </textarea>
    <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Name</label>
  </div>
  
</template>

<script>
</script>
