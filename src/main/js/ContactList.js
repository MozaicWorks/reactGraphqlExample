import * as React from "react";
import {List} from "material-ui";
import ContactListItem from "./ContactListItem";

class ContactList extends React.Component {

    constructor(props) {
        super(props)
    }

    contacts() {
        return this.props.contacts
    }

    render() {
        return (this.contacts() ?
                <List children={this.contactListItems(this.contacts())}/>
                : ""
        )
    }

    contactListItems(contacts) {
        return contacts.map((contact) => {
            return (
                <ContactListItem key={contact.id} contact={contact}/>
            )
        })
    }
}

export default ContactList;