require('custom-event-polyfill');

import './app.css';
import { main } from './clicker/main';

const gameContainer = main();

document.getElementById('root').appendChild(gameContainer);
