<template>
    <div>
        <div class="container">
            <ls-button class="button" type="primary">Primary</ls-button>
            <ls-button class="button" type="success">Success</ls-button>
            <ls-button class="button" type="warning">Warning</ls-button>
            <ls-button class="button" type="info">Info</ls-button>
            <ls-button class="button" type="danger">Danger</ls-button>
        </div>
        <div class="container">
            <ls-button class="button" plain type="primary">Primary</ls-button>
            <ls-button class="button" plain type="success">Success</ls-button>
            <ls-button class="button" plain type="warning">Warning</ls-button>
            <ls-button class="button" plain type="info">Info</ls-button>
            <ls-button class="button" plain type="danger">Danger</ls-button>
        </div>
        <div class="container">
            <ls-button class="button" round type="primary">Primary</ls-button>
            <ls-button class="button" round type="success">Success</ls-button>
            <ls-button class="button" round type="warning">Warning</ls-button>
            <ls-button class="button" round type="info">Info</ls-button>
            <ls-button class="button" round type="danger">Danger</ls-button>
        </div>
        <div class="container">
            <ls-button class="button" plain round type="primary">Primary</ls-button>
            <ls-button class="button" plain round type="success">Success</ls-button>
            <ls-button class="button" plain round type="warning">Warning</ls-button>
            <ls-button class="button" plain round type="info">Info</ls-button>
            <ls-button class="button" plain round type="danger">Danger</ls-button>
        </div>
        <div class="container">
            <ls-button class="button" icon="iconedit" disabled type="primary">Primary</ls-button>
            <ls-button class="button" icon="iconedit" disabled type="success">Success</ls-button>
            <ls-button class="button" icon="iconedit" disabled type="warning">Warning</ls-button>
            <ls-button class="button" icon="iconedit" disabled type="info">Info</ls-button>
            <ls-button class="button" icon="iconedit" disabled type="danger">Danger</ls-button>
        </div>
        <div class="container">
            <ls-button class="button" icon="iconedit" circle type="primary"></ls-button>
            <ls-button class="button" icon="iconedit" circle type="success"></ls-button>
            <ls-button class="button" icon="iconedit" circle type="warning"></ls-button>
            <ls-button class="button" icon="iconedit" circle type="info"></ls-button>
            <ls-button class="button" icon="iconedit" circle type="danger"></ls-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "button-menu",
        data() {
            return {}
        },
        methods: {
            deleteClick() {
                console.log("111");
            }
        }
    }
</script>

<style lang="less" scoped>
    .container {
        margin: 20px;

        .button {
            margin-right: 10px
        }
    }
</style>