<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appRecipe'">Recipe</button>
                <button @click="selectedComponent = 'appChef'">Chef</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default Content</p>
                    </component>
                </keep-alive>
                <app-recipe>
                    <h2 slot="title">{{ recipeTitle }}</h2>
                    <p>A wonderful recipe</p>
                </app-recipe>
            </div>
        </div>
    </div>
</template>

<script>
    import Recipe from './components/Recipe.vue';
    import Chef from './components/Chef.vue';
    import New from './components/New.vue';

    export default {
        data: function() {
            return {
                recipeTitle: 'The Recipe',
                selectedComponent: 'appRecipe'
            }
        },
        components: {
            appRecipe: Recipe,
            appChef: Chef,
            appNew: New
        }
    }
</script>

<style>
</style>
