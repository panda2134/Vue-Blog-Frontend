<template>
    <div class="featured-tags sidebar-block">
        <div class="sidebar-block-title">featured tags</div>
        <div class="tag-container">
            <blog-tag hollow>coding</blog-tag>
            <blog-tag hollow>math</blog-tag>
            <blog-tag hollow>language</blog-tag>
            <blog-tag hollow>os</blog-tag>
            <blog-tag hollow>cpp</blog-tag>
            <blog-tag hollow>python</blog-tag>
            <blog-tag hollow>network</blog-tag>
            <blog-tag hollow>deep-learning</blog-tag>
            <blog-tag hollow>git</blog-tag>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.featured-tags {
    display: flex;
    flex-direction: column;
}

.tag-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
}
</style>

<script>
import blogTag from '~/components/utils/blog-tag'
export default {
    components: {
        blogTag
    }
}
</script>