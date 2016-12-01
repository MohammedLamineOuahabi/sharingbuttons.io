var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppActions = require('../actions/AppActions');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('react/lib/Object.assign');

/**
 * DATA
 */
var _data = {
	"url": "http://sharingbuttons.io",
	"text": "Super fast and easy Social Media Sharing Buttons. No JavaScript. No tracking.",
	"icons": {
		"solid": true,
		"circle": false
	},
	"generalStyling": ".resp-sharing-button__link,\n.resp-sharing-button__icon {\n  display: inline-block\n}\n\n.resp-sharing-button__link {\n  text-decoration: none;\n  color: #fff;\n  margin: 0.5em\n}\n\n.resp-sharing-button {\n  border-radius: 5px;\n  transition: 25ms ease-out;\n  padding: 0.5em 0.75em;\n  font-family: Helvetica Neue,Helvetica,Arial,sans-serif\n}\n\n.resp-sharing-button__icon svg {\n  width: 1em;\n  height: 1em\n}\n\n.resp-sharing-button span {\n  padding-left: 0.4em\n}\n\n/* Non solid icons get a stroke */\n.resp-sharing-button__icon {\n  stroke: #fff;\n  fill: none\n}\n\n/* Solid icons get a fill */\n.resp-sharing-button__icon--solid,\n.resp-sharing-button__icon--solidcircle {\n  fill: #fff;\n  stroke: none\n}\n\n.resp-sharing-button--twitter {\n  background-color: #55acee\n}\n\n.resp-sharing-button--twitter:hover {\n  background-color: #2795e9\n}\n\n.resp-sharing-button--pinterest {\n  background-color: #bd081c\n}\n\n.resp-sharing-button--pinterest:hover {\n  background-color: #8c0615\n}\n\n.resp-sharing-button--facebook {\n  background-color: #3b5998\n}\n\n.resp-sharing-button--facebook:hover {\n  background-color: #2d4373\n}\n\n.resp-sharing-button--tumblr {\n  background-color: #35465C\n}\n\n.resp-sharing-button--tumblr:hover {\n  background-color: #222d3c\n}\n\n.resp-sharing-button--reddit {\n  background-color: #5f99cf\n}\n\n.resp-sharing-button--reddit:hover {\n  background-color: #3a80c1\n}\n\n.resp-sharing-button--google {\n  background-color: #dd4b39\n}\n\n.resp-sharing-button--google:hover {\n  background-color: #c23321\n}\n\n.resp-sharing-button--linkedin {\n  background-color: #0077b5\n}\n\n.resp-sharing-button--linkedin:hover {\n  background-color: #046293\n}\n\n.resp-sharing-button--email {\n  background-color: #777\n}\n\n.resp-sharing-button--email:hover {\n  background-color: #5e5e5e\n}\n\n.resp-sharing-button--xing {\n  background-color: #1a7576\n}\n\n.resp-sharing-button--xing:hover {\n  background-color: #114c4c\n}\n\n.resp-sharing-button--whatsapp {\n  background-color: #25D366\n}\n\n.resp-sharing-button--whatsapp:hover {\n  background-color: #1da851\n}",
	"sizes": {
		"small": false,
		"medium": false,
		"large": true
	},
	"networks": {
		'facebook': {
			'visible': true,
			'name': 'Facebook',
			'icons': {
				'normal': '\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.5H14.5V5.6c0-.9.6-1.1 1-1.1h3V.54L14.17.53C10.24.54 9.5 3.48 9.5 5.37V7.5h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>',
				'solid': '\n    <svg version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n        <g>\n            <path d="M18.768,7.465H14.5V5.56c0-0.896,0.594-1.105,1.012-1.105s2.988,0,2.988,0V0.513L14.171,0.5C10.244,0.5,9.5,3.438,9.5,5.32 v2.145h-3v4h3c0,5.212,0,12,0,12h5c0,0,0-6.85,0-12h3.851L18.768,7.465z"/>\n        </g>\n    </svg>',
				'circle': '\n    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n        <g stroke-width="2px" stroke-linejoin="round" stroke-miterlimit="10" fill="none">\n            <circle stroke-linecap="round" cx="12" cy="12" r="11.5"/>\n            <path d="M15.839 9.5h-2.339v-1.022c0-.524.348-.647.592-.647h1.408v-2.307l-2.351-.007c-2.298 0-2.649 1.719-2.649 2.819v1.164h-2v2h2v7h3v-7h2.095l.244-2z"/>\n        </g>\n    </svg>',
				'solidcircle': '\n    <svg version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n        <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M15.595,11.5H13.5c0,3.013,0,7,0,7h-3 c0,0,0-3.951,0-7h-2v-2h2V8.336c0-1.1,0.352-2.819,2.649-2.819L15.5,5.524V7.83c0,0-1.163,0-1.408,0 c-0.244,0-0.592,0.124-0.592,0.647V9.5h2.339L15.595,11.5z"/>\n    </svg>'
			},
			'style': '.resp-sharing-button--facebook {\n  background-color: #3b5998;\n  border-color: #3b5998;\n}\n\n.resp-sharing-button--facebook:hover,\n.resp-sharing-button--facebook:active {\n  background-color: #2d4373;\n  border-color: #2d4373;\n}',
			'scriptSize': 73.3,
			'requests': 3
		},
		'twitter': {
			'visible': true,
			'name': 'Twitter',
			'icons': {
				'normal': '\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.4 4.83c-.8.37-1.5.38-2.22.02.94-.56.98-.96 1.32-2.02-.88.52-1.85.9-2.9 1.1-.8-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.04.7.12 1.04-3.78-.2-7.12-2-9.37-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.73-.03-1.43-.23-2.05-.57v.06c0 2.2 1.57 4.03 3.65 4.44-.67.18-1.37.2-2.05.08.57 1.8 2.25 3.12 4.24 3.16-1.95 1.52-4.36 2.16-6.74 1.88 2 1.3 4.4 2.04 6.97 2.04 8.36 0 12.93-6.92 12.93-12.93l-.02-.6c.9-.63 1.96-1.22 2.57-2.14z"/></svg>',
				'solid': '\n    <svg version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n        <g>\n            <path d="M23.444,4.834c-0.814,0.363-1.5,0.375-2.228,0.016c0.938-0.562,0.981-0.957,1.32-2.019c-0.878,0.521-1.851,0.9-2.886,1.104 C18.823,3.053,17.642,2.5,16.335,2.5c-2.51,0-4.544,2.036-4.544,4.544c0,0.356,0.04,0.703,0.117,1.036 C8.132,7.891,4.783,6.082,2.542,3.332C2.151,4.003,1.927,4.784,1.927,5.617c0,1.577,0.803,2.967,2.021,3.782 C3.203,9.375,2.503,9.171,1.891,8.831C1.89,8.85,1.89,8.868,1.89,8.888c0,2.202,1.566,4.038,3.646,4.456 c-0.666,0.181-1.368,0.209-2.053,0.079c0.579,1.804,2.257,3.118,4.245,3.155C5.783,18.102,3.372,18.737,1,18.459 C3.012,19.748,5.399,20.5,7.966,20.5c8.358,0,12.928-6.924,12.928-12.929c0-0.198-0.003-0.393-0.012-0.588 C21.769,6.343,22.835,5.746,23.444,4.834z"/>\n        </g>\n    </svg>',
				'circle': '\n    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n        <g stroke-width="2px" stroke-linejoin="round" stroke-miterlimit="10">\n            <path d="M18.5 7.354s-1.351.146-1.95.266c-.48-.513-1.164-.832-1.921-.832-1.454 0-2.633 1.179-2.633 2.632 0 .205.023.408.068.599-2.187-.108-4.126-1.157-5.424-2.75-.227.39-.357.841-.357 1.324 0 .914.465 1.718 1.171 2.19-.431-.014-.837-.132-1.192-.33v.035c0 1.274.907 2.338 2.111 2.579-.386.106-.792.121-1.188.046.335 1.045 1.307 1.806 2.458 1.829-1.125.882-2.522 1.25-3.896 1.089 1.165.747 2.549 1.184 4.035 1.184 4.841 0 7.488-4.012 7.488-7.489l-.008-.34c.514-.373.885-1.504 1.238-2.032z"/>\n            <circle stroke-linecap="round" cx="12" cy="12" r="11.5"/>\n        </g>\n    </svg>',
				'solidcircle': '\n    <svg version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n        <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M17.262,9.385 c0.006,0.113,0.008,0.226,0.008,0.34c0,3.478-2.647,7.489-7.488,7.489c-1.486,0-2.87-0.437-4.035-1.184 c1.374,0.161,2.771-0.207,3.896-1.089c-1.151-0.022-2.123-0.783-2.458-1.829c0.396,0.075,0.803,0.061,1.188-0.046 c-1.204-0.24-2.111-1.305-2.111-2.579c0-0.011,0-0.023,0-0.035c0.355,0.197,0.762,0.315,1.192,0.33 c-0.706-0.473-1.171-1.277-1.171-2.19c0-0.482,0.13-0.934,0.356-1.324c1.298,1.593,3.237,2.642,5.425,2.75 c-0.045-0.191-0.068-0.394-0.068-0.599c0-1.454,1.179-2.632,2.633-2.632c0.757,0,1.44,0.319,1.921,0.832 c0.6-0.119,1.95-0.266,1.95-0.266C18.147,7.882,17.776,9.013,17.262,9.385z"/>\n    </svg>'
			},
			'style': '.resp-sharing-button--twitter {\n  background-color: #55acee;\n  border-color: #55acee;\n}\n\n.resp-sharing-button--twitter:hover,\n.resp-sharing-button--twitter:active {\n  background-color: #2795e9;\n  border-color: #2795e9;\n}',
			'scriptSize': 52.7,
			'requests': 4
		},
		'google': {
			'visible': true,
			'name': 'Google+',
			'icons': {
				'normal': '\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.37 12.93c-.73-.52-1.4-1.27-1.4-1.5 0-.43.03-.63.98-1.37 1.23-.97 1.9-2.23 1.9-3.57 0-1.22-.36-2.3-1-3.05h.5c.1 0 .2-.04.28-.1l1.36-.98c.16-.12.23-.34.17-.54-.07-.2-.25-.33-.46-.33H7.6c-.66 0-1.34.12-2 .35-2.23.76-3.78 2.66-3.78 4.6 0 2.76 2.13 4.85 5 4.9-.07.23-.1.45-.1.66 0 .43.1.83.33 1.22h-.08c-2.72 0-5.17 1.34-6.1 3.32-.25.52-.37 1.04-.37 1.56 0 .5.13.98.38 1.44.6 1.04 1.85 1.86 3.55 2.28.87.23 1.82.34 2.8.34.88 0 1.7-.1 2.5-.34 2.4-.7 3.97-2.48 3.97-4.54 0-1.97-.63-3.15-2.33-4.35zm-7.7 4.5c0-1.42 1.8-2.68 3.9-2.68h.05c.45 0 .9.07 1.3.2l.42.28c.96.66 1.6 1.1 1.77 1.8.05.16.07.33.07.5 0 1.8-1.33 2.7-3.96 2.7-1.98 0-3.54-1.23-3.54-2.8zM5.54 3.9c.32-.38.75-.58 1.23-.58h.05c1.35.05 2.64 1.55 2.88 3.35.14 1.02-.08 1.97-.6 2.55-.32.37-.74.56-1.23.56h-.03c-1.32-.04-2.63-1.6-2.87-3.4-.13-1 .08-1.92.58-2.5zM23.5 9.5h-3v-3h-2v3h-3v2h3v3h2v-3h3z"/></svg>',
				'solid': '\n    <svg version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n        <g>\n            <path d="M11.366,12.928c-0.729-0.516-1.393-1.273-1.404-1.505c0-0.425,0.038-0.627,0.988-1.368 c1.229-0.962,1.906-2.228,1.906-3.564c0-1.212-0.37-2.289-1.001-3.044h0.488c0.102,0,0.2-0.033,0.282-0.091l1.364-0.989 c0.169-0.121,0.24-0.338,0.176-0.536C14.102,1.635,13.918,1.5,13.709,1.5H7.608c-0.667,0-1.345,0.118-2.011,0.347 c-2.225,0.766-3.778,2.66-3.778,4.605c0,2.755,2.134,4.845,4.987,4.91c-0.056,0.22-0.084,0.434-0.084,0.645 c0,0.425,0.108,0.827,0.33,1.216c-0.026,0-0.051,0-0.079,0c-2.72,0-5.175,1.334-6.107,3.32C0.623,17.06,0.5,17.582,0.5,18.098 c0,0.501,0.129,0.984,0.382,1.438c0.585,1.046,1.843,1.861,3.544,2.289c0.877,0.223,1.82,0.335,2.8,0.335 c0.88,0,1.718-0.114,2.494-0.338c2.419-0.702,3.981-2.482,3.981-4.538C13.701,15.312,13.068,14.132,11.366,12.928z M3.66,17.443 c0-1.435,1.823-2.693,3.899-2.693h0.057c0.451,0.005,0.892,0.072,1.309,0.2c0.142,0.098,0.28,0.192,0.412,0.282 c0.962,0.656,1.597,1.088,1.774,1.783c0.041,0.175,0.063,0.35,0.063,0.519c0,1.787-1.333,2.693-3.961,2.693 C5.221,20.225,3.66,19.002,3.66,17.443z M5.551,3.89c0.324-0.371,0.75-0.566,1.227-0.566l0.055,0 c1.349,0.041,2.639,1.543,2.876,3.349c0.133,1.013-0.092,1.964-0.601,2.544C8.782,9.589,8.363,9.783,7.866,9.783H7.865H7.844 c-1.321-0.04-2.639-1.6-2.875-3.405C4.836,5.37,5.049,4.462,5.551,3.89z"/>\n            <polygon points="23.5,9.5 20.5,9.5 20.5,6.5 18.5,6.5 18.5,9.5 15.5,9.5 15.5,11.5 18.5,11.5 18.5,14.5 20.5,14.5 20.5,11.5  23.5,11.5 	"/>\n        </g>\n    </svg>',
				'circle': '\n    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n        <g stroke-width="2px" stroke-linejoin="round" stroke-miterlimit="10" fill="none">\n            <circle stroke-linecap="round" cx="12" cy="12" r="11.5"/>\n            <ellipse transform="matrix(.707 -.707 .707 .707 -3.011 9.726)" cx="10.236" cy="8.498" rx="2.889" ry="3.076"/>\n            <path d="M9.849 5.5h4.192"/><ellipse cx="10.236" cy="16.318" rx="4.476" ry="2.592"/>\n            <path d="M11.85 11.104c-.929 2.347 2.862 1.639 2.862 5.214M17.5 7v5M20 9.5h-5"/>\n        </g>\n    </svg>',
				'solidcircle': '\n    <svg version="1.1"x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n        <g>\n            <path d="M12.646,8.608C12.626,7.938,12.344,7.3,11.854,6.81c-0.513-0.513-1.18-0.795-1.878-0.795c-0.627,0-1.207,0.235-1.634,0.662 C7.895,7.124,7.66,7.732,7.681,8.389c0.021,0.669,0.303,1.308,0.794,1.797c0.966,0.968,2.616,1.031,3.511,0.134 C12.433,9.873,12.667,9.265,12.646,8.608z"/>\n            <path d="M10.164,14.226c-2.155,0-3.977,0.958-3.977,2.093c0,1.135,1.821,2.092,3.977,2.092s3.976-0.958,3.976-2.092 C14.14,15.184,12.319,14.226,10.164,14.226z"/>\n            <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M10.164,19.411 c-2.791,0-4.977-1.358-4.977-3.092c0-1.734,2.186-3.093,4.977-3.093c0.832,0,1.599,0.133,2.281,0.349 c-0.58-0.392-1.257-0.858-1.311-1.692c-0.254,0.06-0.514,0.101-0.783,0.101c-0.965,0-1.883-0.387-2.584-1.089 C7.096,10.224,6.71,9.345,6.682,8.42C6.651,7.484,6.99,6.614,7.635,5.969c0.631-0.631,1.509-0.932,2.397-0.918V5h3.937v1h-1.533 c0.04,0.037,0.086,0.064,0.125,0.102c0.671,0.672,1.057,1.55,1.086,2.475c0.029,0.936-0.31,1.806-0.954,2.45 c-0.153,0.154-0.321,0.292-0.499,0.41c-0.189,0.592,0.059,0.802,0.832,1.322c0.892,0.601,2.114,1.423,2.114,3.56 C15.14,18.052,12.954,19.411,10.164,19.411z M20,10h-2v2h-1v-2h-2V9h2V7h1v2h2V10z"/>\n        </g>\n    </svg>'
			},
			'style': '.resp-sharing-button--google {\n  background-color: #dd4b39;\n  border-color: #dd4b39;\n}\n\n.resp-sharing-button--google:hover,\n.resp-sharing-button--google:active {\n  background-color: #c23321;\n  border-color: #c23321;\n}',
			'scriptSize': 15.1,
			'requests': 1
		},
		'tumblr': {
			'visible': true,
			'name': 'Tumblr',
			'icons': {
				'normal': '\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.5.5v5h5v4h-5V15c0 5 3.5 4.4 6 2.8v4.4c-6.7 3.2-12 0-12-4.2V9.5h-3V6.7c1-.3 2.2-.7 3-1.3.5-.5 1-1.2 1.4-2 .3-.7.6-1.7.7-3h3.8z"/></svg>',
				'solid': '\n    <svg version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n        <g>\n            <path d="M13.5,0.5v5h5v4h-5v5.515c0,5.028,3.52,4.427,6,2.798v4.433c-6.728,3.172-12-0.064-12-4.255V9.5h-3V6.668 c0.903-0.293,2.245-0.714,2.889-1.261c0.646-0.551,1.162-1.208,1.551-1.976C9.331,2.664,9.6,1.686,9.746,0.5H13.5z"/>\n        </g>\n    </svg>',
				'circle': '\n      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n        <g stroke-width="2px" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><circle stroke-linecap="round" cx="12" cy="12" r="11.5"/>\n            <path d="M12.5 4.5v3h2v2h-2v3.719c0 2.468 1.484 2.692 2.992 1.701v2.696c-4.091 1.928-5.992-.616-5.992-3.585v-4.531h-2v-1.358c.549-.178 1.236-.435 1.627-.768.393-.334.707-.733.943-1.2.238-.467.401-.954.49-1.675h1.94z"/>\n        </g>\n     </svg>',
				'solidcircle': '\n    <svg version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n        <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M15.492,17.616C11.401,19.544,9.5,17,9.5,14.031 V9.5h-2V8.142c0.549-0.178,1.236-0.435,1.627-0.768c0.393-0.334,0.707-0.733,0.943-1.2c0.238-0.467,0.401-0.954,0.49-1.675H12.5v3h2 v2h-2v3.719c0,2.468,1.484,2.692,2.992,1.701V17.616z"/>\n     </svg>'
			},
			'style': '.resp-sharing-button--tumblr {\n  background-color: #35465C;\n  border-color: #35465C;\n}\n\n.resp-sharing-button--tumblr:hover,\n.resp-sharing-button--tumblr:active {\n  background-color: #222d3c;\n  border-color: #222d3c;\n}',
			'scriptSize': 11.6,
			'requests': 1
		},
		'email': {
			'visible': true,
			'name': 'E-Mail',
			'icons': {
				'normal': '\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.5 18c0 .8-.7 1.5-1.5 1.5H2c-.8 0-1.5-.7-1.5-1.5V6c0-.8.7-1.5 1.5-1.5h20c.8 0 1.5.7 1.5 1.5v12zm-3-9.5L12 14 3.5 8.5m0 7.5L7 14m13.5 2L17 14"/></svg>',
				'solid' : '\n    <svg version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n        <path d="M22,4H2C0.897,4,0,4.897,0,6v12c0,1.103,0.897,2,2,2h20c1.103,0,2-0.897,2-2V6C24,4.897,23.103,4,22,4z M7.248,14.434 l-3.5,2C3.67,16.479,3.584,16.5,3.5,16.5c-0.174,0-0.342-0.09-0.435-0.252c-0.137-0.239-0.054-0.545,0.186-0.682l3.5-2 c0.24-0.137,0.545-0.054,0.682,0.186C7.571,13.992,7.488,14.297,7.248,14.434z M12,14.5c-0.094,0-0.189-0.026-0.271-0.08l-8.5-5.5 C2.997,8.77,2.93,8.46,3.081,8.229c0.15-0.23,0.459-0.298,0.691-0.147L12,13.405l8.229-5.324c0.232-0.15,0.542-0.084,0.691,0.147 c0.15,0.232,0.083,0.542-0.148,0.691l-8.5,5.5C12.189,14.474,12.095,14.5,12,14.5z M20.934,16.248 C20.842,16.41,20.673,16.5,20.5,16.5c-0.084,0-0.169-0.021-0.248-0.065l-3.5-2c-0.24-0.137-0.323-0.442-0.186-0.682 s0.443-0.322,0.682-0.186l3.5,2C20.988,15.703,21.071,16.009,20.934,16.248z"/>\n    </svg>',
				'circle': '\n      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n        <g stroke-width="2px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">\n            <path d="M19.5 16c0 .828-.672 1.5-1.5 1.5h-12c-.828 0-1.5-.672-1.5-1.5v-8c0-.828.672-1.5 1.5-1.5h12c.828 0 1.5.672 1.5 1.5v8zM17.5 8.5l-5.5 4.5-5.5-4.5M17.5 14.5l-4-2.5M6.5 14.5l4-2.5"/>\n            <circle cx="12" cy="12" r="11.5"/>\n        </g>\n    </svg>',
				'solidcircle': '\n    <svg version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n        <g>\n            <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M20,16c0,1.103-0.897,2-2,2H6 c-1.103,0-2-0.897-2-2V8c0-1.103,0.897-2,2-2h12c1.103,0,2,0.897,2,2V16z"/>\n            <path d="M17.887,8.184c-0.175-0.214-0.49-0.245-0.704-0.07L12,12.354L6.817,8.113C6.603,7.938,6.288,7.97,6.113,8.184 S5.97,8.712,6.183,8.887l3.618,2.96l-3.566,2.229c-0.234,0.147-0.306,0.455-0.159,0.689C6.171,14.917,6.334,15,6.5,15 c0.091,0,0.182-0.024,0.265-0.076l3.854-2.409l1.064,0.872C11.775,13.462,11.888,13.5,12,13.5s0.225-0.038,0.317-0.113l1.065-0.872 l3.854,2.409C17.317,14.976,17.409,15,17.5,15c0.167,0,0.33-0.083,0.425-0.235c0.146-0.234,0.075-0.542-0.159-0.689l-3.566-2.229 l3.618-2.96C18.03,8.712,18.062,8.397,17.887,8.184z"/>\n        </g>\n    </svg>'
			},
			'style': '.resp-sharing-button--email {\n  background-color: #777777;\n  border-color: #777777;\n}\n\n.resp-sharing-button--email:hover,\n.resp-sharing-button--email:active {\n  background-color: #5e5e5e;\n  border-color: #5e5e5e;\n}',
			'scriptSize': 0,
			'requests': 0,
			'openInThisWindow': true
		},
		'pinterest': {
			'visible': true,
			'name': 'Pinterest',
			'icons': {
				'normal': '\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.14.5C5.86.5 2.7 5 2.7 8.75c0 2.27.86 4.3 2.7 5.05.3.12.57 0 .66-.33l.27-1.06c.1-.32.06-.44-.2-.73-.52-.62-.86-1.44-.86-2.6 0-3.33 2.5-6.32 6.5-6.32 3.55 0 5.5 2.17 5.5 5.07 0 3.8-1.7 7.02-4.2 7.02-1.37 0-2.4-1.14-2.07-2.54.4-1.68 1.16-3.48 1.16-4.7 0-1.07-.58-1.98-1.78-1.98-1.4 0-2.55 1.47-2.55 3.42 0 1.25.43 2.1.43 2.1l-1.7 7.2c-.5 2.13-.08 4.75-.04 5 .02.17.22.2.3.1.14-.18 1.82-2.26 2.4-4.33.16-.58.93-3.63.93-3.63.45.88 1.8 1.65 3.22 1.65 4.25 0 7.13-3.87 7.13-9.05C20.5 4.15 17.18.5 12.14.5z"/></svg>',
				'solid': '\n    <svg version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n        <path d="M12.137,0.5C5.86,0.5,2.695,5,2.695,8.752c0,2.272,0.8 ,4.295,2.705,5.047c0.303,0.124,0.574,0.004,0.661-0.33 c0.062-0.231,0.206-0.816,0.271-1.061c0.088-0.331,0.055-0.446-0.19-0.736c-0.532-0.626-0.872-1.439-0.872-2.59 c0-3.339,2.498-6.328,6.505-6.328c3.548,0,5.497,2.168,5.497,5.063c0,3.809-1.687,7.024-4.189,7.024 c-1.382,0-2.416-1.142-2.085-2.545c0.397-1.675,1.167-3.479,1.167-4.688c0-1.081-0.58-1.983-1.782-1.983 c-1.413,0-2.548,1.461-2.548,3.42c0,1.247,0.422,2.09,0.422,2.09s-1.445,6.126-1.699,7.199c-0.505,2.137-0.076,4.756-0.04,5.02 c0.021,0.157,0.224,0.195,0.314,0.078c0.13-0.171,1.813-2.25,2.385-4.325c0.162-0.589,0.929-3.632,0.929-3.632 c0.459,0.876,1.801,1.646,3.228,1.646c4.247,0,7.128-3.871,7.128-9.053C20.5,4.15,17.182,0.5,12.137,0.5z"/>\n    </svg>',
				'circle': '\n      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n        <g stroke-width="2px" stroke-linejoin="round" stroke-miterlimit="10">\n            <circle stroke-linecap="round" cx="12" cy="12" r="11.5"/><path d="M8.003 11.215c-.157-.342-.249-.748-.249-1.246 0-2.32 1.738-4.4 4.525-4.4 2.468 0 3.824 1.509 3.824 3.521 0 2.649-1.173 4.888-2.914 4.888-.961 0-1.682-.796-1.451-1.772.277-1.163.813-2.42.813-3.261 0-.752-.404-1.378-1.24-1.378-.982 0-1.772 1.016-1.772 2.378 0 .866.294 1.454.294 1.454l-1.183 5.008c-.351 1.487-.053 3.309-.027 3.492.015.11.154.137.218.053.091-.118 1.262-1.563 1.66-3.007.111-.409.646-2.526.646-2.526.318.609 1.252 1.145 2.244 1.145 2.955 0 4.959-2.693 4.959-6.297 0-2.728-2.309-5.267-5.819-5.267-4.366 0-6.568 3.13-6.568 5.74 0 .846.172 1.643.527 2.279l1.513-.804z"/>\n        </g>\n    </svg>',
				'solidcircle': '\n    <svg version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n        <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M13.391,15.563c-0.992,0-1.926-0.535-2.244-1.145c0,0-0.535,2.117-0.646,2.526c-0.398,1.443-1.569,2.889-1.66,3.007c-0.063,0.084-0.203,0.058-0.218-0.053 c-0.025-0.184-0.323-2.005,0.027-3.492c0.176-0.746,1.183-5.008,1.183-5.008s-0.294-0.588-0.294-1.454 c0-1.362,0.79-2.378,1.772-2.378c0.836,0,1.24,0.626,1.24,1.378c0,0.841-0.535,2.098-0.813,3.261 c-0.23,0.977,0.49,1.772,1.451,1.772c1.741,0,2.914-2.238,2.914-4.888c0-2.013-1.356-3.521-3.824-3.521 c-2.787,0-4.525,2.08-4.525,4.4c0,0.498,0.092,0.904,0.249,1.246L6.49,12.02c-0.355-0.637-0.527-1.434-0.527-2.279 C5.963,7.13,8.165,4,12.531,4c3.51,0,5.818,2.539,5.818,5.266C18.35,12.869,16.346,15.563,13.391,15.563z"/>\n    </svg>'
			},
			'style': '.resp-sharing-button--pinterest {\n  background-color: #bd081c;\n  border-color: #bd081c;\n}\n\n.resp-sharing-button--pinterest:hover,\n.resp-sharing-button--pinterest:active {\n  background-color: #8c0615;\n  border-color: #8c0615;\n}',
			'scriptSize': 12.9,
			'requests': 3
		},
		'linkedin': {
			'visible': false,
			'name': 'LinkedIn',
			'icons': {
				'normal': '\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 21.5h-5v-13h5v13zM4 6.5h-.04c-1.5 0-2.5-1.18-2.5-2.48 0-1.33 1.02-2.4 2.56-2.4s2.5 1.1 2.52 2.43c0 1.3-.98 2.45-2.55 2.45zm11.5 6c-1.1 0-2 .9-2 2v7h-5s.06-12 0-13h5V10s1.55-1.46 3.94-1.46c2.96 0 5.06 2.15 5.06 6.3v6.66h-5v-7c0-1.1-.9-2-2-2z"/></svg>',
				'solid': '\n    <svg version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n        <g>\n            <path d="M6.527,21.5h-5v-13h5V21.5z M4.018,6.5H3.988C2.478,6.5,1.5,5.318,1.5,4.019c0-1.329,1.008-2.412,2.547-2.412 c1.541,0,2.488,1.118,2.519,2.447C6.565,5.354,5.588,6.5,4.018,6.5z M15.527,12.5c-1.105,0-2,0.896-2,2v7h-5c0,0,0.059-12,0-13h5 v1.485c0,0,1.548-1.443,3.938-1.443c2.962,0,5.062,2.144,5.062,6.304V21.5h-5v-7C17.527,13.396,16.632,12.5,15.527,12.5z"/>\n        </g>\n    </svg>',
				'circle': '\n    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n        <g stroke-width="2px" stroke-linejoin="round" stroke-miterlimit="10">\n            <circle stroke-linecap="round" cx="12" cy="12" r="11.5"/>\n            <path d="M15 12.5c-.276 0-.5.223-.5.5v3.5h-3s.031-6.478 0-7h3v.835s.457-.753 1.707-.753c1.55 0 2.293 1.12 2.293 3.296v3.622h-3v-3.5c0-.277-.225-.5-.5-.5zM7.5 9.5h2v7h-2z"/>\n            <circle cx="8.5" cy="6.5" r="1"/>\n        </g>\n    </svg>', // ALREADY CHANGED
				'solidcircle': '\n    <svg version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n        <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M9.5,16.5h-2v-7h2V16.5z M8.5,7.5 c-0.553,0-1-0.448-1-1c0-0.552,0.447-1,1-1s1,0.448,1,1C9.5,7.052,9.053,7.5,8.5,7.5z M18.5,16.5h-3V13c0-0.277-0.225-0.5-0.5-0.5 c-0.276,0-0.5,0.223-0.5,0.5v3.5h-3c0,0,0.031-6.478,0-7h3v0.835c0,0,0.457-0.753,1.707-0.753c1.55,0,2.293,1.12,2.293,3.296V16.5z" />\n    </svg>'
			},
			'style': '.resp-sharing-button--linkedin {\n  background-color: #0077b5;\n  border-color: #0077b5;\n}\n\n.resp-sharing-button--linkedin:hover,\n.resp-sharing-button--linkedin:active {\n  background-color: #046293;\n  border-color: #046293;\n}',
			'scriptSize': 47.7,
			'requests': 2
		},
		'reddit': {
			'visible': false,
			'name': 'Reddit',
			'icons': {
				'normal': '\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><ellipse cx="12" cy="15" rx="9.5" ry="6.5"/><path d="M15.54 17.88c-.96.55-2.2.88-3.54.88-1.35 0-2.6-.33-3.55-.9"/><circle cx="16" cy="13.5" r="1.5"/><circle cx="8" cy="13.5" r="1.5"/><path d="M18.74 10.42C19.14 9.58 20 9 21 9c1.38 0 2.5 1.12 2.5 2.5 0 1.25-.92 2.3-2.12 2.47"/><circle cx="20" cy="4.5" r="2.5"/><path d="M5.26 10.42C4.86 9.58 4 9 3 9 1.62 9 .5 10.12.5 11.5c0 1.25.92 2.3 2.12 2.47M12 8.5s-.13-7.4 5.5-4"/></svg>',
				'solid': '\n    <svg version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n        <path d="M24,11.5c0-1.654-1.346-3-3-3c-0.964,0-1.863,0.476-2.422,1.241c-1.639-1.006-3.747-1.64-6.064-1.723 c0.064-1.11,0.4-3.049,1.508-3.686c0.72-0.414,1.733-0.249,3.01,0.478C17.189,6.317,18.452,7.5,20,7.5c1.654,0,3-1.346,3-3 s-1.346-3-3-3c-1.382,0-2.536,0.944-2.883,2.217C15.688,3,14.479,2.915,13.521,3.466c-1.642,0.945-1.951,3.477-2.008,4.551 C9.186,8.096,7.067,8.731,5.422,9.741C4.863,8.976,3.964,8.5,3,8.5c-1.654,0-3,1.346-3,3c0,1.319,0.836,2.443,2.047,2.844 C2.019,14.56,2,14.778,2,15c0,3.86,4.486,7,10,7s10-3.14,10-7c0-0.222-0.019-0.441-0.048-0.658C23.148,13.938,24,12.795,24,11.5z  M2.286,13.366C1.522,13.077,1,12.351,1,11.5c0-1.103,0.897-2,2-2c0.635,0,1.217,0.318,1.59,0.816 C3.488,11.17,2.683,12.211,2.286,13.366z M6,13.5c0-1.103,0.897-2,2-2s2,0.897,2,2c0,1.103-0.897,2-2,2S6,14.603,6,13.5z  M15.787,18.314c-1.063,0.612-2.407,0.949-3.787,0.949c-1.387,0-2.737-0.34-3.803-0.958c-0.239-0.139-0.321-0.444-0.182-0.683 c0.139-0.24,0.444-0.322,0.683-0.182c1.828,1.059,4.758,1.062,6.59,0.008c0.239-0.138,0.545-0.055,0.683,0.184 C16.108,17.871,16.026,18.177,15.787,18.314z M16,15.5c-1.103,0-2-0.897-2-2c0-1.103,0.897-2,2-2s2,0.897,2,2 C18,14.603,17.103,15.5,16,15.5z M21.713,13.365c-0.397-1.155-1.201-2.195-2.303-3.048C19.784,9.818,20.366,9.5,21,9.5 c1.103,0,2,0.897,2,2C23,12.335,22.468,13.073,21.713,13.365z"/>\n    </svg>',
				'circle': '\n      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n          <g stroke-width="2px" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><circle stroke-linecap="round" cx="12" cy="12" r="11.5"/>\n              <ellipse cx="12" cy="14.369" rx="6.195" ry="4.239"/>\n              <path stroke-linecap="round" d="M14.307 16.248c-.623.359-1.428.576-2.307.576-.883 0-1.691-.217-2.316-.58"/>\n              <circle cx="14.609" cy="13.392" r=".979"/>\n              <circle cx="9.391" cy="13.392" r=".978"/>\n              <path stroke-linecap="round" d="M16.398 11.385c.262-.55.822-.929 1.471-.929.9 0 1.631.73 1.631 1.631 0 .816-.6 1.492-1.383 1.612"/>\n              <circle stroke-linecap="round" cx="17.218" cy="7.521" r="1.63"/>\n              <path stroke-linecap="round" d="M7.603 11.385c-.263-.549-.823-.929-1.472-.929-.9 0-1.631.73-1.631 1.631 0 .816.6 1.492 1.383 1.612M12 10.13s-.082-4.824 3.588-2.609"/>\n          </g>\n      </svg>',
				'solidcircle': '\n    <svg version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n        <g>\n            <circle cx="9.391" cy="13.392" r="0.978"/> \n            <path d="M14.057,15.814c-1.141,0.659-2.987,0.655-4.122-0.004c-0.238-0.138-0.545-0.058-0.684,0.182 c-0.139,0.239-0.058,0.545,0.182,0.685c0.72,0.417,1.631,0.646,2.567,0.646c0.931,0,1.838-0.228,2.557-0.642 c0.239-0.139,0.321-0.444,0.184-0.684C14.602,15.758,14.295,15.677,14.057,15.814z"/>\n            <path d="M5,12.086c0,0.411,0.229,0.78,0.568,0.978c0.27-0.662,0.735-1.264,1.353-1.774c-0.209-0.207-0.489-0.334-0.79-0.334 C5.507,10.956,5,11.463,5,12.086z"/>\n            <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M18.673,14.055 c0.01,0.104,0.022,0.208,0.022,0.314c0,2.613-3.004,4.739-6.695,4.739s-6.695-2.126-6.695-4.739c0-0.106,0.013-0.21,0.022-0.314 C4.538,13.735,4,12.975,4,12.086c0-1.175,0.956-2.131,2.131-2.131c0.629,0,1.217,0.288,1.617,0.756 c1.04-0.607,2.345-0.991,3.769-1.063c0.058-0.803,0.309-2.33,1.389-2.951c0.633-0.365,1.417-0.322,2.322,0.086 c0.302-0.811,1.076-1.392,1.989-1.392c1.175,0,2.131,0.957,2.131,2.13c0,1.175-0.956,2.131-2.131,2.131 c-1.064,0-1.941-0.789-2.097-1.812c-0.734-0.402-1.315-0.506-1.716-0.276c-0.601,0.345-0.818,1.394-0.881,2.086 c1.408,0.078,2.698,0.46,3.729,1.062c0.399-0.468,0.987-0.756,1.617-0.756c1.175,0,2.131,0.956,2.131,2.131 C20,12.975,19.462,13.735,18.673,14.055z"/>\n            <circle cx="14.609" cy="13.391" r="0.978"/>\n            <path d="M17.869,10.956c-0.301,0-0.582,0.128-0.79,0.334c0.617,0.51,1.083,1.112,1.353,1.774C18.771,12.867,19,12.498,19,12.086 C19,11.463,18.493,10.956,17.869,10.956z"/>\n        </g>\n    </svg>'
			},
			'style': '.resp-sharing-button--reddit {\n  background-color: #5f99cf;\n  border-color: #5f99cf;\n}\n\n.resp-sharing-button--reddit:hover,\n.resp-sharing-button--reddit:active {\n  background-color: #3a80c1;\n  border-color: #3a80c1;\n}',
			'scriptSize': 0.2,
			'requests': 0
		},
		'xing': {
			'visible': false,
			'name': 'XING',
			'icons': {
				'normal': '\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.8 4.5h-5l3 5.5-4 6.5h5l4-6.5zm16.7-4H18l-8 14 5.3 9h5.4l-5.2-9z"/></svg>',
				'solid': '\n    <svg version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n        <g>\n            <path d="M10.221,9.711L7.228,4.259C7.14,4.1,6.972,4,6.789,4H1.723c-0.177,0-0.34,0.093-0.43,0.245 c-0.09,0.153-0.093,0.341-0.008,0.496l2.854,5.198l-3.84,6.301c-0.094,0.154-0.098,0.348-0.009,0.505 C0.377,16.902,0.544,17,0.725,17h5.066c0.174,0,0.336-0.091,0.427-0.239l3.991-6.548C10.302,10.06,10.307,9.869,10.221,9.711z"/>\n            <path d="M23.933,0.249C23.843,0.095,23.678,0,23.5,0h-5.374c-0.18,0-0.345,0.096-0.434,0.252L9.708,14.235 c-0.088,0.154-0.088,0.342,0,0.496l5.145,9.017C14.942,23.904,15.107,24,15.287,24h5.374c0.178,0,0.343-0.095,0.432-0.249 c0.09-0.154,0.09-0.344,0.002-0.499l-5.003-8.769l7.842-13.736C24.022,0.593,24.022,0.403,23.933,0.249z"/>\n        </g>\n    </svg>',
				'circle': '\n    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n        <g stroke-width="2px" stroke-linejoin="round" stroke-miterlimit="10">\n            <circle stroke-linecap="round" cx="12" cy="12" r="11.5"/><path d="M8.406 8.5h-3.084l1.676 2.754-2.238 3.277h3.084l2.238-3.277zM18.432 5.5h-3.272l-4.858 8.511 3.131 5.489h3.27l-3.131-5.489z"/>\n        </g>\n    </svg>',
				'solidcircle': '\n    <svg version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n        <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M7.844,14.531H4.76l2.238-3.276L5.322,8.5h3.084 l1.676,2.754L7.844,14.531z M16.703,19.5h-3.271l-3.131-5.489L15.16,5.5h3.271l-4.859,8.511L16.703,19.5z"/>\n    </svg>'
			},
			'style': '.resp-sharing-button--xing {\n  background-color: #1a7576;\n  border-color: #1a7576;\n}\n\n.resp-sharing-button--xing:hover\n.resp-sharing-button--xing:active {\n  background-color: #114C4C;\n  border-color: #114C4C;\n}',
			'scriptSize': 4.6,
			'requests': 3
		},
		'whatsapp': {
			'visible': false,
			'name': 'WhatsApp',
			'icons': {
				'normal': '\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke-width="1px" d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"/></svg>',
				'solid': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path stroke="none" d="M20.1,3.9C17.9,1.7,15,0.5,12,0.5C5.8,0.5,0.7,5.6,0.7,11.9c0,2,0.5,3.9,1.5,5.6l-1.6,5.9l6-1.6c1.6,0.9,3.5,1.3,5.4,1.3l0,0l0,0c6.3,0,11.4-5.1,11.4-11.4C23.3,8.9,22.2,6,20.1,3.9z M12,21.4L12,21.4c-1.7,0-3.3-0.5-4.8-1.3l-0.4-0.2l-3.5,1l1-3.4L4,17c-1-1.5-1.4-3.2-1.4-5.1c0-5.2,4.2-9.4,9.4-9.4c2.5,0,4.9,1,6.7,2.8c1.8,1.8,2.8,4.2,2.8,6.7C21.4,17.2,17.2,21.4,12,21.4z M17.1,14.3c-0.3-0.1-1.7-0.9-1.9-1c-0.3-0.1-0.5-0.1-0.7,0.1c-0.2,0.3-0.8,1-0.9,1.1c-0.2,0.2-0.3,0.2-0.6,0.1c-0.3-0.1-1.2-0.5-2.3-1.4c-0.9-0.8-1.4-1.7-1.6-2c-0.2-0.3,0-0.5,0.1-0.6s0.3-0.3,0.4-0.5c0.2-0.1,0.3-0.3,0.4-0.5c0.1-0.2,0-0.4,0-0.5c0-0.1-0.7-1.5-1-2.1C8.9,6.6,8.6,6.7,8.5,6.7c-0.2,0-0.4,0-0.6,0S7.5,6.8,7.2,7c-0.3,0.3-1,1-1,2.4s1,2.8,1.1,3c0.1,0.2,2,3.1,4.9,4.3c0.7,0.3,1.2,0.5,1.6,0.6c0.7,0.2,1.3,0.2,1.8,0.1c0.6-0.1,1.7-0.7,1.9-1.3c0.2-0.7,0.2-1.2,0.2-1.3C17.6,14.5,17.4,14.4,17.1,14.3z"/></svg>',
				'circle': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g xmlns="http://www.w3.org/2000/svg" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><circle class="st0" cx="12" cy="12" r="11.5"/></g><g><path d="M17.6,6.2c-1.5-1.5-3.4-2.3-5.5-2.3c-4.3,0-7.8,3.5-7.8,7.8c0,1.4,0.4,2.7,1,3.9l-1.1,4l4.1-1.1c1.1,0.6,2.4,0.9,3.7,0.9l0,0l0,0c4.3,0,7.8-3.5,7.8-7.8C19.9,9.6,19.1,7.7,17.6,6.2z M12.1,18.1L12.1,18.1c-1.2,0-2.3-0.3-3.3-0.9l-0.2-0.1l-2.4,0.6l0.7-2.4l-0.2-0.2c-0.6-1-1-2.2-1-3.4c0-3.6,2.9-6.5,6.5-6.5c1.7,0,3.3,0.7,4.6,1.9c1.2,1.2,1.9,2.8,1.9,4.6C18.6,15.2,15.7,18.1,12.1,18.1z M15.6,13.3c-0.2-0.1-1.1-0.6-1.3-0.6c-0.2-0.1-0.3-0.1-0.4,0.1c-0.1,0.2-0.5,0.6-0.6,0.8c-0.1,0.1-0.2,0.1-0.4,0s-0.8-0.3-1.6-1c-0.6-0.5-1-1.2-1.1-1.3c-0.1-0.2,0-0.3,0.1-0.4c0.1-0.1,0.2-0.2,0.3-0.3s0.1-0.2,0.2-0.3c0.1-0.1,0-0.2,0-0.3s-0.4-1.1-0.6-1.4C10,8.2,9.9,8.3,9.8,8.3c-0.1,0-0.2,0-0.4,0s-0.3,0-0.5,0.2s-0.7,0.7-0.7,1.6c0,1,0.7,1.9,0.8,2s1.4,2.1,3.3,2.9c0.5,0.2,0.8,0.3,1.1,0.4c0.5,0.1,0.9,0.1,1.2,0.1c0.4-0.1,1.1-0.5,1.3-0.9c0.2-0.5,0.2-0.8,0.1-0.9C16,13.5,15.8,13.4,15.6,13.3z"/></g></svg>',
				'solidcircle': '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><path d="m12 0c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm0 3.8c2.2 0 4.2 0.9 5.7 2.4 1.6 1.5 2.4 3.6 2.5 5.7 0 4.5-3.6 8.1-8.1 8.1-1.4 0-2.7-0.4-3.9-1l-4.4 1.1 1.2-4.2c-0.8-1.2-1.1-2.6-1.1-4 0-4.5 3.6-8.1 8.1-8.1zm0.1 1.5c-3.7 0-6.7 3-6.7 6.7 0 1.3 0.3 2.5 1 3.6l0.1 0.3-0.7 2.4 2.5-0.7 0.3 0.099c1 0.7 2.2 1 3.4 1 3.7 0 6.8-3 6.9-6.6 0-1.8-0.7-3.5-2-4.8s-3-2-4.8-2zm-3 2.9h0.4c0.2 0 0.4-0.099 0.5 0.3s0.5 1.5 0.6 1.7 0.1 0.2 0 0.3-0.1 0.2-0.2 0.3l-0.3 0.3c-0.1 0.1-0.2 0.2-0.1 0.4 0.2 0.2 0.6 0.9 1.2 1.4 0.7 0.7 1.4 0.9 1.6 1 0.2 0 0.3 0.001 0.4-0.099s0.5-0.6 0.6-0.8c0.2-0.2 0.3-0.2 0.5-0.1l1.4 0.7c0.2 0.1 0.3 0.2 0.5 0.3 0 0.1 0.1 0.5-0.099 1s-1 0.9-1.4 1c-0.3 0-0.8 0.001-1.3-0.099-0.3-0.1-0.7-0.2-1.2-0.4-2.1-0.9-3.4-3-3.5-3.1s-0.8-1.1-0.8-2.1c0-1 0.5-1.5 0.7-1.7s0.4-0.3 0.5-0.3z"/></svg>'
			},
			'style':'.resp-sharing-button--whatsapp {\n  background-color: #25D366;\n  border-color: #25D366;\n}\n\n.resp-sharing-button--whatsapp:hover,\n.resp-sharing-button--google:active {\n  background-color: #1DA851;\n  border-color: #1DA851;\n}',
			'scriptSize': 15.1,
			'requests': 1
		},
	}
}

var AppStore = assign({}, EventEmitter.prototype, {
	// Returns the current data
	getData: function() {
		this._updateLinks();
		return _data;
	},
	/**
	 * Toggles a social network
	 * @param  {string} name - The name of the network to be toggled
	 */
	_toggleNetwork: function(name) {
		_data.networks[name].visible = !_data.networks[name].visible;
	},
	/**
	 * Changes the URL that is shared on click
	 * @param {string} url - The url to be shared
	 */
	_setURL: function(url) {
		_data.url = url;
		this._updateLinks();
	},
	/**
	 * Changes the text that is shared on click
	 * @param {string} text - The text to be shared
	 */
	_setText: function(text) {
		_data.text = text;
		this._updateLinks();
	},
	/**
	 * @param  {string} size - The size of the buttons. Has to be "small", "medium" or "large"
	 */
	_changeSize: function(size) {
		var sizes = _data.sizes;

		for (var option in sizes) {
			if (sizes[option] === true) {
				sizes[option] = false;
			}
		}
		sizes[size] = true;
	},
	/**
	 * Toggles the type of icon used. Has to be "circle" or "solid"
	 * @param  {string} icon - The icon type
	 */
	_toggleIcon: function(type) {
		var icons = _data.icons;
		icons[type] = !icons[type];
	},
	/**
	 * Changes the sharing URLs
	 * @return {bool}
	 */
	_updateLinks: function() {
		var text = encodeURIComponent(_data.text);
		var url = encodeURIComponent(_data.url);

		var links = {
			'facebook': 'https://facebook.com/sharer/sharer.php?u=' + url,
			'twitter': 'https://twitter.com/intent/tweet/?text=' + text + '&url=' + url,
			'google': 'https://plus.google.com/share?url=' + url,
			'tumblr': "https://www.tumblr.com/widgets/share/tool?posttype=link&title=" + text + "&caption=" + text + "&content=" + url + "&canonicalUrl=" + url + "&shareSource=tumblr_share_button",
			'pinterest': 'https://pinterest.com/pin/create/button/?url=' + url + '&media=' + url + '&description=' + text,
			'linkedin': 'https://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + text + '&summary=' + text + '&source=' + url,
			'reddit': 'https://reddit.com/submit/?url=' + url,
			'email': 'mailto:?subject=' + text + '&body=' + url,
			'xing': 'https://www.xing.com/app/user?op=share;url=' + url + ';title=' + text,
			'whatsapp': 'whatsapp://send?text=' + text + '%20' + url
		}

		for (var network in _data.networks) {
			_data.networks[network].link = links[network];
		}

		return true;
	},
	emitChange: function() {
		this.emit('change');
	},
	addChangeListener: function(callback) {
		this.on('change', callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	}
});

// Catch the events dispatched by the AppDispatcher
AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch(action.actionType) {
		case AppConstants.TOGGLE_NETWORK:
			AppStore._toggleNetwork(action.name);
			break;
		case AppConstants.SET_URL:
			AppStore._setURL(action.url);
			break;
		case AppConstants.SET_TEXT:
			AppStore._setText(action.text);
			break;
		case AppConstants.CHANGE_SIZE:
			AppStore._changeSize(action.size);
			break;
		case AppConstants.TOGGLE_ICON:
			AppStore._toggleIcon(action.type);
			break;
		default:
			return false;
	}
	AppStore.emitChange();
	return true;
});

module.exports = AppStore;
