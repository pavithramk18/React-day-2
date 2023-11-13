import logo from './logo.svg';
import './App.css';
import ComponentDemo from './Component';

function App() {
  return (
    <div className="App">
      <ComponentDemo add="demo"></ComponentDemo>
      <ComponentDemo add="copy"></ComponentDemo>
      <ComponentDemo add="solid"></ComponentDemo>

      
    </div>
  );
}

export default App;


//Component-It is same as that of a function
//Rules:
//1.Component name should always starts with Capital Letter
//2.File name also should starts in capital letter
//Component should always return a html element such as h tag,div tag,,span tag, and so on
//It should return only one element at a time
