import React from 'react'
import contactData from '../assets/contact-data'
import Contact from './Contact'

export default function ContactUs() {
    const renderContact = (contact) => (<Contact contact={contact} />)
    return (
        <footer>
            {contactData.map(renderContact)}
        </footer>
    )
}
