
import './style.css';
import './views/SearchView';
import './views/AppView';
import {AppView} from "./views/AppView";

document.body.insertAdjacentHTML('afterbegin', '<div id="app" class="wrapper"></div>');
new AppView();