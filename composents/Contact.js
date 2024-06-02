import React from 'react';
import { CForm, CFormInput, CInputGroup, CInputGroupText, CFormTextarea } from '@coreui/react';

const ContactForm = () => {
  return (
    <CForm>
      {/* Champ de saisie pour le username */}
      <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon1">@</CInputGroupText>
        <CFormInput
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </CInputGroup>

      {/* Champ de saisie pour l'adresse email */}
      <CFormInput
        type="email"
        id="exampleFormControlInput1"
        label="Email address"
        placeholder="name@example.com"
        text="Must be 8-20 characters long."
        aria-describedby="exampleFormControlInputHelpInline"
        className="mb-3"
      />

      {/* Champ de saisie pour le message */}
      <CFormTextarea
        id="exampleFormControlTextarea1"
        label="Message"
        rows={3}
        text="Must be 8-20 words long."
        className="mb-3"
      />

      {/* Bouton d'envoi du formulaire */}
      <button type="submit" className="btn btn-primary">
        Envoyer
      </button>
    </CForm>
  );
};

export default ContactForm;