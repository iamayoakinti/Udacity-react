import React, { Component } from "react";

class ContactList extends React.Component {
  render() {
    const people = this.props.contact;
    return (
      <ul>
        {people.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList
          contact={[
            {
              name: "Joyce",
            },
            {
              name: "Bayo",
            },
            {
              name: "Sola",
            },
          ]}
        />
        <ContactList
          contact={[
            {
              name: "Amanda",
            },
            {
              name: "Precious",
            },
            {
              name: "Kemi",
            },
          ]} />
        <ContactList
          contact={[
            {
              name: "Tunde",
            },
            {
              name: "Tobi",
            },
            {
              name: "Toke",
            },
          ]} />
      </div>
    );
  }
}

export default App;
