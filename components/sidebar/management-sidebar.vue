<template>
    <div class="management-sidebar sidebar-block">
        <div class="sidebar-block-title">
            management
        </div>
        <div>
            <ul class="management-menu">
                <li v-if="!loggedIn">
                    <nuxt-link class="menu-item" to='/login'>登录</nuxt-link>
                </li>
                <li v-else>
                    <span class="menu-item" @click="logout">登出</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.management-menu {
    padding-left: 4px;
    li {
        list-style: none;
        margin-bottom: 4px;
        .menu-item {
            color: #909399;
            text-decoration-line: none;
            font-size: 0.9em;
            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState('user', {
            loggedIn: state => (state.token ? true : false)
        })
    },
    methods: {
        ...mapActions('user', ['logout'])
    }
}
</script>