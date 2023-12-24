export function Contact() {
  return (
    <section>
      <ContactForm />
    </section>
  );
}

function ContactForm() {
  return (
    <form action="https://httpbin.org/get" method="get" class="contact-form">
      <fieldset class="contact-fieldset">
        <legend class="offscreen">Send Us A Message</legend>
        <p class="contact-p">
          <label class="contact-label" htmlFor="name">
            Name:
          </label>
          <input
            class="contact-input"
            type="text"
            name="name"
            id="name"
            placeholder="your name"
            required
          />
        </p>
        <p lass="contact-p">
          <label class="contact-label" htmlFor="enail">
            Email:
          </label>
          <input
            class="contact-input"
            type="email"
            name="email"
            id="email"
            placeholder="your email"
            required
          />
        </p>
        <p class="contact-p">
          <label class="contact-label" htmlFor="message">
            Your Message:
          </label>
          <br />
          <textarea
            class="contact-textarea"
            name="message"
            id="message"
            placeholder="type yor message here"
            required
          ></textarea>
        </p>
      </fieldset>
      <button
        class="contact-button"
        type="submit"
        formaction="https://httpbin.org/post"
      >
        Send
      </button>
    </form>
  );
}
