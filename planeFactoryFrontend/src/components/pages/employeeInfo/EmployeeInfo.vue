<template>
  <div class="relative z-0 w-full mb-4 mt-10">
    <input
      type="text"
      v-model="$store.getters.employees[0].Name"
      name="name"
      placeholder=" "
      required
      class="text-2xl pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
    />
    <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Name</label>
  </div>
  <p class="text-xl mb-6">Id: {{ $store.getters.employees[0].ID }}</p>
  <div class="flex flex-row space-x-4">
    <div class="relative z-0 w-full mb-5">
      <input
        type="date"
        v-model="$store.getters.employees[0].Birthdate"
        name="date"
        placeholder=" "
        onclick="this.setAttribute('type', 'date');"
        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      />
      <label for="date" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
        >Date of birth</label
      >
    </div>
  </div>
  <div class="flex flex-row space-x-4">
    <div class="relative z-0 w-full mb-5">
      <input
        type="date"
        v-model="$store.getters.employees[0].WorkExperience"
        name="date"
        placeholder=" "
        onclick="this.setAttribute('type', 'date');"
        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      />
      <label for="date" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
        >Work experience</label
      >
    </div>
  </div>
  <div class="relative z-0 w-full mb-6">
    <input
      type="number"
      v-model.number="$store.getters.employees[0].Salary"
      name="name"
      placeholder=" "
      required
      class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
    />
    <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Salary</label>
  </div>
  
</template>

<script></script>
