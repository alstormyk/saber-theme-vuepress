<template>  
  <div class="layout">
    <Header/>
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
        </div>
      </div>
      <div class="pagination" v-if="page.pagination && (page.pagination.hasNext || page.pagination.hasPrev)">
        <router-link
          class="prev-link"
          :to="page.pagination.prevLink"
          v-if="page.pagination.hasPrev"
        >← Previous
        </router-link>
        <router-link
          class="next-link"
          :to="page.pagination.nextLink"
          v-if="page.pagination.hasNext"
        >Next →
        </router-link>
      </div>
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
    const pageTitle = this.page.attributes.title
    return {
      title: pageTitle ?
        `${pageTitle} - ${this.$siteConfig.title}` :
        this.$siteConfig.title
    }
  }
}
</script>
