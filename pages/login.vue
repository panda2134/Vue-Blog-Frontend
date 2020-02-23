<template>
  <div class="login-container">
    <el-card class="login-card">
      <div slot="header">登录</div>
      <div class="content">
        <el-form :model="cred" :rules="rules" ref="loginForm">
          <img src="/icon.png" width="128px" height="128px" />
          <el-form-item prop="username">
            <el-input v-model="cred.username" placeholder="用户名" suffix-icon="el-icon-user" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="cred.password"
              placeholder="密码"
              suffix-icon="el-icon-lock"
              type="password"
              @keyup.enter.native="checkFormAndLogin('loginForm')"
            />
          </el-form-item>
          <el-form-item prop="captcha" v-if="captcha">
            <el-input
              v-model="captcha.answer"
              placeholder="验证码"
              clearable
              @keyup.enter.native="checkFormAndLogin('loginForm')"
            >
              <div slot="append" class="captcha-container">
                <img :src="captcha.image" @click="updateCaptcha" />
              </div>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="checkFormAndLogin('loginForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 95vh;
  .login-card {
    height: min-content;
    @media (min-width: 768px) {
      width: 400px;
    }
    @media (max-width: 767px) {
      width: 90vw;
    }
  }
}

.captcha-container {
  margin: 0 -20px;
  img {
    height: 2.5em;
  }
}

.el-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.el-form-item {
  width: 100%;
}

.el-button {
  margin-top: 16px;
  width: 100%;
}
</style>

<script>
import 'element-ui/lib/theme-chalk/display.css';
import { mapState, mapActions } from 'vuex';

async function getCaptcha({ app }) {
  try {
    let captcha = await app.$axios.$get("/captcha").then(res => res.payload);
    captcha.answer = "";
    return { captcha };
  } catch (e) {
    if (e.response.status !== 404) {
      app.$message.error("无法获取验证码");
      throw e;
    }
  }
}

export default {
  layout: "fullpage",
  asyncData: getCaptcha,
  methods: {
    doRedirect() {
      let next = this.$route.query.next;
      if (next) this.$router.push(next);
      else this.$router.push('/');
    },
    checkFormAndLogin(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login({ cred: this.cred, captcha: this.captcha }).then(() => {
            this.doRedirect();
          });
        } else {
          this.$message.error("凭据有误，请检查后重试");
        }
      });
    },
    async updateCaptcha() {
      this.captcha = (await getCaptcha({ app: this })).captcha;
    },
    ...mapActions({
      login: 'user/login'
    })
  },
  data() {
    return {
      cred: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "用户名长度在3-20字符之间",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 128,
            message: "密码长度在6-128字符之间",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
      ...mapState('user', {
          loggedIn: state => (state.token ? true : false)
      })
  },
  mounted() {
    if(this.loggedIn) this.doRedirect();
  }
};
</script>