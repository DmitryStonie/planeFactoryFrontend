<template>
  <header
    class="flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50"
  >
    <div class="flex flex-wrap items-center justify-between gap-5 w-full">
      <a><img src="../../assets/chkalov.png" alt="logo" class="w-44" /> </a>

      <div
        class="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
      >
        <ul
          class="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50"
        >
          <li class="mb-6 hidden max-lg:block"></li>
          <li class="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
            <router-link to="/products" class="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">Products</router-link>
          </li>

          <li class="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
            <router-link to="/companies" class="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">Companies</router-link>
          </li>
          <li class="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
            <router-link to="/workshops" class="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">Workshops</router-link>
          </li>
          <li class="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
            <router-link to="/areas" class="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">Areas</router-link>
          </li>
          <li class="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
            <router-link to="/labs" class="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">Labs</router-link>
          </li>
          <li class="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
            <router-link to="/employees" class="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">Employees</router-link>
          </li>
          <li class="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
            <router-link to="/brigades" class="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">Brigades</router-link>
          </li>
          <li class="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
            <router-link to="/tests" class="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">Tests</router-link>
          </li>
        </ul>
      </div>

      <div class="flex max-lg:ml-auto space-x-3">
        <button
          class="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
          v-if="$store.getters.addP"
          :to="$store.getters.addLink"
        >
          {{ $store.getters.addText }}
        </button>
      </div>
    </div>
  </header>
</template>

<script></script>
<style>
.nav {
  background-color: #333;
  overflow: hidden;
}
.nav a {
  float: left;
  color: #f2f2f2f2;
  padding: 14px 14px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
}
.nav a:hover {
  background: #ddd;
  color: #333;
}
</style>
