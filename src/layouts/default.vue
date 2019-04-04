<template>  
  <div class="layout">
    <div class="container content">
      <main>
      <div class="page-title">{{ page.attributes.title }}</div>
      <div class="page-content">
      <slot name="default" />
      </div>
    </main>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: ['page'],
  head: function head() {
    return {
      title: this.page.attributes.title
    }
  }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.css"></style>