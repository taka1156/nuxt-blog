<template>
  <div class="NaviBar">
    <nav
      class="navbar fixed-top navbar-expand-lg navbar-dark bg-success shadow-lg"
    >
      <a class="navbar-brand" href="#">Taka'sBlog</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <nuxt-link to="/" class="navi-items mx-2" exact>
              <div class="d-flex flex-row">
                <i class="material-icons">edit</i>
                トップ
              </div>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/category" class="navi-items mx-2" exact>
              <div class="d-flex flex-row">
                <i class="material-icons">category</i>
                カテゴリー
              </div>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/tag" class="navi-items mx-2" exact>
              <div class="d-flex flex-row">
                <i class="material-icons">tag</i>
                タグ
              </div>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/other" class="navi-items mx-2" exact>
              <div class="d-flex flex-row">
                <i class="material-icons">person</i>
                その他
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
/*リンクのデフォルトデザイン無効化*/

a,
a:hover {
  height: 40%;
  display: block;
  text-decoration: none;
  color: white;
}

.material-icons {
  font-size: 45px;
}
</style>
