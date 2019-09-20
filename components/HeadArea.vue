<template>
  <div class="HeadArea">
    <h1>
      TakaのBlog
    </h1>
    <h2>
      I am studying
      <vue-typer
        :text='["Vue", "JavaScript(ES6)", "Python", "PHP", "P5.js", "and more?"]'
        :repeat='Infinity'
        initial-action='typing'
        :pre-type-delay='70'
        :type-delay='70'
        :pre-erase-delay='2000'
        :erase-delay='250'
         erase-style='select-all'
         caret-animation='blink'
      ></vue-typer>
    </h2>
  </div>
</template>

<script>

export default {
  name: 'HeadArea',
}
</script>
