<template>
    <div class="paragraph-item">#{{ index }} - {{ paragraph.characters }} characters</div>
</template>
<script>
  export default {
    props: ['paragraph', 'index']
  }
</script>