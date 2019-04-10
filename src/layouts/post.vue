<template>
  <div class="layout">
    <Header />
    <SideBar />
    <div class="page">
      <div class="content">
        <div class="js-toc-content toc">
          <article class="post">
            <header class="post-header">
              <h1 class="post-title" itemprop="name headline"><span class="toc-title">{{ page.attributes.title }}</span></h1>
              <p class="post-meta">
                <time
                 class="post-published"
                 :datetime="page.attributes.createdAt"
                 itemprop="datePublished"
                 >{{ formatDate(page.attributes.createdAt) }}
                 </time>
              </p>
            </header>
            <div class="post-content e-content" itemprop="articleBody">
              <slot name="default"/>
            </div>
            <a class="u-url" :href="page.attributes.permalink" hidden></a>
           </article>
        </div>
        <ul class="pagination">
          <li class="prev-link" v-if="page.prevPost">
            <router-link :to="page.prevPost.attributes.permalink">
              ← Previous: {{ page.prevPost.attributes.title }}
            </router-link>
          </li>
          <li class="next-link" v-if="page.nextPost">
            <router-link :to="page.nextPost.attributes.permalink">
              Next: {{ page.nextPost.attributes.title }} →
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import formatDate from '../util/formatDate'
import Header from '../components/Header.vue'
import SideBar from '../components/SideBar.vue'

export default {
  components: {
    Header,
    SideBar
  },
  props: ['page'],
  methods: {
    formatDate
  },
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
