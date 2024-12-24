<script setup lang="ts">
import AccountsHeader from "@/components/AccountsHeader.vue";
import AccountsTip from "@/components/AccountsTip.vue";
import AccountsList from "@/components/AccountsList.vue";
</script>

<template>
  <v-container>
    <v-card>
      <accounts-header />
      <v-card-text>
        <accounts-tip />
        <accounts-list />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
</style>
