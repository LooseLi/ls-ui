<template>
  <div id="app">
    <router-view></router-view>
    <!-- <ls-button disabled type="primary" icon="iconedit">编辑</ls-button>
    <ls-button icon="icondelete" type="danger">删除</ls-button>
    <ls-button circle icon="icondelete" @click="deleteClick"></ls-button> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      deleteClick() {
        console.log("111");
      }
    }
  }
</script>

<style>

</style>