<template>
  <div class="layout">
    <Header />
    <div class="page-nosidebar">
      <div class="content">
        <div class="main" v-if="page.posts">
          <div class="index-content">
            <saber-link class="item" v-for="post in page.posts" :key="post.permalink"
            :to="post.attributes.permalink">
              <div class="card">
                <div class="item-title">
                  {{ post.attributes.title }}
                </div>
                <div class="item-time">
                  {{ formatDate(post.attributes.createdAt) }}
                </div>
                <div v-if="post.attributes.cover">
                  <div class="item-cover" :style="`background-image:url('${post.attributes.cover}')`">
                  </div>
                </div>
                <div class="item-excerpt" v-html="post.attributes.excerpt">
                  {{ post.attributes.excerpt }}
                </div>
              </div>
            </saber-link>
          </div>
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
import formatDate from '../util/formatDate'
import Header from '../components/Header.vue'

export default {
  components: {
    Header
  },
  props: ['page'],
  methods: {
    formatDate
  },

  head() {
    const pageTitle = this.page.attributes.title
      return {
        title: pageTitle ? `${pageTitle} - ${this.$siteConfig.title}` : this.$siteConfig.title,
          meta: [{
            name: 'description',
            content: this.$siteConfig.description
          }]
      }
  }
}
</script>
<style>
.card {
  padding: 1rem;
  border-color: var(--borderColor);
  border-style: solid;
  border-width: 2px;
  box-shadow: 10px 10px 15px var(--borderColor);
}
.card:hover {
  border-left-color: var(--accentColor);
  box-shadow: 10px 10px 5px var(--accentColor);
}
a.item {
  margin: .5rem;
  color: var(--textColor);
}
.item-title {
  font-size: 1.35rem;
  color: var(--textColor);
  padding-bottom: 0.3rem;
  border-bottom: 1px solid var(--borderColor);
}
.item-time {
  font-size: 0.9rem;
  color: var(--textColorT40);
  padding: 1rem;
}
.item-cover {
  min-height: 200px;
  max-height: 600px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
.item-excerpt {
  color: var(--textColorT10);
}
</style>