<template>
    <el-card class="about-container">
      <article>
        <markdown :src="text" />
      </article>
    </el-card>
</template>

<script>
import markdown from '@/components/utils/markdown'

export default {
  components: {
    markdown
  },
  async asyncData({ app }) {
    return await app.$axios.$get('/about').then(res => res.payload)
  }
}
</script>

<style scoped lang="scss">
</style>
