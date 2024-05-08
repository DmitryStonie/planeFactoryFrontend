<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white shadow-md rounded-xl">
        <thead>
          <tr class="bg-blue-gray-100 text-gray-700">
            <th class="py-3 px-4 text-left">Id</th>
            <th class="py-3 px-4 text-left">Company name</th>
            <th class="py-3 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody v-for="item in items" :key="item.ID" class="text-blue-gray-900">
          <tr class="border-b border-blue-gray-200">
            <td class="py-3 px-4">{{ item.ID }}</td>
            <td class="py-3 px-4">{{ item.Name }}</td>
            <td class="py-3 px-4">
              <router-link :to="'/' + item.ID">Edit</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'HomePage',
  methods: {
    async loadData() {
      let result = await axios.get('http://localhost:8082/companies')
      this.items = result.data
    }
  },
  data() {
    return {
      items: []
    }
  },
  async mounted() {
    this.loadData()
  }
}
</script>
<style>
td {
  width: 160px;
  height: 40px;
}
</style>
