<script setup lang="ts">
import type { Account } from "@/types.ts";
import { accountTypes } from "@/accounts.data.ts";
import { computed, ref } from "vue";

const props = defineProps<{
  account: Account
}>()

const isPassVisible = ref(false)

const emit = defineEmits<{
  (e: 'deleteAccount', id: string): void,
  <T extends keyof Account>(e: 'changeAccount', id: string, key: T, value: Account[T]): void
}>()

const togglePasswordVisibility = () => {
  isPassVisible.value = !isPassVisible.value;
};

const removeAccount = () => {
  emit('deleteAccount', props.account.id);
}

const handleChangeLabels = (val: string) => {
  const result: Array<{ text: string }> = []
  val.split(';').forEach(item => {
    result.push({
      text: item,
    });
  })
  emit('changeAccount', props.account.id, 'labels', result)
}

const formattedLabels = computed(() => {
  return props.account.labels.map(item => item.text).join(';')
})
</script>

<template>
  <v-row>
    <v-col>
      <v-textarea
          :model-value="formattedLabels"
          @update:model-value="handleChangeLabels"
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
          @update:model-value="(val: keyof typeof accountTypes) => emit('changeAccount', account.id, 'type', val)"
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
          @update:model-value="(val: string) => emit('changeAccount', account.id, 'login', val)"
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
          @update:model-value="(val: string) => emit('changeAccount', account.id, 'password', val)"
          label="Пароль"
          variant="outlined"
          density="compact"
          color="primary"
          required
          :type="isPassVisible ? 'text' : 'password'"
          :append-inner-icon="isPassVisible ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="togglePasswordVisibility"
      ></v-text-field>
    </v-col>
    <v-col cols="1" class="d-flex justify-end h-100">
      <v-btn @click="removeAccount" icon size="small" rounded="lg">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>