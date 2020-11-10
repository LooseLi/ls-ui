<template>
    <div class="ls-radio-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ls-radio-group',
        provide() {
            return {
                RadioGroup: this
            }
        },
        props: {
            value: null
        }
    }
</script>

<style>

</style>