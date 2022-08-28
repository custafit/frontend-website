<template>
  <q-layout view="hHh lpR fFf" class="h-screen overflow-hidden">
    <q-header class="bg-white text-grey-8 q-py-xs">
      <q-toolbar class="flex justify-between">
        <div class="flex gap-2">
          <q-btn
            flat
            dense
            round
            @click="toggleLeftDrawer"
            aria-label="Menu"
            icon="menu"
          />
          <q-toolbar-title>
            <router-link
              to="/"
              class="font-bold text-2xl text-orange-400 no-underline"
              >custafit</router-link
            >
          </q-toolbar-title>
        </div>

        <div class="flex gap-2">
          <div class="">
            <q-input
              standout="bg-primary text-white "
              v-model="text"
              label="search something"
              :dense="true"
              class="gt-sm"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <div class="flex gap-2">
            <q-btn
              round
              dense
              flat
              color="grey-8"
              icon="category"
              to="/category"
              class="gt-sm"
            >
              <!-- <q-badge color="red" text-color="white" floating> 2 </q-badge> -->
              <q-tooltip>Categories</q-tooltip>
            </q-btn>
            <q-btn
              round
              dense
              flat
              color="grey-8"
              icon="account_circle"
              class="gt-sm"
              to="/profile"
            >
              <!-- <q-badge color="red" text-color="white" floating> 2 </q-badge> -->
              <q-tooltip>Profile</q-tooltip>
            </q-btn>
            <q-btn round dense flat color="grey-8" icon="chat_bubble">
              <!-- <q-badge color="red" text-color="white" floating> 2 </q-badge> -->
              <q-tooltip>Chat</q-tooltip>
            </q-btn>
            <q-btn round dense flat color="grey-8" icon="shopping_cart">
              <!-- <q-badge color="red" text-color="white" floating> 2 </q-badge> -->
              <q-tooltip>Cart</q-tooltip>
            </q-btn>
            <q-btn round dense flat color="grey-8" icon="notifications">
              <!-- <q-badge color="red" text-color="white" floating> 2 </q-badge> -->
              <q-tooltip>Notifications</q-tooltip>
            </q-btn>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      class="bg-grey-2 fixed"
      :width="240"
    >
      <div class="p-5">
        <router-link
          to="/"
          class="font-bold text-2xl text-orange-400 no-underline"
          >custafit</router-link
        >
      </div>
      <q-list padding>
        <q-item
          v-for="link in links1"
          :key="link.text"
          :to="link.to"
          v-ripple
          clickable
          active-class="bg-accent text-white"
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.text }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-separator class="q-my-md" />
    </q-drawer>

    <q-page-container class="bg-secondary h-full overflow-y scroll">
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
