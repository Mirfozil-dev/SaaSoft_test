<script setup lang="ts">
import AccountsHeader from "@/components/AccountsHeader.vue";

const accountTypes = ['Локальная', 'LDAP'];
</script>

<template>
  <v-container>
    <v-card>
      <accounts-header />
      <v-card-text>
        <v-alert type="info" class="mb-4" density="compact">
          Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;
        </v-alert>
          <v-row>
            <v-col>
              <v-textarea
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
                  :items="accountTypes"
                  label="Тип записи"
                  variant="outlined"
                  density="compact"
                  color="primary"
              ></v-select>
            </v-col>
            <v-col>
              <v-text-field
                  label="Логин"
                  variant="outlined"
                  density="compact"
                  color="primary"
                  required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
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
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
</style>
