<template>
    <div class="NaviBar">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark shadow-lg">
            <a class="navbar-brand" href="#">Taka'sBlog</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    <nuxt-link to="/" class="navi-items mx-2" exact>
                        <div class="d-flex flex-row">
                            <i class="material-icons">edit</i>
                            TOP
                        </div>
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                    <nuxt-link to="/sort/category" class="navi-items mx-2" exact>
                            <div class="d-flex flex-row">
                                <i class="material-icons">category</i>
                                カテゴリ
                            </div>
                    </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="/sort/tag" class="navi-items mx-2" exact>
                            <div class="d-flex flex-row">
                                <i class="material-icons">turned_in_not</i>
                                タグ
                            </div>
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="/other" class="navi-items mx-2" exact>
                            <div class="d-flex flex-row">
                                <i class="material-icons">person</i>
                                Other
                            </div>
                        </nuxt-link>
                    </li>
                </ul>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
</template>

<style scoped>
/*リンクのデフォルトデザイン無効化*/

a,a:hover{
    height:40%;
    display:block;
    text-decoration:none;
    color:white;
}

.material-icons{
    font-size: 45px;
}
</style>