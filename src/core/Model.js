import md5 from "blueimp-md5";

export default class Model {
  constructor(query) {
    this.query = query;
  }

  init() {

    this.addFetchLogic();
  }

  set(propertyName, value) {

  }

  get(propertyName, value) {
    return value;
  }

  getFetchUrl(query) {
    const apiKey = 'cf523a4e86f6a8872fe2ea0e724cc9af';
    const privateKey = 'abeb0a7bcc5bb9080d450a176f08ebbfe196f2c1';
    const ts = +new Date();
    const hash = md5(ts + privateKey + apiKey);
    return `http://gateway.marvel.com/v1/public/comics?title=${query}&ts=${ts}&apikey=${apiKey}&hash=${hash}`;
  }

  addFetchLogic() {
    fetch(this.getFetchUrl(this.query)/*this.searchBar.value*/)
      .then((response) => {
        return response.json()
      })
      .then((resp) => {
        const results = resp.data.results;
        //console.log("response: ", results);
        const titles = results.map(item => item.title);
        const images = results.map(item => item.images);
        console.log(titles /*images*/);
      })
      .catch((error) => {
        console.log('error', error)
      })

  }
}