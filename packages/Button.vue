<template>
    <button class="ls-button" @click="handleClick" :disabled="disabled"
        :class="[`ls-button--${type}`,{'is-plain':plain},{'is-round':round},{'is-circle':circle},{'is-disabled':disabled}]">
        <i v-if="icon" :class="icon"></i>
        <!-- $slots.default：插槽没有穿内容不显示 -->
        <span v-if="$slots.default">
            <!-- 按钮内容插槽 -->
            <slot></slot>
        </span>
    </button>
</template>

<script>
    export default {
        name: 'ls-button',
        props: {
            type: { //按钮的类型
                type: String,
                default: 'default'
            },
            plain: { //朴素
                type: Boolean,
                default: false
            },
            round: { //圆角
                type: Boolean,
                default: false
            },
            circle: { //圆形
                type: Boolean,
                default: false
            },
            icon: {
                type: String,
                default: ''
            },
            disabled: { //禁用
                type: Boolean,
                default: false
            }
        },
        methods: {
            handleClick(e) { //点击事件
                this.$emit('click', e);
            }
        },
        created() {
            //拿到所有插槽
            // console.log(this.$slots);
        }
    }
</script>

<style lang="less" scoped>
    .ls-button {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: 0.1s;
        font-weight: 500;
        // 禁止元素的文字被选中
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 8px 20px;
        font-size: 13px;
        border-radius: 4px;
    }

    .ls-button:hover,
    .ls-button:focus {
        color: #409EFF;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }

    .ls-button--primary {
        color: #fff;
        background-color: #409EFF;
        border-color: #409EFF;
    }

    .ls-button--primary:hover,
    .ls-button--primary:focus {
        color: #fff;
        background-color: #66b1ff;
        border-color: #66b1ff;
    }

    .ls-button--success {
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
    }

    .ls-button--success:hover,
    .ls-button--success:focus {
        color: #fff;
        background-color: #85ce61;
        border-color: #85ce61;
    }

    .ls-button--info {
        color: #fff;
        background-color: #909399;
        border-color: #909399;
    }

    .ls-button--info:hover,
    .ls-button--info:focus {
        color: #fff;
        background-color: #a6a9ad;
        border-color: #a6a9ad;
    }

    .ls-button--warning {
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
    }

    .ls-button--warning:hover,
    .ls-button--warning:focus {
        color: #fff;
        background-color: #ebb563;
        border-color: #ebb563;
    }

    .ls-button--danger {
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
    }

    .ls-button--danger:hover,
    .ls-button--danger:focus {
        color: #fff;
        background-color: #f78989;
        border-color: #f78989;
    }

    .ls-button--primary.is-plain {
        color: #66b1ff;
        background: #ecf5ff;
        border-color: #b3d8ff;
    }

    .ls-button--primary.is-plain:hover,
    .ls-button--primary.is-plain:focus {
        color: #fff;
        background: #409EFF;
        border-color: #409EFF;
    }

    .ls-button--success.is-plain {
        color: #67c23a;
        background: #f0f9eb;
        border-color: #c2e7b0;
    }

    .ls-button--success.is-plain:hover,
    .ls-button--success.is-plain:focus {
        color: #fff;
        background: #67c23a;
        border-color: #67c23a;
    }

    .ls-button--warning.is-plain {
        color: #ebb563;
        background: #fff5e5;
        border-color: #e9d3b0;
    }

    .ls-button--warning.is-plain:hover,
    .ls-button--warning.is-plain:focus {
        color: #fff;
        background: #ebb563;
        border-color: #ebb563;
    }

    .ls-button--info.is-plain {
        color: #909399;
        background: #dddddd;
        border-color: #b6bac2;
    }

    .ls-button--info.is-plain:hover,
    .ls-button--info.is-plain:focus {
        color: #fff;
        background: #909399;
        border-color: #909399;
    }

    .ls-button--danger.is-plain {
        color: #f56c6c;
        background: #ffe1e1;
        border-color: #d89797;
    }

    .ls-button--danger.is-plain:hover,
    .ls-button--danger.is-plain:focus {
        color: #fff;
        background: #f56c6c;
        border-color: #f56c6c;
    }

    .ls-button.is-round {
        //圆角
        border-radius: 20px;
        padding: 12px 23px;
    }

    .ls-button.is-circle {
        //圆形
        border-radius: 50%;
        padding: 8px;
    }

    .ls-button.is-disabled {
        //禁用
        color: rgba(0, 0, 0, .25);
        background-color: #f5f5f5;
        border-color: #d9d9d9;
        text-shadow: none;
        box-shadow: none;
        cursor: not-allowed;
    }

    .ls-button [class*=icon]+span {
        margin-left: 8px; //找到图标后面的span标签
    }

    .ls-button i {
        font-size: 13px;
    }
</style>