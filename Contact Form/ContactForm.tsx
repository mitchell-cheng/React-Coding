import React from "react";

export default function ContactForm() {
  return (
    <>
      <form
        method="post"
        action=""
        >
          <div>
            <label htmlFor="name-input">Name</label>
            <input id="name-input" name="name" type="text" />
          </div>
          <div>
            <label htmlFor="email-input">Email</label>
            <input id="email-input" name="email" type="email" />
          </div>
          <div>
            <label htmlFor="message-input">Message</label>
            <textarea
              id="message-input"
              name="message"></textarea>
          </div>
          <div>
            <button>Send</button>
          </div>
      </form>
    </>
  );
}