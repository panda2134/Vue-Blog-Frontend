<template>
  <n-link :class="{'nav-menu-item': true, active: isActive}" :to="to">
      <div class="nav-menu-item-slot">
        <slot/>
      </div>
  </n-link>
</template>

<style scoped lang="scss">
.a {
  outline: none;
}

.nav-menu-item {
  margin-left: 2em;
  padding-bottom: 1em;
  color: #79bbff;
  text-transform: uppercase;
  display: flex;
  flex-direction: column-reverse;
  text-decoration-line: none;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", "Geneva", Verdana, sans-serif;
  &:hover {
    cursor: pointer;
    color: #409eff;
  }
}

.nav-menu-item.active {
    border-bottom: 2px solid #409eff;
    color: #409eff;
    .nav-menu-item-slot {
        margin-bottom: -2px;
    }
}
</style>

<script>
export default {
    props: {
        to: String
    },
    computed: {
        isActive() {
            return this.to === this.$route.path;
        }
    }
}
</script>