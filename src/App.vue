<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
</script>

<template>
  <div class="app-container">
    <SvgIcon :name="'phone'" :iconStyle="{ width: '24px', height: '24px' }" />
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss"></style>
