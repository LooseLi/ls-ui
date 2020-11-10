<template>
    <transition name="dialog-fade">
        <div class="ls-dialog_wrapper" v-show="visible" @click.self="handleClose">
            <div class="ls-dialog" :style="{width,marginTop:top}">
                <div class="ls-dialog_header">
                    <slot name="title">
                        <span class="ls-dialog_title">{{title}}</span>
                    </slot>
                </div>
                <div class="ls-body">
                    <!-- 默认插槽 -->
                    <slot></slot>
                </div>
                <div class="ls-footer" v-if="$slots.footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'ls-dialog',
        props: {
            title: {
                type: String,
                default: '提示'
            },
            width: {
                type: String,
                default: '50%'
            },
            top: {
                type: String,
                default: '15vh'
            },
            visible: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {}
        },
        methods: {
            handleClose() {
                this.$emit('update:visible', false);
            }
        }
    }
</script>

<style lang="less">
    .ls-dialog_wrapper {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        overflow: auto;
        margin: 0;
        z-index: 2001;
        background-color: rgba(0, 0, 0, .5);

        .ls-dialog {
            position: relative;
            margin: 15vh auto 50px;
            background: #fff;
            border-radius: 2px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
            box-sizing: border-box;
            width: 30%;

            .ls-dialog_header {
                padding: 20px 20px 10px;

                .ls-dialog_title {
                    line-height: 24px;
                    font-size: 18px;
                    color: #303133;
                }
            }

            .ls-body {
                padding: 30px 20px;
                color: #606266;
                font-size: 13px;
                word-break: break-all;
            }

            .ls-footer {
                padding: 10px 20px 20px;
                text-align: right;
                box-sizing: border-box;

                .ls-button:first-child {
                    margin-right: 20px;
                }
            }
        }
    }

    .dialog-fade-enter-active {
        animation: fade .3s;
    }

    .dialog-fade-leave-active {
        animation: fade .3s reverse;
    }

    // 动画
    @keyframes fade {
        0% {
            opacity: 0;
            transform: translateY(-20px);
        }

        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }
</style>