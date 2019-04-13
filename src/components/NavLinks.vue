<template>  
  <nav class="nav-links">
    <div class="nav-item" v-if="$themeConfig.nav">
        <div class="nav-item" v-for="(item, index) in $themeConfig.nav" :key="index">
          <saber-link :to="item.link">{{ item.text }}</saber-link>
        </div>
    </div>
    <RepoLink />
  </nav>
</template>

<script>
import RepoLink from '../components/RepoLink.vue'

export default {
  components: {
    RepoLink
  }
}
</script>

<style scoped>
.nav-links {
  display: inline-block;
}
a,
a.router-link {
  line-height: 1.4rem;
  color: var(--textColor);
}
a:hover,
a.router-link-active {
  color: var(--accentColor);
}
.nav-links .nav-item {
  position: relative;
  display: inline-block;
  margin-left: 1.5rem;
  line-height: 2rem;
}
.nav-item .nav-item:first-child {
  margin-left: 0;
}
@media screen and (max-width: 719px) {
  .nav-links {
    display: none;
  }
}
</style>