import React, {useState} from 'react';

function App() {
    const [usename, setUsername] = useState('');
    const [Password,setpassword] = useState('');
    const onSubmit = (event) => {
        event.preventDefault();
      console.log(usename, Password);
    };

    return (
        <div className="App">
            <form onSubmit={onSubmit}>
            <input placeholder="Username" value={usename} onChange={(e) => setUsername(e.target.value)}/> <br/>
            <input placeholder="Password" value={Password}onChange={(e) => setpassword(e.target.value)}/> <br/>
            <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default App;