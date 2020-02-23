import message from 'element-ui/lib/message'

export const state = () => {};

export const mutations = {
    setToken(state, token) { state.token = token; }
}

export const actions = {
    async login({ commit, state }, { cred, captcha }) {
        if (state.token) return;

        let captcha_post = {};
        if (captcha) {
            captcha_post = {
                answer: captcha.answer,
                answer_enc: captcha.answer_enc
            };
        }

        const { data } = await this.$axios({
            method: 'POST',
            url: '/login',
            auth: cred,
            data: { captcha: captcha_post }
        }).catch(err => {
            if (err.response.status === 401) {
                message.error("用户名或密码错误");
            } else if (err.response.status === 403) {
                message.error("验证码错误");
            }
            throw err;
        });

        if (data) {
            commit("setToken", data.payload.token);
            message({
                message: '登录成功',
                type: 'success'
            })
        }
    },
    logout({ commit }) {
        commit("setToken", '');
        message({
            message: '已退出登录',
            type: 'success'
        })
    }
}