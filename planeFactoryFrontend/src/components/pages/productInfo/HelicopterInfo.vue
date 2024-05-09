<template>
                  <div class="relative z-0 w-full mb-6">
    <input
    v-model.number="$store.getters.helicopters[0].Propellers"
      type="number"
      name="name"
      placeholder=" "
      required
      class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
    />
    <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
      >Propellers</label
    >
  </div>
</template>

<script>

</script>