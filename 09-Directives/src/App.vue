<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit iusto quasi at excepturi voluptates incidunt sequi, voluptas quas ex magnam. Harum modi in esse est voluptas explicabo ea, eos totam.'"></p>
                <p v-html="'<strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In sit voluptatem magni fugiat, quis nobis blanditiis ratione. Aspernatur quo consectetur molestiae, ullam incidunt suscipit rerum iure. Repellat unde omnis officiis.</strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background.delayed="'red'">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, itaque doloribus deserunt cupiditate dolores vel est nostrum et iusto vitae rem a, unde hic beatae. Eum provident vitae architecto commodi.</p>
                <p v-local-highlight:background.delayed.blink="{mainColor: 'orange', secondColor: 'yellow', delay: 5000}">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos tempore rem veritatis distinctio facilis consequatur veniam magni, ex, impedit velit et laudantium vero at, ad sequi praesentium laborum. Odio, quos?</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding, vnode) {
                    var delay = 0;
                    if (binding.modifiers['delayed']) {
                        delay = 3000;
                    }
                    if (binding.modifiers['blink']) {
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                                if (binding.arg == 'background') {
                                    el.style.backgroundColor = currentColor;
                                } else {
                                    el.style.color = currentColor;
                                }
                            }, binding.value.delay);
                        }, delay);
                    } else {
                        setTimeout(() => {
                            if (binding.arg == 'background') {
                                el.style.backgroundColor = binding.value.mainColor;
                            } else {
                                el.style.color = binding.value.mainColor;
                            }
                        }, delay);
                    }
                }
            }
        }
    }
</script>

<style>
</style>
