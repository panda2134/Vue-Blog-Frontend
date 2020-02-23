<template>
    <div class="about-sidebar sidebar-block">
        <div class="sidebar-block-title">about me</div>
        <div class="about-sidebar-content">
            <gravatar :email="this.meta.contact.email" class="about-sidebar-avatar"/>
            <div class="about-sidebar-author">{{ meta.author }}</div>
            <div class="about-sidebar-desc">{{ meta.description }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.about-sidebar{
    display: flex;
    flex-direction: column;
    .about-sidebar-content {
        margin-left: 15px;
        margin-right: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #DCDFE6;
        min-height: 100px;
        .about-sidebar-author {
            color: #909399;
            text-transform: uppercase;
            font-size: 1.1em;
            float: right;
            margin: 20px;
        }
        .about-sidebar-desc {
            color: #909399;
            text-transform: capitalize;
            float: left;
            clear: right;
            margin-left: 20px;
            margin-right: 20px;
            margin-bottom: 15px;
            word-break: break-word;
        }
    }
    .about-sidebar-avatar {
        position: relative;
        top: -10px;
        left: -10px;
    }
}
</style>

<script>
import md5 from 'md5'
import gravatar from '@/components/utils/gravatar'

export default {
    props: ['meta'],
    components: {
        gravatar
    }
}
</script>