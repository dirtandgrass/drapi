import './styles.css';
import drapi from './js/drapi';

window.onload = x => initDrapi(x);

const initDrapi = win => {
	console.log(win);

	const pad = new drapi(document.getElementById('app'));
};
