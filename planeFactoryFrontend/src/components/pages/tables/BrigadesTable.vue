<template>
    <div class="flex min-h-screen items-top justify-center">
    <div class="overflow-x-auto">
      <table class="table-aut bg-white shadow-md rounded-xl">
        <thead>
          <tr class="bg-blue-gray-100 text-gray-700">
            <th class="py-3 px-4 text-left">Id</th>
            <th class="py-3 px-4 text-left min-w-full">Foreman</th>
            <th class="py-3 px-4 text-left">Workshop</th>
            <th class="py-3 px-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody class="text-blue-gray-900">
          <tr
            v-for="item in $store.getters.brigades"
            :key="item.ID"
            class="border-b border-blue-gray-200"
          >
            <td class="py-3 px-4">{{ item.ID }}</td>
            <td class="py-3 px-4">{{ item.Foreman }}</td>
            <td class="py-3 px-4">{{ item.Workshop }}</td>
            <td class="py-3 px-4">
              <router-link :to="'/brigades/' + item.ID">Edit</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    this.$store.dispatch('getBrigades')
  }
}
</script>