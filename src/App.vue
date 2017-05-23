<template>
    <main id="page">
        <section class="flex three">
            <aside>
                <div class="field">
                    <div>Start Time</div>
                    <vue-timepicker v-model="start" format="HH:mm" @change="recalc"></vue-timepicker>
                </div>

                <div class="field">
                    <div>Duration</div>
                    <vue-timepicker v-model="duration" format="H:mm" @change="recalc"></vue-timepicker>
                </div>

            </aside>
            <article class="two-third">
                <paragraph-item v-for="(par, idx) in paragraphs" :paragraph="par" :index="idx"></paragraph-item>
            </article>
        </section>
        <div id="target" contenteditable="true" @paste="handlePaste">(target)</div>
    </main>
</template>
<style>
    #page > section {
        margin: 0 auto;
        max-width: 960px;
        padding: 80px;
    }

    .field {
        margin-bottom: 1em;
    }
</style>

<script>
  import VueTimepicker from 'vue2-timepicker'
  import Paragraphs from './Paragraphs'

  const _paragraphs = new Paragraphs()

  export default {
    data() {
      return {
        start: {HH: '10', mm: '00'},
        duration: {H: '1', mm: '00'},
        paragraphs: []
      }
    },
    methods: {
      startDate() {
        const today = new Date()
        const iHour = parseInt(this.start.HH)
        const iMin = parseInt(this.start.mm)
        today.setHours(iHour, iMin, 0, 0)
        return today
      },
      durationMin() {
        const iHour = parseInt(this.duration.H)
        const iMin = parseInt(this.duration.mm)
        return (iHour * 60) + iMin
      },
      recalc(){
        this.paragraphs = _paragraphs.calculate(this.startDate(), this.durationMin())
      },
      handlePaste(e){
        e.stopPropagation()
        e.preventDefault()
        const pastedData = e.clipboardData.getData('Text');
        _paragraphs.parse(pastedData)
        this.recalc()
      }
    },
    components: {VueTimepicker}
  }
</script>