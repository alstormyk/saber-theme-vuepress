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
  top: 0;
  left: 0;
  bottom: 0;
  padding-top: calc(var(--navbarHeight)* 2.1);
  box-sizing: border-box;
  border-right: 1px solid var(--borderColor);
  overflow-y: auto;
}
@media (max-width: 600px) {
  .sidebar {
      font-size: 13px;
      width: var(--mobileSmallSidebarWidth);
  }
}
@media (min-width: 601px) and (max-width: 719px) {
  .sidebar {
      width: var(--mobileSidebarWidth);
  }
}
@media (max-width: 419px) {
  .sidebar {
    display: none;
  }
}
</style>

