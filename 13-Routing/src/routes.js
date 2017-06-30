import Home from './components/Home.vue';
import Header from './components/Header.vue';

const Recipe = resolve => {
    require.ensure(['./components/Recipe/Recipe.vue'], () => {
        resolve(require('./components/Recipe/Recipe.vue'));
    }, 'Recipe');
};
const RecipeStart = resolve => {
    require.ensure(['./components/Recipe/RecipeStart.vue'], () => {
        resolve(require('./components/Recipe/RecipeStart.vue'));
    }, 'Recipe');
};
const RecipeEdit = resolve => {
    require.ensure(['./components/Recipe/RecipeEdit.vue'], () => {
        resolve(require('./components/Recipe/RecipeEdit.vue'));
    }, 'Recipe');
};
const RecipeDetail = resolve => {
    require.ensure(['./components/Recipe/RecipeDetail.vue'], () => {
        resolve(require('./components/Recipe/RecipeDetail.vue'));
    }, 'Recipe');
};

export const routes = [
    {
        path: '', name: 'home', components: {
        default: Home,
        'header-top': Header
    }
    },
    {
        path: '/recipe', components: {
        default: Recipe,
        'header-bottom': Header
    }, children: [
        {path: '', component: RecipeStart},
        {
            path: ':id', component: RecipeDetail, beforeEnter: (to, from, next) => {
            console.log('inside route setup');
            next();
        }
        },
        {path: ':id/edit', component: RecipeEdit, name: 'RecipeEdit'}
    ]
    },
    {path: '/redirect-me', redirect: {name: 'home'}},
    {path: '*', redirect: '/'}
];