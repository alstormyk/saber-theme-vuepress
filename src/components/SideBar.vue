<template>
  <div class="sidebar">
      <TocBot />
  </div>
</template>

<script>
import TocBot from '../components/TocBot.vue'

export default {
  components: {
    TocBot
  }
}
</script>
<style>
.sidebar {
  font-size: 15px;
  background-color: #fff;
  width: var(--sidebarWidth);
  position: fixed;
  margin: 0;
  top: calc(var(--navbarHeight)* 2.1);
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  border-right: 1px solid var(--borderColor);
  overflow-y: auto;
}
@media (max-width: 719px) {
  .sidebar {
    display: none;
  }
}
</style>

