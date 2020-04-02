<template>
   <div class="wrapper">
     <div class="login-main">
       <h3 class="login-title">登录页面</h3>
       <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" status-icon>
         <el-form-item prop="userName">
           <el-input v-model="dataForm.userName" suffix-icon="el-icon-s-custom" placeholder="帐号"></el-input>
         </el-form-item>
         <el-form-item prop="password">
           <el-input v-model="dataForm.password" suffix-icon="el-icon-s-cooperation" type="password" placeholder="密码"></el-input>
         </el-form-item>
         <el-form-item prop="captcha">
           <el-row :gutter="20">
             <el-col :span="14">
               <el-input v-model="dataForm.captcha" placeholder="验证码">
               </el-input>
             </el-col>
             <el-col :span="10" class="login-captcha">
               <img :src="captchaPath" @click="getCaptcha()" alt="图片加载失败">
             </el-col>
           </el-row>
         </el-form-item>
         <el-form-item>
           <el-button class="login-btn-submit" type="primary" @click="dataFormSubmit()">登录</el-button>
         </el-form-item>
       </el-form>
     </div>
   </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
    export default {
        name: "login",
        data(){
          return {
            dataForm:{
              userName:"",
              password:"",
              captcha:""
            },
            dataRule:{
              userName: [
                { required: true, message: '帐号不能为空', trigger: 'blur' }
              ],
              password: [
                { required: true, message: '密码不能为空', trigger: 'blur' }
              ],
              captcha: [
                { required: true, message: '验证码不能为空', trigger: 'blur' }
              ]
            },
            captchaPath:""
          }
        },
        computed:{
          ...mapState(['username', 'userpassword']),
          ...mapGetters(['userInfo'])
        },
        methods:{
          ...mapActions(['UserName', 'UserPassword']),
          ...mapMutations(['updateUserName', 'updateUserPassword']), //this.updateUserName()调用
          dataFormSubmit() {
            this.$refs['datafForm'].validate( (valid) => {
              if(valid){
                
              }
            })
          }
        }
    }
</script>

<style lang="less" scoped>
  .wrapper {
    background: url("../../assets/img/logoBackground1.jpg");
    background-size:100% 100%;
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  .site-content {
    min-height: 100%;
    padding: 30px 500px 30px 30px;
  }
  .brand-info {
    margin: 220px 100px 0 90px;
    color: #fff;
  }
  .brand-info__text {
    margin:  0 0 22px 0;
    font-size: 48px;
    font-weight: 400;
    text-transform : uppercase;
  }
  .brand-info__intro {
    margin: 10px 0;
    font-size: 16px;
    line-height: 1.58;
    opacity: .6;
  }
  .login-main {
    box-shadow: 0px 0px 8px #5f69f5;
    padding: 20px;
    width: 370px;
    /*background-color: rgba($color: #011022, $alpha: 0.7);*/
    border-radius: 10px;
  }
  .login-title {
    text-align: center;
    font-size: 20px;
    color:#fff;
  }
  .login-captcha {
    overflow: hidden;
  > img {
    width: 100%;
    cursor: pointer;
  }
  }
  .login-btn-submit {
    width: 100%;
    margin-top: 38px;
  }
  }
</style>
