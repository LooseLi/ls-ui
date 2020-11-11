<template>
  <div id="app">
    <ls-button type="primary" @click="login">登录</ls-button>
    <ls-dialog :visible="dialogVisible" title="项目测试">
      <ls-form :model="form" label-width="70px">
        <ls-form-item label="用户名：">
          <ls-input placeholder="请输入"></ls-input>
        </ls-form-item>
      </ls-form>
      <template v-slot:footer>
        <ls-button @click="confirmClick">确定</ls-button>
      </template>
    </ls-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        form: {}
      }
    },
    methods: {
      login() {
        this.dialogVisible = true;
      },
      confirmClick() {
        this.dialogVisible = false;
      }
    }
  }
</script>

<style>

</style>