<template>  
     <div class="repo-link">
       <div v-if="$themeConfig.github">
         <a :href="`https://www.github.com/{$themeConfig.github}`" :title="$themeConfig.github">
         Github
         <OutboundLink />
         </a>
         </div>
          <div v-if="$themeConfig.gitlab">
         <a :href="`https://www.gitlab.com/{$themeConfig.gitlab}`" :title="$themeConfig.gitlab">
         GitLab
         <OutboundLink />
         </a>
         </div>
          <div v-if="$themeConfig.bitbucket">
         <a :href="`https://www.bitbucket.com/{$themeConfig.bitbucket}`" :title="$themeConfig.bitbucket">
         BitBucket
         <OutboundLink />
         </a>
         </div>
     </div>
</template>

<script>
import OutboundLink from '../components/OutboundLink.vue';
export default {
  components: {
    OutboundLink: OutboundLink
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
.repo-link a {
  line-height: 1.4rem;
}
.repo-link a color inherit:hover,
.repo-link a color inherit.router-link-active {
  color: var(--accentColor);
}
</style>