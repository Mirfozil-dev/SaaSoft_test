<script setup lang="ts">
import type { Account } from "@/types.ts";
import {accountTypes} from "@/accounts.data.ts";

const props = defineProps<{
  account: Account
}>()
</script>

<template>
  <v-row>
    <v-col>
      <v-textarea
          :model-value="account.labels"
          rows="1"
          auto-grow
          label="Метки"
          variant="outlined"
          density="compact"
          color="primary"
      ></v-textarea>
    </v-col>
    <v-col>
      <v-select
          :model-value="account.type"
          :items="accountTypes"
          label="Тип записи"
          variant="outlined"
          density="compact"
          color="primary"
      ></v-select>
    </v-col>
    <v-col>
      <v-text-field
          :model-value="account.login"
          label="Логин"
          variant="outlined"
          density="compact"
          color="primary"
          required
      ></v-text-field>
    </v-col>
    <v-col>
      <v-text-field
          :model-value="account.password"
          label="Пароль"
          variant="outlined"
          density="compact"
          color="primary"
          required
      ></v-text-field>
    </v-col>
    <v-col cols="1" class="d-flex justify-end h-100">
      <v-btn icon size="small" rounded="lg">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>