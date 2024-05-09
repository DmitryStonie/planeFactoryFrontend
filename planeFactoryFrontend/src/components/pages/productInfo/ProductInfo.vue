<template>
  <h1 class="text-2xl font-bold mb-8">aaa{{ $store.getters.products }}bbb</h1>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
      ...mapState([
            'products'
        ])
    }
}
</script>
