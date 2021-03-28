<template>
    <div class="layout">
        <div class="header"></div>
        <div class="box">
            <div class="sider">
                <ul>
                    <li v-for="(item,index) in list" :key="item.key" @click="menuClick(item,index)"
                        :class="{menuSelected:current === index}">{{item.title}}</li>
                </ul>
            </div>
            <div class="main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "layout",
        data() {
            return {
                list: [{
                        key: 0,
                        title: "按钮",
                        path: "/button"
                    },
                    {
                        key: 1,
                        title: "对话框",
                        path: "/dialog"
                    },
                    {
                        key: 2,
                        title: "表单",
                        path: "/form"
                    },
                    {
                        key: 3,
                        title: "输入框",
                        path: "/input"
                    },
                    {
                        key: 4,
                        title: "单选框",
                        path: "/radio"
                    },
                    {
                        key: 5,
                        title: "开关",
                        path: "/switch"
                    }
                ],
                current: 0, //当前选中的菜单项
            }
        },
        methods: {
            menuClick(val, index) { //点击左侧菜单
                if (this.$router.history.current.path === val.path) return;
                this.current = index;
                this.$router.push({
                    path: val.path
                });
            }
        },
        created() {
            this.list.forEach(item => {
                if (item.path === this.$router.history.current.path) {
                    this.current = item.key;
                }
            });
        }
    }
</script>

<style lang="less" scoped>
    .layout {
        height: 100%;

        .header {
            height: 64px;
            line-height: 64px;
            padding: 0 50px;
            background-color: #409EFF;
        }

        .box {
            display: flex;
            height: calc(100% - 64px);

            .sider {
                width: 200px;
                background-color: #fff;

                ul {
                    list-style: none;
                    padding: 24px;
                    font-size: 16px;
                    color: rgba(0, 0, 0, 0.65);
                    margin: 0;

                    li {
                        height: 40px;
                        line-height: 40px;
                        padding-left: 20px;
                        cursor: pointer;
                    }

                    li:hover {
                        color: #409EFF;
                    }

                    .menuSelected {
                        color: #409EFF;
                        background-color: #e6f7ff;
                    }
                }
            }

            .main {
                flex: 1;
                padding: 16px;
            }
        }
    }
</style>