import React from 'react'
import contactData from '../assets/contact-data'
import Contact from './Contact'

export default function ContactUs() {
    const renderContact = (contact, n) => (<Contact contact={contact} key={n} />)
    return (
        <footer>
            <h2> Contact </h2>
            <div className='contacts'>
                {contactData.map(renderContact)}
            </div>
        </footer>
    )
}
