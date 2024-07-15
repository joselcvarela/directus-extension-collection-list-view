import { defineModule } from "@directus/extensions-sdk";
import CollectionModule from "./collection-module.vue";

export default defineModule({
  id: "collection-module",
  name: "Collection Module View",
  icon: "list",
  routes: [
    {
      path: "",
      component: CollectionModule,
    },
  ],
});
