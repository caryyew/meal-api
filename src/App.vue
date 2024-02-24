<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import Meals from '@/views/Meals.vue'
import Home from '@/views/Home.vue'
export default {
  components: {
    Meals,
    Home,
  }
}
</script>
