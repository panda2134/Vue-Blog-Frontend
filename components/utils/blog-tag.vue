<template>
    <div :class="{'blog-tag': true, colored: !hollow}">
        <slot/>
    </div>
</template>

<style scoped>
.blog-tag {
    border-radius: 15px;
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 2px;
    padding-bottom: 2px;
    width: max-content;
    margin-right: 4px;
    margin-bottom: 3px;
    border: 1px solid #909399;
    color: #909399;
}

.colored {
    background-color: #66B1FF;
    border-color: #66B1FF;
    color: white;
}
</style>

<script>
export default {
    name: 'blog-tag',
    props: {
        'hollow': Boolean
    }
}
</script>