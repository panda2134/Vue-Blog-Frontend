<template>
  <div>
    <el-card>
      <div slot="header">
        <h2 class="post-title" @click="gotoPost">{{ excerptData.name }}</h2>
      </div>
      <div class="post-excerpt"  @click="gotoPost">{{ excerptData.excerpt }}</div>
      <div class="post-time">更新于 {{ getUpdateTimeago }}</div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.post-title {
  color: #303133;
  margin: 0px;
  &:hover {
    cursor: pointer;
  }
}

.post-excerpt {
  width: 100%;
  color: #606266;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 5em;
  &:hover {
    cursor: pointer;
  }
}

.post-time {
  margin-top: 1em;
  color: #909399;
}

</style>

<script>
import * as timeago from "timeago.js";
export default {
  props: ["excerptData", "to"],
  computed: {
    getUpdateTimeago() {
      return timeago.format(new Date(this.excerptData.updated), 'zh_CN');
    }
  },
  methods: {
    gotoPost() {
      this.$router.push(this.to)
    }
  }
};
</script>