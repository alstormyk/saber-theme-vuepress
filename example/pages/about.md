---
title: About
layout: page
---
# saber-theme-vuepress

[![npm](https://badgen.net/npm/v/saber-theme-vuepress)](https://npm.im/saber-theme-vuepress) 

> A Saber port of the default Vuepress theme.

## Install

```bash
yarn add saber-theme-vuepress
```

In your `saber-config.yml`:

```yaml
theme: vuepress
```

## Saber and Markdown Plugins included

### Saber

- `saber-plugin-query-posts`: Inject `posts` to homepage's `page` prop, generate tag pages

### Markdown

- `markdown-it-div`
With this plugin you can create block divs like:
```
::: #warning
*here be dragons*
:::
```
This block will be translated to HTML as:
```html
<div id="warning">
<em>here be dragons</em>
</div>
```
Vuepress styling is set up for tip, warning, and danger divs.

::: #tip 
*tip*
:::

::: #warning
*warning*
:::

::: #danger
*danger*
:::

- `markdown-it-emoji`

## Table of Contents
Table of contents is provided by [![TocBot](https://tscanlin.github.io/tocbot)](https://tscanlin.github.io/tocbot). This works with markdown and vue. Heading id's are automatically done in markdown. Heading id's need to be added when using vue.

## Layouts

- `home`: Setup just like the Vuepress home page. All fields are populated from saber-config.yml.
- `post`: For individual blog posts.
- `blog`: A page to show all your posts.
- `page`: For normal pages with a sidebar.
- `default`: For any other pages without a sidebar.

## Site Config

Configure site title, description etc in your `saber-config.yml`:

```yaml
siteConfig:
  url: https://saber-theme-vuepress.netlify.com/
  author: Author of This Site
  email: author@your-domain.com
  title: Saber-Vuepress-Theme
  logo: logo.jpg
  description: Write an awesome description for your new site here. You can edit this line in saber-config.yml. It will appear in your document head meta (for Google search results) site description.
```

## Theme Config

### Navbar

Configure `nav` to show a set of links in header:

```yaml
themeConfig:
  nav: 
    - text: Home
      link: /
    - text: About
      link: /about.html
    - text: Page
      link: /page.html
    - text: Blog
      link: /blog.html
  repo:
    - site: github
      name: askcreative
  heroImage: logo.jpg
  heroTitle: Hello
  heroDescription: Welcome to saber-theme-vuepress
  actionText: Get Started →
  actionLink: /about.html
  features: 
    - title: Title One
      details: Details for title one.
    - title: Saber-Powered
      details: With Saber, static rendering with Vue.js is easier now than ever. 
    - title: Title Three
      details: Details for title three.
  footer: Footer info goes here.
```

## Search Box

There is a search box. Search function is not included. 

To show search box configure theme:

```yaml
themeConfig:
  search: true
```

## License

MIT.
