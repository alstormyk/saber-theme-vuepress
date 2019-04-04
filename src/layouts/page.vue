<template>  
  <div class="layout">
      <NavBar />
      <SideBar />
    <div class="page">
      <div class="content">
        <div class="js-toc-content toc">
        <main>
          <h1 class="page-title"><span class="toc-title">{{ page.attributes.title }}</span></h1>
          <div class="page-content">
            <slot name="default" />
          </div>
        </main>
        <div class="js-toc toc"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import SideBar from '../components/SideBar.vue'

export default {
    components: {
      NavBar,
      SideBar
  },
  props: ['page'],
  
  head() {
    const pageTitle = this.page.attributes.title
    return {
      title: pageTitle ?
        `${pageTitle} - ${this.$siteConfig.title}` :
        this.$siteConfig.title
    }
  }
}
</script>