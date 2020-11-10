<template>
    <label class="ls-radio" :class="{'is-checked':label === model}">
        <span class="ls-radio_input">
            <span class="ls-radio_inner"></span>
            <input class="ls-radio_original" type="radio" :value="label" v-model="model">
        </span>
        <span class="ls-radio_label">
            <slot>
                <template>{{label}}</template>
            </slot>
        </span>
    </label>
</template>

<script>
    export default {
        name: 'ls-radio',
        inject: {
            RadioGroup: {
                default: ''
            }
        },
        props: {
            label: {
                type: [String, Number, Boolean],
                default: ''
            },
            value: null
        },
        // 需要提供一个计算属性model
        computed: {
            model: {
                get() {
                    return this.isGroup ? this.RadioGroup.value : this.value
                },
                set(value) {
                    // 触发父组件的input事件
                    this.$emit('input', value);
                    this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
                }
            },
            isGroup() {
                // 判断是否被group包裹
                return !!this.RadioGroup
            }
        }
    }
</script>

<style lang="less">
    .ls-radio {
        color: #606266;
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: pointer;
        display: inline-block;
        white-space: nowrap;
        outline: none;
        font-size: 13px;
        margin-right: 30px;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;

        .ls-radio_input {
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            display: inline-block;
            line-height: 1;
            position: relative;
            vertical-align: middle;

            .ls-radio_inner {
                border: 1px solid #dcdfe6;
                border-radius: 100%;
                width: 14px;
                height: 14px;
                background-color: #fff;
                position: relative;
                cursor: pointer;
                display: inline-block;
                box-sizing: border-box;
            }

            .ls-radio_inner:after {
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: #fff;
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(0);
                transition: transform .15s ease-in;
            }

            .ls-radio_original {
                opacity: 0;
                outline: none;
                position: absolute;
                z-index: -1;
                top: 0;
                left: 0;
            }
        }

        .ls-radio_label {
            font-size: 13px;
            padding-left: 10px;
        }
    }

    .ls-radio.is-checked {
        .ls-radio_input {
            .ls-radio_inner {
                border-color: #409EFF;
                background: #409EFF;
            }

            .ls-radio_inner:after {
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }
</style>