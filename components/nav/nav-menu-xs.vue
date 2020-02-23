<template>
  <div>
    <el-dropdown @command="pushRoute">
      <el-button>
        <i class="el-icon-menu"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="xs-nav-link" command="/">home</el-dropdown-item>
        <el-dropdown-item class="xs-nav-link" command="/about">about</el-dropdown-item>
        <el-dropdown-item class="xs-nav-link" command="/categories/">categories</el-dropdown-item>
        <el-dropdown-item class="xs-nav-link" command="/tags/">tags</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<style lang="scss" scoped>
.xs-nav-link {
  color: #409eff;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", "Geneva", Verdana, sans-serif;
  text-transform: uppercase;
}
</style>

<script>
export default {
  methods: {
    pushRoute(path) {
      this.$router.push(path);
    }
  }
};
</script>