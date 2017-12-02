import * as React from "react";
import ContactList from "./ContactList";

class PersonList extends React.Component {

    constructor(props) {
        super(props)
    }

    list() {
        return this.props.list
    }

    render() {
        return (
            <div>
                {this.list() ?
                    this.list().map((person) => {
                        return <div key={person.id}>
                            {person.name}
                            {this.contactList(person.contacts)}
                        </div>
                    }) : ""
                }
            </div>
        )
    }

    contactList(contacts) {
        return <ContactList contacts={contacts}/>
    }
}

export default PersonList;