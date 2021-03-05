import React from 'react';
import SignIn from './Pages/SignIn';
import axios from 'axios'

let data = {
  'type': 'sum',
  'val1': 453,
  'val2': 5465,
}

let url = 'http://3.141.244.76'

const someFetch = () => {
  axios({
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    method: 'post',
    url: url,
    data: data,
  })
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});
}


function App() {
  //someFetch();
  return (
    <div className="App">
        <SignIn />
    </div>
  );
}

export default App;
