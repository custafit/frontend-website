<template>
  <q-layout view="hHh lpR fFf" class="bg-gray-900">
    <q-header class="bg-gray-800 text-grey-8 q-py-xs">
      <q-toolbar class="flex justify-between">
        <div class="flex gap-2">
          <q-btn
            dense
            flat
            round
            class="text-white"
            to="/"
            aria-label="Menu"
            icon="home"
          />
          <q-toolbar-title>
            <router-link
              to="/"
              class="font-bold text-xl text-orange-400 no-underline"
              >Trending</router-link
            >
          </q-toolbar-title>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="flex">
      <router-view />
    </q-page-container>
    <q-footer class="lt-md">
      <q-toolbar class="flex justify-around">
        <q-btn
          flat
          dense
          round
          aria-label="Home"
          icon="home"
          to="/"
          :class="` ${$route.path == '/' ? 'bg-accent' : ''}`"
        />

        <q-btn
          flat
          dense
          round
          aria-label="category"
          icon="category"
          to="/category"
          :class="` ${$route.path == '/category' ? 'bg-accent' : ''}`"
        />
        <q-btn
          flat
          dense
          round
          aria-label="hot"
          icon="whatshot"
          to="/trending"
          :class="` ${$route.path == '/trending' ? 'bg-accent' : ''}`"
        />
        <q-btn
          flat
          dense
          round
          aria-label="hot"
          icon="search"
          to="/search"
          :class="` ${$route.path == '/search' ? 'bg-accent' : ''}`"
        />
        <q-btn
          flat
          dense
          round
          aria-label="Profile"
          icon="account_circle"
          to="/profile"
          :class="` ${$route.path == '/profile' ? 'bg-accent' : ''}`"
        />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const search = ref("");

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    return {
      leftDrawerOpen,
      search,
      toggleLeftDrawer,
      links1: [
        { icon: "home", text: "Home", to: "/" },
        { icon: "whatshot", text: "Trending", to: "/trending" },
        { icon: "person", text: "Profile", to: "/profile" },
      ],
    };
  },
};
</script>
