<template>
    <div class="ls-form-item">
        <label class="ls-form-item_label" :style="{width:this.Form.labelWidth}">{{label}}</label>
        <div class="ls-gorm-item_content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ls-form-item',
        props: {
            label: String
        },
        inject: ['Form']
    }
</script>

<style lang="less">
    .ls-form-item {
        margin-bottom: 25px;

        .ls-form-item_label {
            text-align: right;
            vertical-align: middle;
            float: left;
            font-size: 13px;
            color: #606266;
            line-height: 40px;
            padding: 0 12px 0 0;
            box-sizing: border-box;
        }

        .ls-gorm-item_content {
            line-height: 40px;
            position: relative;
            font-size: 13px;
            overflow: hidden;
        }
    }
</style>