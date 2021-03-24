<template>
    <div class="layout">
        <div class="header"></div>
        <div class="box">
            <div class="sider">
                <ul>
                    <li>按钮</li>
                    <li>对话框</li>
                    <li>表单</li>
                    <li>输入框</li>
                    <li>单选框</li>
                    <li>开关</li>
                </ul>
            </div>
            <div class="main"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "layout",
        data() {
            return {}
        },
        methods: {}
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
                }
            }

            .main {
                flex: 1;
                padding: 16px;
            }
        }
    }
</style>