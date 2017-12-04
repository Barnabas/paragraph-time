<template>
    <section>
        <v-layout>
            <v-flex md6 class="pr-2">
                <pt-time-menu label="Start Time" v-model="startString"></pt-time-menu>
                <pt-time-menu label="End Time" v-model="endString"></pt-time-menu>
                <div>Duration: <strong>{{durationMin}}</strong> minutes</div>
            </v-flex>
            <v-flex md6 class="pl-2">
                <v-slider :label="`Introduction: ${introMin} min.`" v-model="introMin" min="0" max="15"></v-slider>
                <v-slider :label="`Conclusion: ${conclusionMin} min.`" v-model="conclusionMin" min="0" max="15"></v-slider>
                <div>Available: <strong>{{availableMin}}</strong> minutes</div>
            </v-flex>
        </v-layout>
        <v-layout align-baseline>
            <v-flex xs2>
                <v-text-field v-model.number="first" type="number" label="First Paragraph" min="1" max="99"></v-text-field>
            </v-flex>
            <v-flex class="subheading text-xs-right px-2">
                {{paragraphs.length}} paragraphs, {{paragraphTime}} each
            </v-flex>
            <div>
                <v-btn @click="addParagraph()" icon fab dark color="primary">
                    <v-icon>add</v-icon>
                </v-btn>
            </div>
        </v-layout>
        <v-card v-for="(paragraph, idx) in paragraphs" :key="paragraph.key" class="paragraph">
            <v-card-text class="py-1">
                <v-layout align-baseline>
                    <h3>¶{{idx + first}}</h3>
                    <v-select :items="offsets" v-model="paragraph.offset" hide-details></v-select>
                    <div>
                        <strong>Start:</strong> {{startTimes[idx]}}
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn @click="removeParagraph(idx)" icon fab small color="warning">
                        <v-icon>clear</v-icon>
                    </v-btn>
                </v-layout>
            </v-card-text>
        </v-card>
    </section>
</template>
<script>
  import {DateTime, Duration} from 'luxon'

  const TIME_FORMAT = 'h:mma'
  let key = 0

  export default {
    data() {
      return {
        startString: "10:00am",
        endString: "11:00am",
        introMin: 0,
        conclusionMin: 0,
        first: 1,
        paragraphs: [],
        offsets: [
          {value: -90, text: 'Short'},
          {value: 0, text: 'Normal'},
          {value: 90, text: 'Long'},
          {value: 180, text: 'Extra Long'}
        ]
      }
    },
    mounted() {
      // while (this.paragraphs.length < 10) this.addParagraph()
    },
    computed: {
      startTime() {
        return DateTime.fromString(this.startString, TIME_FORMAT)
      },
      endTime() {
        return DateTime.fromString(this.endString, TIME_FORMAT)
      },
      durationMin() {
        return Math.abs(this.endTime.diff(this.startTime).as('minutes'))
      },
      availableMin() {
        return Math.max(this.durationMin - this.introMin - this.conclusionMin, 1)
      },
      paragraphSecs() {
        if (this.paragraphs.length < 1) return 0
        const offsetTotal = this.paragraphs.reduce((total, par) => par.offset + total, 0)
        return Math.round(((this.availableMin * 60) - offsetTotal) / this.paragraphs.length)
      },
      paragraphTime() {
        const d = Duration.fromObject({seconds: this.paragraphSecs}).shiftTo('minutes', 'seconds')
        return `${d.minutes} min. ${d.seconds} sec.`
      },
      startTimes() {
        const start = this.startTime
        const avgSec = this.paragraphSecs
        let offset = this.introMin * 60
        return [offset].concat(this.paragraphs.map(par => {
          return (offset += par.offset + avgSec)
        })).map(val => start.plus({seconds: val}).toFormat(TIME_FORMAT))
      },
    },
    methods: {
      addParagraph() {
        this.paragraphs.push({key: key++, offset: 0})
      },
      removeParagraph(idx) {
        this.paragraphs.splice(idx, 1)
      }
    }
  }
</script>
<style>
    .paragraph h3 {
        width: 3rem;
    }
</style>