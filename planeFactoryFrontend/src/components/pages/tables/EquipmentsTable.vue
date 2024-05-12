<template>
    <div class="flex items-top justify-center">
      <div class="overflow-x-auto">
        <table class="table-aut bg-white shadow-md rounded-xl">
          <thead>
            <tr class="bg-blue-gray-100 text-gray-700">
              <th class="py-3 px-4 text-left">Id</th>
              <th class="py-3 px-4 text-left">Name</th>
              <th class="py-3 px-4 text-left">Lab</th>
              <th class="py-3 px-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody class="text-blue-gray-900">
            <tr
              v-for="item in $store.getters.labEquipment"
              :key="item.ID"
              class="border-b border-blue-gray-200"
            >
              <td class="py-3 px-4">{{ item.ID }}</td>
              <td class="py-3 px-4">{{ item.Name }}</td>
              <td class="py-3 px-4">{{ getLabName(item.Lab) }}</td>
              <td class="py-3 px-4">
                <router-link :to="'/equipment/' + item.ID">Edit</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default{
    methods: {
    getLabName(id) {
        const found = this.$store.getters.labs.find((element) => element.ID == id)
        if (found) {
          return found.Name
        }
        return id
      }
  }
  }
  </script>
  