/*
	overlay.js v0.1 by NettoNE

	Usage:
	overlay(); or overlay({ remove: false });

	Remove:
	overlay({ remove: true });
*/

// CONSTs
const Z_INDEX = 9998;
const OVERLAY_CLASS_NAME = "js-overlay";

export function overlay({ remove } = {}) {
	let overlayElement = document.querySelector(`.${OVERLAY_CLASS_NAME}`);

	if (remove) {
		if (overlayElement) overlayElement.remove();
		return;
	}

	if (!overlayElement) {
		overlayElement = document.createElement("div");
		overlayElement.classList.add(OVERLAY_CLASS_NAME);

		Object.assign(overlayElement.style, {
			position: "fixed",
			inset: "0",
			backgroundColor: "rgba(0,0,0,.5)",
			zIndex: Z_INDEX
		});

		document.body.appendChild(overlayElement);
	}

	return overlayElement;
}
