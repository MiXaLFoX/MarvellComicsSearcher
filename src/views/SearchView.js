import View from '../core/View.js';
import md5 from "blueimp-md5";

export default class SearchView extends View {
  constructor(listObject) {
    super({selector: '#search'});
    this.listObject = listObject;
    this.init();
  }

  init() {
    this.render();
    this.searchBar = this.element.querySelector('#searchInput');
    this.searchBtn = this.element.querySelector('#searchBtn');
    this.addFetchLogic();
  }

  getFetchUrl(query) {
    const apiKey = 'cf523a4e86f6a8872fe2ea0e724cc9af';
    const privateKey = 'abeb0a7bcc5bb9080d450a176f08ebbfe196f2c1';
    const ts = +new Date();
    const hash = md5(ts + privateKey + apiKey);
    return `http://gateway.marvel.com/v1/public/comics?title=${query}&ts=${ts}&apikey=${apiKey}&hash=${hash}`;

  }

  addFetchLogic() {
    var self = this;
    this.searchBtn.addEventListener('click', () => {
      fetch(this.getFetchUrl(this.searchBar.value))
        .then(function (response) {
          return response.json()
        })
        .then(function (resp) {
          self.listObject.setContent(resp.data);
          // console.log('data', data)
        })
        .catch(function (error) {
          self.listObject.setContent(error);
          // console.log('error', error)
        })

      // app.list
    });
  }


  render() {
    this.element.innerHTML = `<input id="searchInput" class="search__input" type="text"/>
                              <input id="searchBtn" class="search__btn" type="button" value="search"/>`;
  }
}


