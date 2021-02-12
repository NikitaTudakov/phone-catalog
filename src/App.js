import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch('/api/phones.json')
    .then(response => response.json())
    .then(result =>  setPhones(result))
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <section>
            <p>
              Search:
              <input type="text" />
            </p>

            <p>
              Sort by:
              <select>
                <option value="name">Alphabetical</option>
                <option value="age">Newest</option>
              </select>
            </p>
          </section>

          <section>
            <p>Shopping Cart</p>
            <ul>
              <li>Phone 1</li>
              <li>Phone 2</li>
              <li>Phone 3</li>
            </ul>
          </section>
        </div>

        <div className="col-md-10">
          <ul className="phones">
            {phones.map(phone => (
              <li key={phone.age}>
                <a href={`#!/phones/${phone.id}`} className="thumb">
                  <img alt={phone.id} src={phone.imageURL}/>
                </a>
                <div className="phones__btn-buy-wrapper">
                  <a className="btn btn-success" href="#buy">
                    Add
                  </a>
                </div>
                <a href={`#!/phones/${phone.id}`}>{phone.id}</a>
                <p>
                  {phone.snippet}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
