<template>
<div class="home row">
    <div class="col-12 ">
        <button class="btn btn-primary" @click="fade = !fade">fade button</button>
        <transition name="fade">
            <div v-if="fade" class="alert alert-primary w-50 m-auto mt-2" role="alert">
                this is fade transition
            </div>
        </transition>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="col-12">
        <button class="btn btn-success " @click="slideFade = !slideFade">slide fade button</button>
        <transition name="slide-fade">
            <div v-if="slideFade" class="alert alert-success w-50 m-auto mt-2" role="alert">
                This is a slide fade
            </div>
        </transition>
    </div>
     <br>
    <br>
    <br>
    <br>
    <br>

</div>
</template>

<script>
export default {
    name: "HomeView",
    data() {
        return {
            fade: false,
            slideFade: false
        };
    },
};
</script>
