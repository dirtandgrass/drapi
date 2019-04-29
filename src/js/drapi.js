export default class {
	constructor(container) {
		this.container = container;

		const sizeInfo = container.getBoundingClientRect();

		const layers = document.createElement('canvas');

		layers.style.width = (sizeInfo.width == 0 ? '200' : sizeInfo.width) + 'px';
		layers.style.height =
			(sizeInfo.height == 0 ? '200' : sizeInfo.height) + 'px';

		container.appendChild(layers);
	}
}
