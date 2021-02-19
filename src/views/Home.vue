<template>
    <v-app>
        <!-- Sizes your content based upon application components -->
        <v-main>
            <div class="home">
                <h1>home</h1>
            </div>
            <!-- Provides the application the proper gutter -->
            <v-container fluid>
              <categories></categories>
              <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import Categories from "@/components/Categories";

    export default {
        name: "Home",
        components: {
          Categories,
        },
    };
</script>
