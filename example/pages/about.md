---
title: About
layout: page
---
# saber-theme-vuepress

[![npm](https://)](https:)

> A Saber Port of the Default Jekyll Theme: Minima

## Install

### This is a 3

#### And a 4

##### 5

###### whatever

```bash
yarn add saber-theme-minima
```

In your `saber-config.yml`:

```yml
theme: minima
```

::: tip
*here be dragons*
:::


This theme is better working with following plugins:

- `saber-plugin-query-posts`: Inject `posts` to homepage's `page` prop, generate tag pages
- `saber-plugin-generate-feed`: Generate JSON feed at `/feed.json`.

```bash
yarn add saber-plugin-query-posts saber-plugin-generate-feed
```

```yml
plugins:
  - resolve: saber-plugin-query-posts
  - resolve: saber-plugin-generate-feed
```

## Layouts

- `post`: For blog post pages.
- `page`: For normal pages.
- `default`: For any other pages like homepage and tag pages.

## Site Config

Configure site title, description etc in your `saber-config.yml`:

```yml
siteConfig:
  title: My Site
  description: About this website..
  author: My Name
  email: my@email.com
```

## Theme Config

### Navbar

Configure `nav` to show a set of links in header:

```yml
themeConfig:
  nav:
    - text: Home
      link: /
    - text: About
      link: /about.html
```

## License

MIT.
