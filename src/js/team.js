export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже добавлен');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    this.members = [...this.members];
  }
}
