const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/profile",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Profile/User/UserIndex.vue") },
    ],
  },
  {
    path: "/category",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/categories/CategoriesIndex.vue"),
      },
    ],
  },
  {
    path: "/trending",
    component: () => import("layouts/TrendingLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Trending/TrendingIndex.vue"),
      },
    ],
  },
  {
    path: "/search",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Search/SearchIndex.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
