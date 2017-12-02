import * as React from "react";
import {ListItem} from "material-ui";
import ContactCard from "./ContactCard";

class ContactListItem extends React.Component {
    constructor(props) {
        super(props)
    }

    contact() {
        return this.props.contact
    }

    render() {
        return (
            <ListItem>
                <ContactCard contact={this.contact()}/>
            </ListItem>
        )
    }
}

export default ContactListItem;