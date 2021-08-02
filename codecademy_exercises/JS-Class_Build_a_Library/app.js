
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = []    
  }
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }
  set isCheckedOut(input){
    return this._isCheckedOut = input;
  }
  toggleCheckOutStatus(input) {
    if (input === true) return this.isCheckedOut = false;
    if (input === false) return this.isCheckedOut = true;
  }
  getAverageRating() {
    
    return this.ratings.reduce((n1, n2) => (n1 + n2)) / this.ratings.length;
  }
  addRating(input) {
    (Math.min(input) >= 1 && Math.max(input) <= 5 ) ? this._ratings.push(input) : console.log('The rating range should be 1-5.')
  }
}

class Book extends Media{
  constructor(title, author, pages) {
    super(title)
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
}

class Movie extends Media{
  constructor(title, director, runTime) {
    super(title)
    this._director = director;
    this._runTime = runTime;
    this._movieCast = [];
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}

class CD extends Media{
  constructor(title, artist, songs) {
    super(title)
    this._artist = artist;
    this._songs = songs;
  }
  get artist(){
    return this._artist;
  }
  get songs(){
    return this._songs;
  }
  addSong(input){
    this.songs.push(input)
  }
  shuffle(){
    let a = Math.floor(Math.random()*this.songs.length)
    let b = Math.floor(Math.random()*this.songs.length)
    let c = Math.floor(Math.random()*this.songs.length)
    return [this.songs[a], this.songs[b], this.songs[c]]
    // console.log(this.songs[i])
  }
}
//16-19
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544)
historyOfEverything.toggleCheckOutStatus(true)
console.log(historyOfEverything.isCheckedOut )
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log('A Short History of Nearly Everything rating: ' + historyOfEverything.getAverageRating())

//20-24
const speed = new Movie('Jan de Bont', 'Jan de Bont', 116)
speed.toggleCheckOutStatus(true)
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log('speed rating: ' + speed.getAverageRating())

//25
const ivana = new CD('Song Book', 'Ivana Wong', ['song1', 'song2', 'song3', 'song4', 'song5', 'song6', 'song8'])
console.log('Random song from CD Ivana: ' + ivana.shuffle())

class Catalog {
  constructor(name){
    this._name = name;
    this._media = [];

  }
  get media(){
    return this._media;
  }
  addCatalog(input){
    this._media.push(input)
  }
}

let catalog = new Catalog('catalog')
catalog.addCatalog(speed)
catalog.addCatalog(ivana)
catalog.addCatalog(historyOfEverything)

console.log(catalog.media)

