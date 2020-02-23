<template>
  <div class="container">
    <div class="post-excerpt-item" v-for="x in postsList" :key="x[0]">
      <post-excerpt :excerpt-data="x[1]" :to="'/posts/' + x[0]" />
    </div>
    <div v-if="noMore">
      <el-card>
        <div class="nomore">没有更多了</div>
      </el-card>
    </div>
    <div v-else-if="loadingPosts">
      <el-card>
        <div class="loadmore">加载中...</div>
      </el-card>
    </div>
    <div v-else @click="onClick" class="pointer" v-observe-visibility="onVisibilityChange">
      <el-card>
        <div class="loadmore">加载更多...</div>
      </el-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  overflow: auto;
  scroll-behavior: smooth;
  .post-excerpt-item {
    margin-bottom: 1em;
  }
}

@mixin hint-box {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}

.pointer {
  &:hover {
    cursor: pointer;
  }
}

.loadmore {
  @include hint-box;
  color: #53a8ff;
}

.nomore {
  @include hint-box;
}
</style>

<script>
import postExcerpt from "~/components/utils/post-excerpt";

async function getPage($axios, page, per_page, showProgress) {
  let posts = await $axios
    .$get("/posts/", {
      params: {
        page,
        per_page
      },
      progress: showProgress ? true : false
    })
    .then(res => res.payload)
    .catch(err => {
      if (err.response.status === 404) return {};
      throw err;
    });
  let newPosts = Object.entries(posts).sort((a, b) => {
    return a[1].updated === b[1].updated
      ? b[0] - a[0]
      : a[1].updated < b[1].updated
      ? 1
      : -1;
  });
  console.log({ newPosts });
  return newPosts;
}

export default {
  name: "home",
  components: {
    postExcerpt
  },
  data() {
    return {
      loadingPosts: false
    };
  },
  async asyncData({ app, route, error }) {
    let page = route.query.page || 1,
      perPage = 10;
    let postsList = [],
      seo = route.query.page ? true : false;

    postsList.push(...(await getPage(app.$axios, page, perPage, true)));

    if (seo && !postsList.length) {
      error({ statusCode: 404, message: "Not found" });
    }

    return {
      page,
      perPage,
      postsList,
      noMore: seo,
      seo
    };
  },
  head() {
    let link = [];
    if (this.seo && this.postsList.length) {
      if (this.page > 1) {
        link.push({
          hid: "index-prev",
          rel: "prev",
          href: "/?page=" + (this.page * 1 - 1)
        });
      }
      link.push({
        hid: "index-prev",
        rel: "next",
        href: "/?page=" + (this.page * 1 + 1)
      });
    }
    return {
      title: this.$store.state.meta.site_title,
      link
    };
  },
  methods: {
    async onClick() {
      await this.loadNextPage()
    },
    async onVisibilityChange(visible) {
      if (visible && !this.loadingPosts) {
        this.loadingPosts = true
        await this.loadNextPage()
        this.loadingPosts = false
      }
    },
    async loadNextPage() {
      if (this.noMore) return;
      let nextPage = await getPage(this.$axios, this.page + 1, this.perPage);
      if (nextPage.length) {
        this.page++;
        this.postsList = this.postsList.concat(nextPage);
      } else {
        this.noMore = true;
      }
    }
  }
};
</script>