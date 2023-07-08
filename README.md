# nuxt-blog

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/taka1156/nuxt-blog/main.yml?branch=master)
![test](https://github.com/taka1156/nuxt-blog/workflows/test/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/taka1156/nuxt-blog/badge.svg?branch=master)](https://coveralls.io/github/taka1156/nuxt-blog?branch=master)
![GitHub last commit](https://img.shields.io/github/last-commit/taka1156/nuxt-blog)

taka1156のブログサイトです(https://blog.taka1156.site)

Storybookはこちら(https://taka1156.github.io/nuxt-blog/)

## 使用しているもの
- Nuxt.js
- marked.js
- highlight.js
- Storybook
- normalize.css
- github-markdown-css

素材
- [SVG PORN](https://svgporn.com/)
- [Google Material Icon](https://material.io/resources/icons/?style=baseline)

## アトミックデザイン

アトミックデザインを試しに導入してみました。(以下一覧)


**Atoms**
- BaseBtn
- BaseImg
- BaseText
- BaseLink
- BaseNavIcon
- BaseHeading

**Molecules**
- ArticleBadge
- ArticleDate
- ArticlePagination
- IndexNav
- IndexList
- IndexListItem
- NavBar
- NavBarPc
- NavListItem
- NavListItemPc
- NavList
- NavListPc
- SnsIcon

**Organisms**
- ArticleCategory <a href="#1">※1</a>
- ArticleTag <a href="#1">※1</a>
- ArticleHeader
- ArticleListItem <a href="#2">※2</a>
- ArticleList
- ClassificationListItem <a href="#2">※2</a>
- ClassificationList
- ClassificationTitle
- ContributionBox
- IndexNavigation
- SnsIcons
- TheNavigation
- TheCopyright


<div id="1">※1</div>

`ArticleCategory` 、`ArticleTag`は汎用性が高いのですが<br>
`Molecules`の`ArticleBadge`を使っていること、ルーティング処理を内包していることより、`Organisms`にしています。


<div id="2">※2</div> 

`~ListItem `は汎用性が低い(=List系と強く結びついてる)ため<br>
`Atoms`要素しかない`ClassificationList`も`Organisms`に設定しています。
