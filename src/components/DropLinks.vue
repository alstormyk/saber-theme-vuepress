<template>  
  <nav>
    <div class="drop-links" >
      <div class="drop-item" v-if="$themeConfig.nav">
        <div v-for="(item, index) in $themeConfig.nav" :key="index">
          <saber-link :to="item.link">{{ item.text }}</saber-link>
        </div>
        <RepoLink />
      </div>
      <TocBot />
    </div>
  </nav>
</template>

<script>
import RepoLink from '../components/RepoLink.vue'
import TocBot from '../components/TocBot.vue'

export default {
  components: {
    RepoLink,
    TocBot
  }
}
</script>

<style>
.drop-link .repo-link {
  margin-left: 0;
}
.drop-links {
  display: block;
  line-height: 0;
  color: #3c4043;
  padding: 0.6rem 1.5rem 0.6rem 1.5rem;
  margin-bottom: 0.4rem;
  border-radius: 0 50px 50px 0
}
.drop-links a {
  line-height: 1.4rem;
  color: inherit;
}
.drop-links a:hover,
.drop-links a.router-link-active {
  color: var(--accentColor);
}
.drop-links .drop-item {
  position: relative;
  display: inline-block;
  margin-left: 1.5rem;
  line-height: 2rem;
}
.drop-links .drop-item:first-child {
  margin-left: 0;
}
</style>