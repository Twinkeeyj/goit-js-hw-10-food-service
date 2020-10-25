import theme from './components/theme'
import menu from './menu.json'
import template from './template/menuTemplate.hbs'

import './styles.css';

document.querySelector('.js-menu').innerHTML = template(menu);

theme().themeChange()

