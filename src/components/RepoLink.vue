<template>
  <div class="repo-link" v-if="$themeConfig.repo">
    <div class="repo" v-for="repo in $themeConfig.repo" :key="repo" >
      <a :href="`https://www.${repo.site}.com/${repo.name}`">
        {{ repo.site }}         
        <OutboundLink />
      </a>
    </div>
  </div>
</template>

<script>
import OutboundLink from '../components/OutboundLink.vue';
export default {
  components: {
    OutboundLink
  }
}
</script>

<style>
@custom-media --MaxQMobile (width < 719px);

@import '../styles/config.css';

.repo-link {
  position: relative;
  display: inline-block;
  margin-left: 1.5rem;
  line-height: 2rem;
  margin-left: 1.5rem;
}
.repo-link a {
  line-height: 1.4rem;
}
.repo-link a color inherit:hover,
.repo-link a color inherit.router-link-active {
  color: var(--accentColor);
}
@media (--MaxQMobile) {
  .repo-link {
    margin-left: 0;
  }
}
</style>