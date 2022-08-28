<template>
  <q-card class="max-w-xl bg-white w-full" flat>
    <q-card-section>
      <div class="flex gap-2">
        <q-chip
          :class="`${
            currentTag == index ? 'bg-accent text-white' : 'bg-secondary'
          } px-2 py-1`"
          v-for="(tag, index) in tags"
          :key="index"
          clickable
          @click="() => changeTag(index)"
        >
          {{ tag }}
        </q-chip>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="">
        <div class="flex gap-2">
          <div
            class=""
            v-for="(item, ind) in trending[`${tags[currentTag]}`]"
            :key="ind"
          >
            <div class="" v-if="item && ind < 4">
              <router-link :to="`product/${item.id}`">
                <q-img
                  :src="item.image"
                  class="w-16 h-16 rounded-lg ring-2 ring-yellow-400"
                />
              </router-link>
            </div>
            <div class="gt-sm" v-if="item && ind > 3">
              <router-link :to="`product/${item.id}`">
                <q-img
                  :src="item.image"
                  class="w-16 h-16 rounded-lg ring-2 ring-yellow-400"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script>
import { ref } from "vue";
export default {
  props: ["tags", "trending"],
  setup() {
    let currentTag = ref(0);
    const changeTag = (index) => {
      currentTag.value = index;
    };
    return {
      currentTag,
      changeTag,
      slide: ref(0),
    };
  },
};
</script>
