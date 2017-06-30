<template>
    <div>
        <p>Please select a Recipe</p>
        <hr>
        <ul class="list-group">
            <router-link
                    tag="li"
                    to="/recipe/1"
                    class="list-group-item"
                    style="cursor: pointer">Recipe 1</router-link>
            <router-link
                    tag="li"
                    to="/recipe/2"
                    class="list-group-item"
                    style="cursor: pointer">Recipe 2</router-link>
            <router-link
                    tag="li"
                    to="/recipe/3"
                    class="list-group-item"
                    style="cursor: pointer">Recipe 3</router-link>
        </ul>
    </div>
</template>