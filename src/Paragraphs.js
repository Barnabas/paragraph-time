export default class Paragraphs {
  constructor(input) {
    this.items = []
    this.characters = 0

    this.parse(input)
  }

  parse(input) {
    this.items = []
    if (typeof input !== 'string') return

    const lines = input.split(/\n+/g)
    this.items = lines
      .map(line => new Paragraph(line))
      .filter(par => par.characters > 0)

    this.characters = this.items.reduce((total, item) => total + item.characters, 0)
    // console.log('Parsed ' + this.items.length + ' paragraphs, total characters = ' +  this.characters)
  }

  calculate(start, duration) {
    return this.items
  }

}

class Paragraph {
  constructor(line) {
    this.line = line
    this.characters = line.replace(/\W/g, '').length
  }
}
