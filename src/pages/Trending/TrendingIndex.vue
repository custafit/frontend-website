<template>
  <q-page class="">
    <router-view />
    <div class="flex justify-center items-center h-full">
      <div class="max-w-3xl w-full h-full relative">
        <div class="md:absolute fixed inline z-10 right-0 bottom-20">
          <div class="p-5 flex gap-2 flex-col">
            <div class="">
              <q-btn
                flat
                round
                :color="user ? 'red' : 'white'"
                :icon="user ? 'favorite' : 'favorite'"
              />
              <div class="font-bold text-white text-sm">
                {{ posts[slide].likes }} likes
              </div>
            </div>
            <div class="">
              <q-btn flat round color="white" icon="shopping_cart" />
              <div class="font-bold text-white text-sm">Buy Now</div>
            </div>
          </div>
        </div>
        <q-carousel
          vertical
          swipeable
          animated
          transition-prev="slide-down"
          transition-next="slide-up"
          v-model="slide"
          class="bg-gray-900 flex justify-center items-center md:h-full h-720px w-screen"
        >
          <q-carousel-slide
            :name="index"
            class="h-full relative place-items-center"
            v-for="(post, index) in posts"
            :key="index"
          >
            <q-img :src="post.image" class="w-screen md:w-96 object-fit" />
          </q-carousel-slide>
        </q-carousel>
      </div>
      <!-- <q-carousel
          v-model="slide"
          vertical
          transition-prev="slide-down"
          transition-next="slide-up"
          swipeable
          animated
          padding
          class="bg-gray-900 text-white shadow-1 rounded-borders min-h-96"
        >
          <q-carousel
            v-for="(post, index) in posts"
            :key="index"
            class="flex justify-center items-center h-full w-full"
          >
            <q-img class="w-full" :src="post.image" />
            <div class="font-bold text-white">{{ post.id }}</div>
          </q-carousel>
        </q-carousel> -->
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let posts = [
      { id: 1, image: "https://picsum.photos/id/100/200/300", likes: 1 },
      { id: 2, image: "https://picsum.photos/id/137/200/300", likes: 3 },
      { id: 3, image: "https://picsum.photos/id/147/200/300", likes: 2 },
      { id: 4, image: "https://picsum.photos/id/117/200/300", likes: 4 },
      { id: 5, image: "https://picsum.photos/id/127/200/300", likes: 5 },
    ];
    return {
      slide: ref(0),
      user: null,
      posts,
    };
  },
};
</script>

<style></style>
