<script lang="ts" setup>
import { computed } from "vue";
import { useApi, useStores } from "@directus/extensions-sdk";
import { useRouter } from "vue-router";

const router = useRouter();
const { useCollectionsStore } = useStores();
const collectionsStore = useCollectionsStore();

const items = computed(() => {
  return collectionsStore.collections
    .filter((c) => !c.collection.startsWith("directus_") && !c.meta.hidden)
    .map((c) => ({
      name: c.name,
      key: c.collection,
      note: c.meta.note,
    }));
});

const headers = computed(() => [
  { text: "Collection", value: "name", width: 200, sortable: true },
  { text: "Note", value: "note", width: 360, sortable: true },
]);

function onRowClick(event) {
  router.push(`/content/${event.item.key}`);
}
</script>

<template>
  <private-view title="Collections">
    <VTable
      :items="items"
      itemKey="collection"
      :headers="headers"
      show-resize
      @click:row="onRowClick"
    >
      {{ collection }}
    </VTable>
  </private-view>
</template>
