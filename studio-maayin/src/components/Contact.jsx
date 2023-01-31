import React from 'react'

export default function Contact({ contact }) {
    return (
        <div className="contact">
            <a href={contact.href}><img src={contact.icon} /> </a>
            <label>{contact.data}</label>
        </div>
    )
}
