<template>
<div class="container">
    <heroSection/>
    <servicesThumbnail/>
</div>
</template>

<script>
import servicesThumbnail from "../components/services-thumbnail.vue";
import heroSection from "../components/heroSection.vue"
export default {
    components:{servicesThumbnail,heroSection}
};
</script>

