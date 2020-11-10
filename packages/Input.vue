<template>
    <div class="ls-input">
        <input class="ls-input_inner" :class="{'is-disabled':disabled}" :placeholder="placeholder" :type="type"
            :name="name" :value="value" :disabled="disabled" @input="handleInput">
    </div>
</template>

<script>
    export default {
        name: 'ls-input',
        props: {
            placeholder: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            },
            name: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            value: {
                type: String,
                default: ''
            }
        },
        methods: {
            handleInput(e) {
                this.$emit('input', e.target.value);
            }
        }
    }
</script>

<style lang="less">
    .ls-input {
        width: 100%;
        position: relative;
        font-size: 13px;
        display: inline-block;

        .ls-input_inner {
            -webkit-appearance: none;
            background-color: #fff;
            background-image: none;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            font-size: inherit;
            height: 30px;
            line-height: 30px;
            outline: none;
            padding: 0 15px;
            transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
            width: 100%;
        }

        .ls-input_inner:focus {
            outline: none;
            border-color: #409EFF;
        }

        .ls-input_inner.is-disabled {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
</style>