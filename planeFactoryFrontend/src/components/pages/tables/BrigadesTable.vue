<template>
    <div class="flex items-top justify-center">
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
            <td class="py-3 px-4">{{ getBoss(item.Foreman) }}</td>
            <td class="py-3 px-4">{{ getWorkshopName(item.Workshop) }}</td>
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
    methods: {
      getBoss(id) {
        const found = this.$store.getters.foremen.find((element) => element.ID == id)
        if (found) {
          return found.Name
        }
        return ''
      },
      getWorkshopName(id) {
        const found = this.$store.getters.workshops.find((element) => element.ID == id)
        if (found) {
          return found.Name
        }
        return ''
      }
    }
  }
</script>