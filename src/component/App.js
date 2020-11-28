import { useEffect, useState } from 'react';
import Editer from './Editer';

function App() {
	const [html, setHtml] = useState('');
	const [css, setCss] = useState('');
	const [javaScript, setJavaScript] = useState('');
	const [srcDoc, setSrcDoc] = useState('');

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
   </html>`)
    }, 300);
    return () => clearTimeout(timeout);
  }, [html, css, javaScript])

	return (
		<>
			<div className="pane top-pane">
				<Editer language="htmlmixed" displayName="HTML" value={html} onChange={setHtml} />
				<Editer language="css" displayName="CSS" value={css} onChange={setCss} />
				<Editer language="javascript" displayName="JavaScript" value={javaScript} onChange={setJavaScript} />
			</div>
			<div className="pane bottom-pane">
				<iframe srcDoc={srcDoc} title="output" sandbox="allow-script" frameBorder="0" width="100%" height="100%" />
			</div>
		</>
	);
}

export default App;
