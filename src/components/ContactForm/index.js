import {useForm} from '@formspree/react';
import {useState} from 'react';
import Arrow from '../Arrow';
import Loader from '../Loader';
import {whiteColor} from '../../styles/variables.module.scss';
import styles from '../../styles/components/ContactForm.module.scss';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mzbwbkla');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [checked, setChecked] = useState(false);

  if (state.submitting) return <Loader/>;

  if (state.succeeded) {
    return (
      <p className={styles.text}>
        Thank you for writing to us! Our specialists will contact you.
      </p>
    );
  }

  return (
    <form
      className={styles.contactForm}
      onSubmit={handleSubmit}
    >
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        className={`${styles.nameInput} ${styles.input}`}
      />
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className={`${styles.emailInput} ${styles.input}`}
      />
      <textarea
        id="message"
        name="message"
        placeholder={'Message'}
        rows={4}
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
        className={`${styles.messageInput} ${styles.input}`}
      />
      <div className={styles.wrapper}>
        <div className={styles.subscribeWrapper}>
          <input
            id="subscribe"
            name="subscribe"
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            className={`${styles.input} ${styles.subscribeInput}`}
          />
          {'I consent to receive commercial information in the form of a newsletter'}
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className={styles.submitBtn}
        >
          Send
          <Arrow fillColor={whiteColor} className={styles.arrow}/>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;