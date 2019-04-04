<template>  
  <header class="navbar">
    <saber-link to="/">
      <img class="logo" v-if ="$siteConfig.logo" 
      :src="$siteConfig.logo" 
      :alt="$siteConfig.title">
      <span ref="siteName" class="site-name" v-if ="$siteConfig.title" :class="{ 'can-hide':$siteConfig.logo }">
        {{ $siteConfig.title }}
      </span>
    </saber-link>
    <div class="links" :style="{'max-width':linksWrapMaxWidth +'px'}">
      <SearchBox />
      <NavLinks />
    </div>
  </header>
</template>

<script>
import SearchBox from '../components/SearchBox.vue'
import NavLinks from '../components/NavLinks.vue'

export default {
    components: {
      SearchBox,
      NavLinks
  },

  data: function data() {
    return {
      linksWrapMaxWidth: null
    }
  },
  mounted: function mounted() {
    var _this = this

    var MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl

    var NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'));

    var handleLinksWrapWidth = function handleLinksWrapWidth() {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        _this.linksWrapMaxWidth = null;
      } else {
        _this.linksWrapMaxWidth = _this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING - (_this.$refs.siteName && _this.$refs.siteName.offsetWidth || 0);
      }
    }

    handleLinksWrapWidth();
    window.addEventListener('resize', handleLinksWrapWidth, false);
  }
}

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  var win = el.ownerDocument.defaultView; // null means not to return pseudo styles

  return win.getComputedStyle(el, null)[property]
}
</script>

<style scoped>
.navbar {
  padding: var(--navbar-vertical-padding) var(--navbar-horizontal-padding);
  line-height: calc(var(--navbarHeight) - 1.4rem );
  position: relative;
}

.navbar a,
.navbar span,
.navbar img {
  display: inline-block;
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

.links {
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

.search-box {
  flex: 0 0 auto;
  vertical-align: top;
}

.nav-links {
  flex: 1;
}

@media (max-width: var(--MQMobile)) {
  .navbar {
    padding-left: 4rem;
  }
  .links {
    padding-left: 1.5rem;
  }
}
</style>