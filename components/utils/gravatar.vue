<template>
    <el-avatar shape="square" :size="60" :src="getGravatar"/>
</template>

<script>
import md5 from 'md5'

export default {
    props: ['email'],
    computed: {
        getGravatar() {
            return this.$globals.GRAVATAR_URL + md5(this.email.trim());
        }
    }
}
</script>