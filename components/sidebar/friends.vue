<template>
    <div class="sidebar-friends sidebar-block">
        <div class="sidebar-block-title">
            friends
        </div>
        <div class="sidebar-friends-content">
            <div v-for="x in links" :key="x.name">
                <el-link :href="x.link" type="info" class="friend-link-href">{{ x.name }}</el-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>


.sidebar-friends-content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 0.6em;
    padding-left: 4px;
}

.friend-link-href {
    margin-right: 8px;
    font-size: 0.9em;
    font-weight: initial;
}
</style>

<script>
export default {
    props: ['links']
}
</script>