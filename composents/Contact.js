import React, { useState } from "react";
import {
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CFormTextarea,
  CFormSelect,
  CRow,
  CCol,
  CButton
} from "@coreui/react";

const ContactForm = () => {
  const [message, setMessage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Formulaire envoyé avec succès!");
  };

  return (
    <CForm onSubmit={handleSubmit}>
      {/* Champ de saisie pour le nom et le prenom */}
      <CRow className="mb-4">
        <CCol xs>
          <CFormInput placeholder="Prénom" aria-label="Prénom" />
        </CCol>
        <CCol xs>
          <CFormInput placeholder="Nom" aria-label="Nom" />
        </CCol>
      </CRow>

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
        aria-describedby="exampleFormControlInputHelpInline"
        className="mb-3"
      />

      {/* Champ de saisie pour laliste déroulante */}
      <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
        <option>Open this select menu</option>
        <option value="1">Information sur un produit</option>
        <option value="2">Commande</option>
      </CFormSelect>

      {/* Champ de saisie pour le message */}
      <CFormTextarea
        id="exampleFormControlTextarea1"
        label="Message"
        rows={3}
        text="Must be 8-20 words long."
        className="mb-2"
      />

      {/* Bouton d'envoi du formulaire */}
      <CButton type="submit" color="primary">
        Envoyer
      </CButton>

      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
    </CForm>
  );
};

export default ContactForm;