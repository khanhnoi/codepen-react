import { useEffect, useState } from 'react';
import Editer from './Editer';
import useLocalStorage from '../hooks/useLocalStorage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAltV } from '@fortawesome/free-solid-svg-icons';

function App() {
	// const [html, setHtml] = useState('');
	// const [css, setCss] = useState('');
  // const [javaScript, setJavaScript] = useState('');
  const initHTML = `<div class="admin-kn">
  <a href="http://khanhnoi.mobie.in/">
  <img src="http://khanhnoi.mobie.in/img/khanh-noi.jpg" alt="avatar">
  </a>  
  </div>`;
  const initCSS = `.admin-kn img {
    width: 100vw;
  }
  .admin-kn img {
    width: 300px;
    hight: auto;
  }`;
  const initJs = `document.body.style.background = "#333";`;

	const [html, setHtml] = useLocalStorage('html', initHTML);
	const [css, setCss] = useLocalStorage('css', initCSS);
	const [javaScript, setJavaScript] = useLocalStorage('javascript', initJs);
	const [srcDoc, setSrcDoc] = useState('');
	const [isExpand, setIsExpand] = useState(true);

	const handleExpandUI = () => {
		const topPaneElm = document.querySelector('.top-pane');
    const btnElm = document.querySelector('.btn-expand');
    const bottomPaneElm = document.querySelector('.bottom-pane');
		if (topPaneElm && btnElm && bottomPaneElm) {
			if (isExpand) {
				topPaneElm.style.height = '52px';
        btnElm.style.top = '52px';
        bottomPaneElm.style.height = "100vh";
			} else {
				topPaneElm.style.height = '';
        btnElm.style.top = '';
        bottomPaneElm.style.height = "";
			}
			setIsExpand(!isExpand);
		}
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSrcDoc(`
      <html>
        <body>
           ${html}
        </body>
        <style>
          ${css}
        </style>
        <script>
          ${javaScript}
        </script>
   </html>`);
		}, 300);
		return () => clearTimeout(timeout);
	}, [html, css, javaScript]);

	return (
		<>
			<div className="pane top-pane" id="top-pane">
				<Editer language="htmlmixed" displayName="HTML" value={html} onChange={setHtml} />
				<Editer language="css" displayName="CSS" value={css} onChange={setCss} />
				<Editer language="javascript" displayName="JavaScript" value={javaScript} onChange={setJavaScript} />
			</div>
			<div className="btn-expand" onClick={() => handleExpandUI()}>
				<FontAwesomeIcon icon={faArrowsAltV} />
			</div>
			<div className="pane bottom-pane">
				<iframe
					srcDoc={srcDoc}
					title="output"
					sandbox="allow-scripts"
					frameBorder="0"
					width="100%"
					height="100%"
				/>
			</div>
		</>
	);
}

export default App;
