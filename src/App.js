
import './App.css';

function App() {
  return (
    <div className="navbar">
      <header>
       <img src="data:image/png;base64,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" alt="" />
       <div className='item'>
        <ul>
          <li>Research<i class="fa-solid fa-caret-down"></i></li>
          <li>API<i class="fa-solid fa-caret-down"></i></li>
          <li>ChatGPT<i class="fa-solid fa-caret-down"></i> </li>
          <li>ChatGPT<i class="fa-solid fa-caret-down"></i> </li>
          <li>Saftey<i class="fa-solid fa-caret-down"></i></li>
          <li>Company<i class="fa-solid fa-caret-down"></i></li>
        </ul>
       </div>
       <div className="right-item" >
       <li >Search</li>
         <li> Login</li>
          <button style={{width:"170px"}}>Try ChatGPT</button> 
       </div>
      </header>
    </div>
  );
}

export default App;
