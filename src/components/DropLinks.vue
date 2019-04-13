<template>  
  <nav>
    <transition name="dropdown">
    <div class="drop-links" v-if="show" @click="show = false">
      <div class="drop-item" v-if="$themeConfig.nav">
        <div v-for="(item, index) in $themeConfig.nav" :key="index">
          <saber-link :to="item.link" >{{ item.text }}</saber-link>
        </div>
        <RepoLink />
      </div>
    </div>
    </transition>
  </nav>
</template>

<script>
import RepoLink from '../components/RepoLink.vue'

export default {
  components: {
    RepoLink
  },
    data() {
    return {
      show: true
    }
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
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 1s;
}
.dropdown-enter,
.dropdown-leave-to {
   opacity: 0;
  -webkit-transform: translateY(30px);
  transform: translateY(30px);
}
</style>