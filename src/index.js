
import './style.css';
import './views/SearchView';
import {AppView} from "./views/AppView";

document.body.insertAdjacentHTML('afterbegin', '<div id="app" class="wrapper"></div>');
const app = new AppView();
