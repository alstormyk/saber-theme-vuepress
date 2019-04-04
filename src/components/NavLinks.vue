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
    RepoLink: RepoLink
  }
}
</script>

<style>

.nav-links {
  display: inline-block;
}
.nav-links a {
  line-height: 1.4rem;
  color: inherit;
}
.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--accentColor);
}
.nav-links .nav-item {
  position: relative;
  display: inline-block;
  margin-left: 1.5rem;
  line-height: 2rem;
}
.nav-links .nav-item:first-child {
  margin-left: 0;
}
@media (max-width: var(--MQMobile)) {
  .nav-links .nav-item,
  .nav-links .repo-link {
    margin-left: 0;
  }
}
@media (min-width: var(--MQMobile)) {
  .nav-links a:hover,
  .nav-links a.router-link-active {
    color: var(--textColor);
  }
  .nav-item > a:not(.external):hover,
  .nav-item > a:not(.external).router-link-active {
    margin-bottom: -2px;
    border-bottom: 2px solid color(var(--accentColor) tint(8%));
  }
}
</style>