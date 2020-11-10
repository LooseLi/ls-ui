<template>
    <div class="ls-switch" @click="handleClick" :class="{'is-checked':value}">
        <span class="ls-switch_core">
            <span class="ls-switch_button"></span>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'ls-switch',
        props: {
            value: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            handleClick() {
                this.$emit('input', !this.value);
            }
        }
    }
</script>

<style lang="less">
    .ls-switch {
        display: inline-flex;
        align-items: center;
        position: relative;
        font-size: 13px;
        line-height: 20px;
        height: 20px;
        vertical-align: middle;

        .ls-switch_core {
            margin: 0;
            display: inline-block;
            position: relative;
            width: 40px;
            height: 20px;
            border: 1px solid #dcdfe6;
            outline: none;
            border-radius: 10px;
            box-sizing: border-box;
            background: #dcdfe6;
            cursor: pointer;
            transition: border-color .3s, background-color .3s;
            vertical-align: middle;

            .ls-switch_button {
                position: absolute;
                top: 1px;
                left: 1px;
                border-radius: 100%;
                transition: all .3s;
                width: 16px;
                height: 16px;
                background-color: #fff;
            }
        }
    }

    .ls-switch.is-checked {
        .ls-switch_core {
            border-color: #409EFF;
            background-color: #409EFF;

            .ls-switch_button {
                transform: translateX(20px);
            }
        }
    }
</style>