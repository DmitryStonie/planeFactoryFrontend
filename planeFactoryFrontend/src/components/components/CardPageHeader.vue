<template>
    <header
      class="flex shadow-md py-4 px-4 sm:px-16 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50"
    >
      <div class="flex flex-wrap items-center justify-between gap-5 w-full">
        <button
            class="px-6 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
            @click="$router.go(-1)"
          >
            Back
          </button>
          <a><img src="../../assets/chkalov.png" alt="logo" class="w-44 flex justify-center items-center" /> </a>
      </div>
    </header>
  </template>
  
  <script>
</script>
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
  