import React from 'react'

const _height = 300;
const _width = 700;

const viewBox = viewBoxMod => "0 0 " + viewBoxMod * _height + " " + viewBoxMod * _width

export default ({height=_height + "px", width=_width+"px", fill="#fff", viewBoxMod=1}) => 
	<svg height={height} width={width} viewBox={viewBox(viewBoxMod)}>
	  <path fill="#00f" fill-rule="evenodd" stroke="#000" strokeWidth=".475" d="M-548.74-1439.336h1851.078v1017.214H-548.74z"/>
	  <g fill="#fff">
	    <path d="M2.796 300.896c0-1.013 107.33-252.643 112.06-262.72.867-1.848 3.636-5.56 6.153-8.25C128.9 21.49 139 15.316 151.9 11.04l6.467-2.14 219.857-.6c120.92-.326 242.49-.515 270.15-.42l50.296.18-53.017 124.763c-29.16 68.62-54.254 127.2-55.767 130.176-3.41 6.7-10.837 16.65-15.603 20.9-8.14 7.24-17.003 11.89-30.06 15.74l-7.003 2.06-267.215.2c-243.563.18-267.215.09-267.215-1.01zm405.1-42.845l127.047-.46 3.803-1.87c4.206-2.06 11.67-9.05 13.547-12.68 2.676-5.17 12.01-30.19 11.63-31.18-.344-.9-36.017-1.05-238.734-1.04l-238.33.02-9.42 22.77c-5.23 12.64-9.22 23.3-8.97 23.95.4 1.06 11.26 1.17 106.41 1.08 58.28-.06 163.13-.31 233-.57zM169.36 199.67c7.514-2.11 13.865-5.703 18.62-10.534l4.504-4.575 18.343-43.36 18.343-43.36 67.68.25 67.685.25 9.67-22.31c5.32-12.27 9.894-22.91 10.165-23.65.47-1.27-4.754-1.33-108.95-1.14l-109.442.2-3.746 1.85c-2.06 1.02-5.665 3.77-8.013 6.11-4.02 4.02-4.68 5.26-11.23 20.98l-6.97 16.71 22.27.38 22.27.38-20.81 51.3c-11.44 28.21-20.808 51.49-20.808 51.734 0 .987 26.31-.043 30.387-1.19zm138.01.803c6.466-1.667 13.005-5.312 16.33-9.102 2.188-2.49 6.407-11.72 19.345-42.31 9.1-21.52 16.546-39.58 16.546-40.13 0-.66-.57-.84-1.71-.54-.94.25-12.37.47-25.39.47l-23.68.01-.97 2.35c-1.14 2.75-1.35 2.75-11.76-.4-13.86-4.19-24.38-3.27-37.09 3.22-15.08 7.71-27.2 23.35-31.88 41.17-2.01 7.68-2.16 19.31-.32 25.56 2.78 9.43 6.18 12.92 16.74 17.14 7.94 3.18 13.92 3.65 20.01 1.58 6.02-2.04 7.83-2.06 7.83-.09 0 1.447.634 1.518 15.403 1.73 8.47.12 15.526.3 15.675.398.15.096 2.376-.37 4.947-1.03zm110.936-1.123c7.625-2.57 13.428-5.88 17.662-10.074 3.922-3.887 4.303-4.696 22.575-47.98l18.585-44.026 67.667.283 67.667.28 10.238-23.4c5.632-12.87 10.1-23.496 9.93-23.61-.17-.116-49.777-.027-110.238.197l-109.93.407-6.56 3.21c-10.396 5.082-12.036 7.128-20.644 25.745-4.075 8.81-7.41 16.25-7.41 16.533 0 .283 11.39.604 25.31.714l25.31.2-20.714 50.97c-11.394 28.03-20.73 51.22-20.745 51.54-.02.31 5.97.57 13.3.57 11.45 0 13.99-.22 17.99-1.57zm92.857.046c5.31-2.02 8.187-2.02 8.187 0 0 1.477.507 1.52 17.378 1.52 15.45 0 17.878-.17 21.872-1.536 5.303-1.814 11.32-5.785 14.058-9.28 1.838-2.343 34.94-79.405 34.94-81.34 0-.67-3.445-.77-13.816-.394-7.6.273-19.026.5-25.394.5H556.81l-.947 2.28c-.52 1.257-1.45 2.284-2.065 2.284-.616 0-4.597-1.113-8.847-2.473-6.93-2.216-8.62-2.465-16.47-2.425-7.66.04-9.45.307-14.38 2.17-18.1 6.83-31.16 20.71-37.77 40.16-4.41 12.96-4.08 26.48.89 36.453 2.48 4.973 10.14 9.8 19.71 12.422 5.46 1.5 9.68 1.397 14.26-.34zM397.447 148.5l7.59-18.938-16.827-.53c-9.255-.293-18.33-.415-20.17-.272l-3.344.26-7.118 17.498c-3.916 9.623-7.326 18.267-7.58 19.21l-.46 1.71h40.32l7.59-18.937z"/>
	    <path d="M267.622 177.025c-2.246-1.245-3.825-3.983-3.86-6.697-.035-2.633 3.196-12.868 6.118-19.38 3.23-7.2 8.813-15.292 11.513-16.688 4.7-2.43 12.01 1.423 12.01 6.332 0 3.7-2.176 10.845-6.208 20.378-4.44 10.5-6.9 14.492-9.87 16.03-2.61 1.35-7.29 1.362-9.703.025zm240.553.34c-3.374-2.058-4.308-4.158-3.79-8.526.98-8.27 8.5-25 13.98-31.09 2.968-3.3 3.783-3.79 6.342-3.79 1.615 0 3.835.41 4.932.91 2.11.96 4.16 4.16 4.16 6.5 0 4.86-8.86 27.7-12.72 32.8-2.02 2.66-5.79 4.67-8.75 4.67-.96 0-2.83-.67-4.16-1.48z"/>
	  </g>
	</svg>