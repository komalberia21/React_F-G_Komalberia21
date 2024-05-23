import "./App.css"
import Form from "./components/Form/Form";
import SectionTwo from "./components/SectionTwo/SectionTwo";


const App = () => {
  return (
    <div className="app">
      <div className="title">
      Aromatic bar
      </div>
      <div className="form">
        <Form/>
        </div>
     
      <SectionTwo/>
    </div>
  )
}

export default App