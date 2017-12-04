<template>
    <v-app>
        <v-toolbar app dark color="primary">
            <v-icon large>timer</v-icon>
            <v-toolbar-title>Paragraph Time</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn href="https://github.com/Barnabas/paragraph-time" icon><v-icon>info</v-icon></v-btn>
        </v-toolbar>
        <v-content>
            <v-container>
                <p>This is a tool to help estimate the time to spend discussing material.</p>
                <pt-paragraphs></pt-paragraphs>
            </v-container>
        </v-content>
        <v-footer app>
            <v-container>footer</v-container>
        </v-footer>
    </v-app>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>
