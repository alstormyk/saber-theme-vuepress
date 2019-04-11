# saber-theme-vuepress

[![npm](https://badgen.net/npm/v/saber-theme-vuepress)](https://npm.im/saber-theme-vuepress) 

> A Saber Port of the Default Vuepress Theme.

## Install

```bash
yarn add saber-theme-vuepress
```

In your `saber-config.yml`:

```yml
theme: vuepress
```

This theme is better working with following plugins:

- `saber-plugin-query-posts`: Inject `posts` to homepage's `page` prop, generate tag pages

```bash
yarn add saber-plugin-query-posts saber-plugin-generate-feed
```

```yml
plugins:
  - resolve: saber-plugin-query-posts
```

## Layouts

- `home`: Setup just like the Vuepress home page. All fields are populated from saber-config.yml.
- `post`: For individual blog posts.
- `blog`: A page to show all your posts.
- `page`: For normal pages with a sidebar.
- `default`: For any other pages without a sidebar.

## Site Config

Configure site title, description etc in your `saber-config.yml`:

```yml
siteConfig:
  title: My Site
  description: About this website.
  author: My Name
  email: my@email.com
```

## Theme Config

### Navbar

Configure `nav` to show a set of links in header and optional repository link:

```yml
themeConfig:
  nav:
    - text: Home
      link: /
    - text: About
      link: /about.html
repo:
    - site: github
      name: your name
```

### Home Page

Configure the home page:

```yml
themeConfig:
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

## License

MIT.