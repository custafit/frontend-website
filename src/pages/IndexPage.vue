<template>
  <q-page>
    <router-view />
    <div class="p-5 flex flex-col w-full justify-center items-center">
      <div class="w-full max-w-4xl">
        <div class="font-bold text-gray-600">Trending</div>
        <div class="py-2">
          <trending-bar
            :tags="['all', 'clothing', 'art', 'crafts', 'others']"
            :trending="{
              all: [
                { id: 1, image: 'https://picsum.photos/id/100/200/300' },
                { id: 2, image: 'https://picsum.photos/id/137/200/300' },
                { id: 3, image: 'https://picsum.photos/id/147/200/300' },
                { id: 4, image: 'https://picsum.photos/id/117/200/300' },
                { id: 5, image: 'https://picsum.photos/id/127/200/300' },
              ],
              clothing: [
                { id: 1, image: 'https://picsum.photos/id/137/200/300' },
              ],
              art: [{ id: 1, image: 'https://picsum.photos/id/147/200/300' }],
              crafts: [
                { id: 1, image: 'https://picsum.photos/id/127/200/300' },
              ],
              others: [
                { id: 1, image: 'https://picsum.photos/id/117/200/300' },
              ],
            }"
          />
        </div>
      </div>
      <div class="max-w-4xl w-full">
        <div class="font-bold text-gray-600">Latest Posts</div>
        <div class="w-full">
          <Post
            :product="{
              name: 'ColorBlock Shirt',
              price: '22',
              tags: ['shirt', 'cloth', 'male'],
              image: '',
              rating: '4.2',
              likes: '',
            }"
            :seller="{
              sellerId: '1',
              name: 'UsPolo',
              image: 'https://cdn.quasar.dev/img/avatar.png',
            }"
            :user="{ liked: false, cart: [] }"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import Post from "src/components/post/PostItem.vue";
import TrendingBar from "src/components/trending/TrendingBar.vue";
export default {
  components: { Post, TrendingBar },
  setup() {},
};
</script>
