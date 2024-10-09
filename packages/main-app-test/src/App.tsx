import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Counter from "../../shared-components/src/components/Counter"

function App() {
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React In Main App</h1>
            <Counter />
        </>
    )
}

export default App
