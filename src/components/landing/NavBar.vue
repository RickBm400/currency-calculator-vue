<template>
    <v-sheet color="#265A5C"
    class="nav-bar">
        <v-row>
            <v-col cols="3">
                <a href="/">
                    <v-icon size="30">
                        mdi-currency-usd
                    </v-icon>
                    Currency
                </a>
            </v-col>
            <v-col class="d-flex" cols="6">
                <div v-for="(item, i) in links" :key="i">
                    <a >{{ item.title }}</a>
                </div>
            </v-col>
            <v-col cols="3"></v-col>
        </v-row>
    </v-sheet>
</template>
<script>
export default {
    data() {
        return {
            links: [
                {
                    title: 'Calculator',
                },
                {
                    title: 'Graphs',
                },
                {
                    title: 'Calculator'
                },
                {
                    title: 'Rating'
                },
                {
                    title: 'Learn About'
                },
                {
                    title: 'Contact'
                }
            ]
        }
    },
}
</script>
<style lang="sass" scoped>
.nav-bar 
    padding: 20px 200px

a
    text-decoration: none
    color: white
    padding: 0 9px
</style>