<template>
  <div class="repo-link" v-if="$themeConfig.repo">
    <div class="repo" v-for="(repo, index) in $themeConfig.repo" :key="index" >
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
@import '../styles/config.css';

.repo-link {
  position: relative;
  display: inline-block;
  margin-left: 1.5rem;
  line-height: 2rem;
  margin-left: 1.5rem;
}
.repo a {
  color: var(--textColor);
  line-height: 1.4rem;
}
.repo a:hover,
.repo a.router-link-active {
  color: var(--accentColor);
}
@media (max-width: 719px) {
  .repo-link {
    margin-left: 0;
  }
}
</style>