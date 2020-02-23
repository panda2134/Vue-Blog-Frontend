<template>
  <nav>
    <h1>{{ title }}</h1>
    <div class="nav-menu hidden-xs-only">
      <nav-bar-item to="/">home</nav-bar-item>
      <nav-bar-item to="/about">about</nav-bar-item>
      <nav-bar-item to="/categories/">categories</nav-bar-item>
      <nav-bar-item to="/tags/">tags</nav-bar-item>
    </div>
    <div class="hidden-sm-and-up hidden-print">
      <nav-menu-xs/>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.hidden-print {
  @media print {
    display: none;
  }
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    align-items: center
  }
  h1 {
    order: 0;
    width: max-content;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", "Geneva", Verdana, sans-serif;
  }
  .nav-menu {
    order: 1;
    display: flex;
    flex-direction: row;
  }
}
</style>

<script>
import navBarItem from "~/components/nav/nav-menu-item";
import navMenuXs from "~/components/nav/nav-menu-xs"
export default {
  components: {
    navBarItem,
    navMenuXs
  },
  props: ['title']
};
</script>