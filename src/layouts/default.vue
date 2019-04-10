<template>
  <div class="layout">
    <Header />
    <SideBar />
    <div class="content">
      <main class="main">
        <slot name="default" />
        <div class="page-content">
          <slot name="default" />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import SideBar from '../components/SideBar.vue'

export default {
  components: {
    Header,
    SideBar
  },
  props: ['page'],
  head() {
    const {
      title
    } = this.page.attributes
    return {
      title: title ? `${title} - ${this.$siteConfig.title}` : this.$siteConfig.title
    }
  }
}
</script>
