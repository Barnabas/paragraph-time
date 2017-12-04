<template>
    <v-menu lazy :close-on-content-click="false" v-model="menu" transition="scale-transition" offset-y full-width
            :nudge-right="40" max-width="290px" min-width="290px">
        <v-text-field slot="activator" :label="label" v-model="value" prepend-icon="access_time"
                      readonly></v-text-field>
        <v-time-picker v-model="localValue" autosave></v-time-picker>
    </v-menu>
</template>
<script>
  export default {
    data() {
      return {menu: false}
    },
    computed: {
      localValue: {
        get() {
          return this.value
        },
        set(val) {
          this.$emit('input', val)
        }
      }
    },
    props: ['value', 'label']
  }
</script>