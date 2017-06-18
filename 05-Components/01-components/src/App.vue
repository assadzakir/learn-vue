<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <Recipes></Recipes>
            <app-Recipe-details></app-Recipe-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Recipes from './components/Recipe/Recipes.vue';
    import RecipeDetails from './components/Recipe/RecipeDetails.vue';

    export default {
        components: {
            appHeader: Header,
            Recipes,
            'app-Recipe-details': RecipeDetails,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
