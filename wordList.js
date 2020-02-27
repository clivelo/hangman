const url = "https://en.wiktionary.org/w/api.php?action=parse&format=json&prop=wikitext&page=Wiktionary:Frequency_lists/PG/2006/04/1-10000";
let regExp = /\|\|\ \[\[([^\]]+)\]\]/g;
var wordList = {};

function preload() {
  loadJSON(url, getData, 'jsonp');

  function getData(data) {
    wordList = [...data.parse.wikitext['*'].matchAll(regExp)];
    processWords();
  }

  function extractColumn(arr, column) {
    return arr.map(x => x[column])
  }

  function processWords() {
    wordList = extractColumn(wordList, 1);
    wordList = wordList.map(a => a.toUpperCase());
    wordList = wordList.filter(function(item) {
      return item.length > 4 && item.length < 11 && item.match(/^[A-Z]+$/i)
    });
  }
}