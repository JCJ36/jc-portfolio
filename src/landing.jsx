import './landing.css';
import {
    BrowserRouter,
    Link,
    Routes,
    Route,
    useNavigate,
    useMatch,
} from "react-router-dom";
function App(){
    const navigate = useNavigate();
    const Run = () => {
        navigate('/home')
    }
    const isHomeOrNested = useMatch('/home/*');
    const buttonClasses = `btn transition-all duration-500 ${isHomeOrNested ? 'bg-black/10 border-black/70' : 'bg-white border-gray-400' } hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border rounded shadow m-3`
    const containerClasses = `fixed inset-0 transition-all duration-500 ${isHomeOrNested ? 'blur-xs pointer-events-none bg-black/70' : ''}`;
    return(
        <div className={containerClasses} inert={isHomeOrNested ? true : undefined}>
            <div id="landing" class="">
                <p>&lt;!DOCTYPE html&gt;</p>
                <p>&lt;html lang="en"&gt;</p>
                <p>    &lt;head&gt;</p>
                <p>        &lt;meta charset="UTF-8"&gt;</p>
                <p>        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</p>
                <p>        &lt;script id="img" src="//111.12.95/scope/type.js"&gt;&lt;/script&gt;</p>
                <p>        &lt;title&gt;Portfolio&lt;/title&gt;</p>
                <p>    &lt;/head&gt;</p>
                <p>    &lt;body&gt;</p>
                <p>        &lt;p&gt;Welcome, Run Me!&lt;/p&gt;</p>
                <p>        &lt;div id="root"&gt;&lt;/div&gt;</p>
                <p>        &lt;script type="module" src="/src/main.jsx"&gt;</p>
                <p>    &lt;/body&gt;</p>
                <p>&lt;/html&gt;</p>
            </div>
            <button class={buttonClasses} onClick={Run}>
                Run
            </button>
        </div>
    );
}

export default App;