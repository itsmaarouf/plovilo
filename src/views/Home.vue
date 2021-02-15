<template>
    <v-app>
        <!-- Sizes your content based upon application components -->
        <v-main>
            <div class="home">
                <h1>home</h1>
            </div>
            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <products></products>
                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import Products from "../components/Products";

    export default {
        name: "Home",
        components: {
            Products,
        },
    };
</script>
