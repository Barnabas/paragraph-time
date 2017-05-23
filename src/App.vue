<template>
    <main id="page">
        <section class="flex three">
            <aside>
                <div>Start Time</div>
                <div>Duration</div>
            </aside>
            <article class="two-third">
                <paragraph-item></paragraph-item>
            </article>
        </section>
    </main>
</template>
<style>
    #page > section {
        margin: 0 auto;
        max-width: 960px;
        padding: 80px;
    }
</style>

<script>
  export default {
    data() {
      return {
        inputText: '',
        paragraphs: []
      }
    }
  }
</script>