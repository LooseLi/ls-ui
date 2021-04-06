<template>
    <div>
        <ls-button type="primary" @click="dialogClick">点击</ls-button>
        <ls-dialog :visible.sync="visible" width="500px" title="新建">
            <div>这是对话框...</div>
            <div>这是对话框...</div>
            <div>这是对话框...</div>
            <template v-slot:footer>
                <ls-button @click="cancelClick">取消</ls-button>
                <ls-button type="primary" @click="confirmClick">确定</ls-button>
            </template>
        </ls-dialog>
    </div>
</template>

<script>
    export default {
        name: "dialog-menu",
        data() {
            return {
                visible: false
            }
        },
        methods: {
            dialogClick() { //按钮点击事件
                this.visible = true;
            },
            dialogClose() { //关闭对话框
                this.visible = false;
            },
            cancelClick() { //取消
                console.log("取消");
                this.dialogClose();
            },
            confirmClick() { //确定
                console.log("确定");
                setTimeout(() => {
                    this.dialogClose();
                }, 1000);
            },
        }
    }
</script>

<style>

</style>