<template>
   <div class="js-toc">
   </div>
</template>

<script>
import tocbot from 'tocbot'

const TOCBOT_OPTIONS = {
    tocSelector: '.js-toc',
    contentSelector: '.js-toc-content',
    headingSelector: 'page-title, h1, h2, h3, h4, h5, h6',
    includeHtml: true
}

export default {
  mounted () {
     if (tocbot) {
        tocbot.init(TOCBOT_OPTIONS)
     }
  },
  beforeDestroy () {
      if (tocbot) {
         tocbot.destroy()
      }
  },
  render () {
     return null
  }
}
</script>
<style>
.js-toc {
   padding: 1.5rem 0 0 2rem;
   margin: 0;   
   color: var(--textColor);
}
a.toc-link {
   font-weight: 400;
   display: inline-block;
   color: inherit;
   border-left: .25rem solid transparent;
   padding-left: 1.25rem;
   line-height: 1.4;
   width: 100%;
   box-sizing: border-box;
}
a.toc-link:hover {
color: var(--accentColor);;
border-left-color: var(--accentColor);
}
a.toc-link:active {
   font-weight: 600;
  color: var(--accentColor);;
  border-left-color: var(--accentColor);
}
ol.toc-list {
   list-style-type: none;
}
.js-toc ol.toc-list>li:first-child {
   margin-bottom: .5rem;
}
.toc-title {
   color: inherit;
   transition: color .15s ease;
   cursor: pointer;
   font-size: 1.1em;
   font-weight: 700;
}
</style>