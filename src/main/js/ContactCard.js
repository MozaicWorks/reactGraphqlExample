import * as React from "react";
import {Card, CardHeader} from "material-ui";

class ContactCard extends React.Component {

    constructor(props) {
        super(props)
    }

    contact() {
        return this.props.contact
    }

    render() {
        return (
            <Card>
                <CardHeader>{this.contact().email.emailAddress}</CardHeader>
            </Card>
        )
    }
}

export default ContactCard;