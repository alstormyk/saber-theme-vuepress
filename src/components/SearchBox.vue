<template>  
  <div class="search-box">
    <input
      @input="query = $event.target.value"
      aria-label="Search"
      :value="query"
      :class="{ 'focused': focused }"
      autocomplete="off"
      spellcheck="false"
      @focus="focused = true"
      @blur="focused = false"
      @keyup.enter="go(focusIndex)"
      @keyup.up="onUp"
      @keyup.down="onDown"
    >
    <ul
      class="suggestions"
      v-if="showSuggestions"
      :class="{ 'align-right': alignRight }"
      @mouseleave="unfocus"
    >
      <li
        class="suggestion"
        v-for="(s, i) in suggestions"
        :key="(s, i)"
        :class="{ focused: i === focusIndex }"
        @mousedown="go(i)"
        @mouseenter="focus(i)"
      >
        <a :href="s.path" @click.prevent>
          <span class="page-title">{{ s.title || s.path }}</span>
          <span v-if="s.header" class="header">&gt; {{ s.header.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function data() {
    return {
      query: '',
      focused: false,
      focusIndex: 0
    };
  },
  computed: {
    showSuggestions: function showSuggestions() {
      return this.focused && this.suggestions && this.suggestions.length;
    },
    suggestions: function suggestions() {
      var query = this.query.trim().toLowerCase();

      if (!query) {
        return;
      }

      var _this$$site = this.$site,
          pages = _this$$site.pages,
          themeConfig = _this$$site.themeConfig;
      var max = themeConfig.searchMaxSuggestions || 5;
      var localePath = this.$localePath;

      var matches = function matches(item) {
        return item.title && item.title.toLowerCase().indexOf(query) > -1;
      };

      var res = [];

      for (var i = 0; i < pages.length; i++) {
        if (res.length >= max) break;
        var p = pages[i]; // filter out results that do not match current locale

        if (this.getPageLocalePath(p) !== localePath) {
          continue;
        }

        if (matches(p)) {
          res.push(p);
        } else if (p.headers) {
          for (var j = 0; j < p.headers.length; j++) {
            if (res.length >= max) break;
            var h = p.headers[j];

            if (matches(h)) {
              res.push(Object.assign({}, p, {
                path: p.path + '#' + h.slug,
                header: h
              }));
            }
          }
        }
      }

      return res;
    },
    // make suggestions align right when there are not enough items
    alignRight: function alignRight() {
      var navCount = (this.$site.themeConfig.nav || []).length;
      var repo = this.$site.repo ? 1 : 0;
      return navCount + repo <= 2;
    }
  },
  methods: {
    getPageLocalePath: function getPageLocalePath(page) {
      for (var localePath in this.$site.locales || {}) {
        if (localePath !== '/' && page.path.indexOf(localePath) === 0) {
          return localePath;
        }
      }

      return '/';
    },
    onUp: function onUp() {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--;
        } else {
          this.focusIndex = this.suggestions.length - 1;
        }
      }
    },
    onDown: function onDown() {
      if (this.showSuggestions) {
        if (this.focusIndex < this.suggestions.length - 1) {
          this.focusIndex++;
        } else {
          this.focusIndex = 0;
        }
      }
    },
    go: function go(i) {
      if (!this.showSuggestions) {
        return;
      }

      this.$router.push(this.suggestions[i].path);
      this.query = '';
      this.focusIndex = 0;
    },
    focus: function focus(i) {
      this.focusIndex = i;
    },
    unfocus: function unfocus() {
      this.focusIndex = -1;
    }
  }
};
</script>

<style>
.search-box {
  display: inline-block;
  position: relative;
  margin-right: 1rem;
}
.search-box input {
  cursor: text;
  width: 10rem;
  color: var(--textColorT25);
  display: inline-block;
  border: 1px solid var(--borderColorS10);
  border-radius: 2rem;
  font-size: 0.9rem;
  line-height: 2rem;
  padding: 0 0.5rem 0 2rem;
  outline: none;
  transition: all 0.2s ease;
  background: #fff url("./search.svg") 0.6rem 0.5rem no-repeat;
  background-size: 1rem;
}
.search-box input:focus {
  cursor: auto;
  border-color: var(--accentColor);
}
.search-box .suggestions {
  background: #fff;
  width: 20rem;
  position: absolute;
  top: 1.5rem;
  border: 1px solid var(--borderColorS10);
  border-radius: 6px;
  padding: 0.4rem;
  list-style-type: none;
}
.search-box .suggestions.align-right {
  right: 0;
}
.search-box .suggestion {
  line-height: 1.4;
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
}
.search-box .suggestion a {
  white-space: normal;
  color: var(--textColorT35);
}
.search-box .suggestion a .page-title {
  font-weight: 600;
}
.search-box .suggestion a .header {
  font-size: 0.9em;
  margin-left: 0.25em;
}
.search-box .suggestion.focused {
  background-color: #f3f4f5;
}
.search-box .suggestion.focused a {
  color: var(--accentColor);
}
@media (max-width: var(--MQNarrow)) {
  .search-box input {
    cursor: pointer;
    width: 0;
    border-color: transparent;
    position: relative;
  }
  .search-box input:focus {
    cursor: text;
    left: 0;
    width: 10rem;
  }
}
@media (max-width: var(--MQNarrow)) and (min-width: var(--MQMobile)) {
  .search-box .suggestions {
    left: 0;
  }
}
@media (max-width: var(--MQMobile)) {
  .search-box {
    margin-right: 0;
  }
  .search-box input {
    left: 1rem;
  }
  .search-box .suggestions {
    right: 0;
  }
}
@media (max-width: var(--MQNarrow)) {
  .search-box .suggestions {
    width: calc(100vw - 4rem);
  }
  .search-box input:focus {
    width: 8rem;
  }
}
</style>