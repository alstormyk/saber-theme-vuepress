=<template>
  <div class="layout">
    <Header />
    <div class="home">
      <div class="hero">
        <img v-if="$themeConfig.heroImage" :src="$themeConfig.heroImage" alt="hero" />
        <h1> {{ $themeConfig.heroTitle}} </h1>
        <p class="description"> {{ $themeConfig.heroDescription }} </p>
        <p class="action" v-if="$themeConfig.actionText && $themeConfig.actionLink">
          <saber-link class="action-button" :to="$themeConfig.actionLink"> {{ $themeConfig.actionText }} </saber-link>
        </p>
      </div>
      <div class="features" v-if="$themeConfig.features">
        <div class="feature" v-for="(feature, item) in $themeConfig.features" :key="item">
          <h2> {{ feature.title }} </h2>
          <p> {{ feature.details }} </p>
        </div>
        <div class="footer" v-if="$themeConfig.footer">
          {{ $themeConfig.footer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  components: {
    Header
  },
  props: ['page'],
  head() {
    const pageTitle = this.page.attributes.title
    return {
      title: pageTitle ?
        `${pageTitle} - ${this.$siteConfig.title}` : this.$siteConfig.title
    }
  }
}
</script>

<style scoped>
.home {
  padding: var(--navbarHeight) 2rem 0;
  max-width: 960px;
  margin: 0px auto;
}
.hero {
  text-align: center;
}
img {
  max-height: 280px;
  display: block;
  margin: 3rem auto 1.5rem;
}
h1 {
  font-size: 3rem;
  background: none;
  color: var(--textColorT10);
}
h1:hover {
  background: none;
}
h1,
.description,
.action {
  margin: 1.8rem auto;
}
.description {
  max-width: 35rem;
  font-size: 1.6rem;
  line-height: 1.3;
  color: var(--textColorT40);
}
.action-button {
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background-color: var(--accentColor);
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid var(--accentColorS10);
}
.action-button:hover {
  background-color: var(--accentColorT10);
}
.features {
  border-top: 1px solid var(--borderColor);
  padding: 1.2rem 0;
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: stretch;
  justify-content: space-between;
}
.feature {
  flex-grow: 1;
  flex-basis: 30%;
  max-width: 30%;
}
h2 {
  font-size: 1.4rem;
  font-weight: 500;
  border-bottom: none;
  padding-bottom: 0;
  color: var(--textColorT10);
}
h2:hover {
  background: none;
}
p {
  color: var(--textColorT25);
}
.footer {
  padding: 2.5rem;
  border-top: 1px solid var(--borderColor);
  text-align: center;
  color: var(--textColorT25);
}
@media (max-width: 719px) {
  .home .features {
    flex-direction: column;
  }
  .home .feature {
    max-width: 100%;
    padding: 0 2.5rem;
  }
}
@media (max-width: 419px) {
  .home {
    padding-left: 1.5rem;
     padding-right: 1.5rem;
  }
  .home .hero img {
    max-height: 210px;
    margin: 2rem auto 1.2rem;
  }
  .home .hero h1 {
    font-size: 2rem;
  }
  .home .hero h1,
  .home .hero .description,
  .home .hero .action {
    margin: 1.2rem auto;
  }
  .home .hero .description {
    font-size: 1.2rem;
  }
  .home .hero .action-button {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
  .home .feature h2 {
    font-size: 1.25rem;
  }
}
</style>
