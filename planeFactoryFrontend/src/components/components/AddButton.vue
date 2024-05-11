<template>
  <div class="flex max-lg:ml-auto space-x-3">
    <router-link
      class="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
      v-if="$store.getters.addP"
      :to="$store.getters.addLink"
    >
      {{ $store.getters.addText }}
    </router-link>
  </div>
</template>
<script></script>
