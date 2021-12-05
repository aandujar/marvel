<template>
  <div
    class="main"
    :style="{
      'background-image': 'url(' + require(`@/assets/marvel.jpg`) + ')',
    }"
  >
    <Section
      v-for="(section, index) in sections"
      :key="index"
      :section="section"
      @click="goTo(section)"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Section from "@/components/Section.vue";

export default defineComponent({
  name: "Main",
  components: {
    Section,
  },
  setup() {
    const router = useRouter();

    const sections = ["characters"/*, "comics"*/, "series"];

    function goTo(section) {
      router.push(`/${section}`);
    }

    return { sections, goTo };
  },
});
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  min-width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
