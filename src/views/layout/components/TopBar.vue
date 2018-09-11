/*
 * @Author: LiPengCheng
 * @Date: 2018-05-30 11:30:44
 * @Last Modified by: LiPengCheng
 * @Last Modified time: 2018-08-21 14:05:03
 */
<template>
<div class="topBar">
  <img class="logo" src="../../../assets/u91.png">
  <span class="title">运营服务平台</span>
  <div class="titleMenu">
    <!--<span @click="handler({name:value.uiSign,url:value.webUrl})" :class="$store.state.tags.tagInfo.name===value.uiSign?'btnStyle activeStyle':'btnStyle'" v-if="value.status==true" v-for="(value,key) in $store.state.tags.tagList" :key="key">{{value.serverName}}</span>-->
    <el-dropdown @command="itemClick">
      <span class="btnStyle" style="margin-right:20px;margin-left:30px;">{{name}}</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="changePassword">修改密码</el-dropdown-item>
        <el-dropdown-item command="loginOut">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
  <el-dialog title="修改密码" :visible.sync="dialogVisible" width="450px" style="margin-top:20px;">
    <el-form :model="condition" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item prop="oldPassword">
        <span class="spanStyle">旧密码：</span>
        <el-input class="inputStyle" type="password" v-model="condition.oldPassword" placeholder="请输入旧密码"></el-input>
      </el-form-item>
      <br>
      <el-form-item prop="newPassword">
        <span class="spanStyle">新密码：</span>
        <el-input class="inputStyle" type="password" v-model="condition.newPassword" placeholder="请输入新密码"></el-input>
        <span style="display:inline-block;font-size:12px;margin-left:93px;color:#999999;">必须是8-20位英文字母、数字或符号，不能是纯数字</span>
      </el-form-item>
      <el-form-item prop="checkPassword">
        <span class="spanStyle">确认新密码：</span>
        <el-input class="inputStyle" type="password" v-model="condition.checkPassword" placeholder="请再次输入新密码"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="changePassword">修 改</el-button>
    <el-button @click="dialogVisible = false">取 消</el-button>
  </span>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: "TopBar",
  data: function() {
    var checkPasswordFn = (rule, value, callback) => {
      if (value !== this.condition.newPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      block: true,
      name: "",
      dialogVisible: false,
      condition: {
        oldPassword: "",
        newPassword: "",
        checkPassword: ""
      },
      rules: {
        oldPassword: [
          {
            required: true,
            message: "旧密码不能为空",
            trigger: "blur"
          }
        ],
        newPassword: [
          {
            required: true,
            message: "新密码不能为空",
            trigger: "blur"
          },
          {
            pattern: /^(?![0-9]+$)[a-zA-Z0-9~!@#$%^&*]{8,20}$/,
            message: "必须是8-20位英文字母、数字或符号，不能是纯数字",
            trigger: "blur"
          }
        ],
        checkPassword: [
          {
            required: true,
            message: "确认密码不能为空",
            trigger: "blur"
          },
          { validator: checkPasswordFn, trigger: "blur" }
        ]
      },
      loading: null
    };
  },
  methods: {
    handler() {
      if (arguments[0]) {
        this.$store
          .dispatch("handler", arguments[0])
          .then(() => {
            console.log("success");
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        let flag = "";
        for (let i = 0; i < this.$store.state.tags.tagList.length; i++) {
          if (this.$store.state.tags.tagList[i].serverName == "运营服务") {
            flag = this.$store.state.tags.tagList[i];
          }
        }
        this.handler({ name: flag.uiSign, url: flag.webUrl });
      }
    },
    itemClick() {
      if (arguments[0] == "loginOut") {
        this.$store
          .dispatch("loginOut")
          .then(() => {
            this.$router.push("/login");
          })
          .catch(() => {
            console.log("error");
          });
      } else if (arguments[0] == "changePassword") {
        this.dialogVisible = true;
      }
    },
    changePassword() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$store
            .dispatch("changePassword", this.condition)
            .then(() => {
              this.dialogVisible = false;
              this.$store
                .dispatch("loginOut")
                .then(() => {
                  console.log("success");
                })
                .catch(err => {
                  console.log(err);
                });
              console.log("success");
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.topBar {
  background-color: #222333;
  width: 100%;
  height: 60px;
}

.inputStyle {
  width: 285px;
}

.spanStyle {
  display: inline-block;
  width: 86px;
  text-align: right;
}

.logo {
  width: 55px;
  height: 55px;
  margin-left: 45px;
  margin-top: 3px;
  vertical-align: middle;
}

.title {
  color: white;
  margin-left: 15px;
  vertical-align: middle;
  font-size: 20px;
  font-weight: 900;
}

.titleMenu {
  float: right;
}

.activeStyle {
  color: #e9524b !important;
  border-bottom: solid 3px #e9524b;
}

.btnStyle {
  font-size: 14px;
  display: inline-block;
  padding-left: 20px;
  padding-right: 20px;
  height: 60px;
  line-height: 60px;
  cursor: pointer;
  color: white;
}
</style>
<style>
.topBar .el-form-item__content {
  margin-left: 0 !important;
}
.topBar .el-form-item__error {
  margin-left: 100px;
}
</style>

