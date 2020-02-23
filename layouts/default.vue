<template>
  <el-row type="flex" justify="center">
    <el-backtop></el-backtop>
    <el-col :span="22" style="position: justify;">
      <el-container class="header-container">
        <el-header>
          <nav-bar :title="meta.site_title" />
        </el-header>
      </el-container>
      <el-container class="content">
        <el-main>
          <nuxt />
        </el-main>
        <transition 
          name="aside-transition"
          enter-active-class="animated fadeInRight animation-aside"
          leave-active-class="animated fadeOutRightBig animation-aside">
          <el-aside v-if="sidebar">
            <featured-tags />
            <about-me-sidebar :meta="meta" />
            <friends :links="meta.friends" />
            <management-sidebar />
          </el-aside>
        </transition>
      </el-container>
    </el-col>
  </el-row>
</template>

<style lang="scss">
.content {
  padding-top: 1em;
  overflow: hidden;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
}

.header-container {
  position: sticky;
  z-index: 1000;
  top: 0px;
  background-color: white;
}

.el-header {
  border-bottom: 1px solid #dcdfe6;
}

.animation-aside {
  animation-duration: 250ms;
}

.el-aside {
  padding-left: 1em;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    width: 100% !important;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 200px !important;
  }

  .sidebar-block-title {
    text-transform: uppercase;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #909399;
    margin-bottom: 10px;
  }

  .sidebar-block {
    margin-bottom: 2em;
  }
}
</style>

<script>
import "element-ui/lib/theme-chalk/display.css";
import "animate.css"

import navBar from "~/components/nav/navbar";
import featuredTags from "~/components/sidebar/featured-tags";
import aboutMeSidebar from "~/components/sidebar/about-me-sidebar";
import friends from "~/components/sidebar/friends";
import managementSidebar from "~/components/sidebar/management-sidebar";

export default {
  components: {
    navBar,
    featuredTags,
    aboutMeSidebar,
    friends,
    managementSidebar
  },
  computed: {
    meta() {
      return this.$store.state.meta;
    },
    sidebar() {
      return this.$route.name != 'categories' && this.$route.name != 'tags';
    }
  }
};
</script>