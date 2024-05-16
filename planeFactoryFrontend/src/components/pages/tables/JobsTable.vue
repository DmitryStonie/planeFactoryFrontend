<template>
    <div class="flex items-top justify-center">
    <div class="overflow-x-auto">
      <table class="table-aut bg-white shadow-md rounded-xl">
        <thead>
          <tr class="bg-blue-gray-100 text-gray-700">
            <th class="py-3 px-4 text-left">Id</th>
            <th class="py-3 px-4 text-left min-w-full">Brigade</th>
            <th class="py-3 px-4 text-left">Status</th>
            <th class="py-3 px-3 text-left">Order</th>
          </tr>
        </thead>
        <tbody class="text-blue-gray-900">
          <tr
            v-for="item in $store.getters.jobs"
            :key="item.ID"
            class="border-b border-blue-gray-200"
          >
            <td class="py-3 px-4">{{ item.ID }}</td>
            <td class="py-3 px-4">{{ getBrigade(item.Brigade) }}</td>
            <td class="py-3 px-4">{{ item.Status }}</td>
            <td class="py-3 px-4">{{ item.Order }}</td>
            <td class="py-3 px-4">
              <router-link :to="'/jobs/' + item.ID">Edit</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      getBrigade(id) {
        const found = this.$store.getters.brigades.find((element) => element.ID == id)
        if (found) {
          return found.Name
        }
        return ''
      },
    }
  }
</script>