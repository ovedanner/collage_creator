import React, { Component } from 'react';
import './styles/App.scss';
import CollageItems from "./CollageItems";

const collageItems = [
  'https://images.ctfassets.net/o59xlnp87tr5/6NVEIec3ZumgAagm4ye8C8/d42bac486f4a4b8dbff1a1506ee4e2e1/shutterstock_388630477.jpg?w=360&h=240&fit=fill',
  'https://images.ctfassets.net/o59xlnp87tr5/1HRx5AVsGEQCKgSCSmCC6W/5c753e499748bfff4dd004a143e9f69b/shutterstock_181861484.jpg?w=360&h=240&fit=fill',
  'https://images.ctfassets.net/o59xlnp87tr5/54o5TfFwXSgGcscoo8AsGa/574abe716a6ad36e6f6d719ab9f2fc06/shutterstock_127553978.jpg?w=360&h=240&fit=fill'
];

class App extends Component {
  render() {
    return (
      <div id="collage-creator">
        <CollageItems items={collageItems} />
      </div>
    );
  }
}

export default App;
