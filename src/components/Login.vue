<template>
 <div class="login_container">
    <div class="login_box">
        <!-- 头像区域 -->
        <div class="avater_box">
            <img src="../assets/timg.png" >
        </div>
        <!-- 表单区域 -->
        <el-form  label-width="0px" class="login_from" :model="loginFrom" :rules="loginFromRules" ref="loginFromRef">
            <!-- 用户名 -->
            <el-form-item prop="username">
                <el-input prefix-icon="el-icon-user-solid" v-model="loginFrom.username"></el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item prop="password">
                <el-input prefix-icon="el-icon-lock" v-model="loginFrom.password" type="password"></el-input>
            </el-form-item>
            <!-- 登录按钮 -->
            <el-row class="btns">
                <el-button type="primary" @click="login">登录</el-button>
                <el-button type="info" @click="resetFrom">重置</el-button>
            </el-row>
        </el-form>
    </div>
 </div>
</template>

<script>
export default {
  name: 'login',
  data () {
      return {
          loginFrom: {
              username:'admin',
              password:'123456'
          },
          loginFromRules: {
              username:[
                  { required: true, message: '请输入用户名', trigger: 'blur' },
                  { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              ],
              password:[
                  { required: true, message: '请输入密码', trigger: 'blur' },
                  { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
              ]
          }
      }
  },
  methods: {
      resetFrom(){
          this.$refs.loginFromRef.resetFields();
      },
      login(){
          this.$refs.loginFromRef.validate(async valid => {
              if(!valid) return;
              const { data: res } = await this.$http.post("login",this.loginFrom);
              if (res.meta.status !==200)return this.$message({message:'登录失败',type: 'warning'});
              this.$message({message:'登录成功',type: 'success'});
            //   - 将登录成功后的token，保存到客户端的sessionStorage中
            //     - - 项目中出现登录之外的其他API接口，必须在登录之后才能访问
            //     - - token只应在当前网站打开期间生效，所以讲token保存在sessionStorage中
              window.sessionStorage.setItem("token", res.data.token);
            // 通过编程式导航跳转到后台主页，路由地址是/home
            this.$router.push("/home");
          })
      }
  }
}
</script>

<style scoped>
.login_container {
    background-color: #2b4b6b;
    height: 100%;
}
.login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    /* 为了居中减去自身宽度的一半 */
    transform: translate(-50%, -50%);
}
.login_box .avater_box {
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
    }
.login_box .avater_box img{

    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #eee;
}

.login_from {
    position: absolute;
    bottom: 20px;
    width: 100%;
    padding: 0 20px;
    box-sizing:border-box;
}

.btns {
    display: flex;
    justify-content: center;
}
</style>
