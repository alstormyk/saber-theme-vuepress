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
/* responsive breakpoints */
@custom-media --MaxQMobile (width < 719px);
@custom-media --MinQMobile (width > 719px);

.sidebar {
  font-size: 15px;
  background-color: #fff;
  width: 20rem;
  position: fixed;
  z-index: 10;
  margin: 0;
  top: 3.6rem;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  border-right: 1px solid var(--borderColor);
  overflow-y: auto;
}
@media (--MaxQMobile) {
  .sidebar {
    display: none;
  }
}
</style>

