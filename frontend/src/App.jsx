import "./App.css";
import Upload from "./components/Upload";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Enterprise Knowledge Assistant</h1>
        <p>
          Upload your documents and ask questions.
        </p>
      </header>

      <Upload />

      <hr />

      <Chat />
    </div>
  );
}

export default App;
