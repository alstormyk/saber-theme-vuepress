<template>
  <header class="header">
    <saber-link to="/">
      <img class="logo" v-if ="$siteConfig.logo" 
      :src="$siteConfig.logo" 
      :alt="$siteConfig.title">
      <span ref="siteName" class="site-name" v-else-if ="$themeConfig.title">
        {{ $themeConfig.title }}
      </span>
      <span ref="siteName" class="site-name" v-else>
        {{ $siteConfig.title }}
      </span>
    </saber-link>
    <a href="#" class="nav-toggle">
      <transition name="slide-fade">
        <button class="toggle-button" v-if="show" key="on"
        @click="show = false">
          <svg viewBox="0 0 24 24" class="toggle-icon">
            <title>Close</title>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
        <button class="toggle-button" v-else key="off" @click="show = true">
          <svg viewBox="0 0 24 24" class="toggle-icon">
            <title>Navigation Menu</title>
            <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
          </svg>
        </button>
      </transition>
    </a>
    <nav class="top-navbar">
      <SearchBox />
      <NavLinks/>
    </nav>
    <transition name="dropdown">
      <div class="dropdown-menu" v-bind:class="{ active: show }" v-if="show">
        <DropLinks />
      </div>
    </transition>
  </header>
</template>

<script>
import SearchBox from '../components/SearchBox.vue'
import NavLinks from '../components/NavLinks.vue'
import DropLinks from '../components/DropLinks.vue'

export default {
  components: {
    SearchBox,
    NavLinks,
    DropLinks
  },
  data() {
    return {
      show: false
    }
  }
}
</script>

<style>
.header {
  padding: var(--navbar-vertical-padding) var(--navbar-horizontal-padding);
  line-height: calc(var(--navbarHeight) - 1.4rem );
  position: relative;
}
.logo {
  height: calc(var(--navbarHeight) - 1.4rem );
  min-width: calc(var(--navbarHeight) - 1.4rem );
  margin-right: 0.8rem;
  vertical-align: top;
}
.site-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--textColor);
  position: relative;
}
.top-navbar {
  padding-left: 1.5rem;
  box-sizing: border-box;
  background-color: #fff;
  white-space: nowrap;
  font-size: 0.9rem;
  position: absolute;
  right: var(--navbar-horizontal-padding);
  top: var(--navbar-vertical-padding);
  display: flex;
}
.nav-toggle .toggle-button {
  top: calc(var(--navbarHeight) + 5px);
  left: var(--navbar-horizontal-padding);
  position: absolute;
}
.nav-toggle .toggle-button:focus {
  outline: 0;
}
.toggle-icon {
  fill: var(--accentColor);
  width: 2rem;
  height: 2rem;
  display: inline-flex;
}
.toggle-button {
  cursor: pointer;
  padding: 0;
  display: inline-block;
  border: 1px solid transparent;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s;
}
.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}
.slide-fade-enter {
  -webkit-transform: translateX(31px);
  transform: translateX(31px);
}
.slide-fade-leave-active {
  -webkit-transform: translateX(-31px);
  transform: translateX(-31px);
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
.dropdown-menu {
  position: absolute;
  top: 100%;
  min-width: 280px;
  overflow-y: auto;
  padding: 2rem 2rem 2rem 0;
  margin-top: var(--navbarHeight);
  border-radius: 8px;
  background-color: white;
  border: 1px solid var(--borderColor);
  background-clip: padding-box;
}
.dropdown-menu-svg {
  padding-right: 16px;
}
.dropdown-menu-svg .header--icon {
  width: 1.40rem;
  height: 1.40rem;
}
@media screen and (max-width: 719px) {
  .nav-links {
    display: none;
  }
}
@media screen and (min-width: 719px) {
  .nav-toggle {
    display: none;
  }
}
</style>
