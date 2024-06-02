import React, { useState, useEffect } from "react";
import {
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CFormTextarea,
  CFormSelect,
  CRow,
  CCol,
  CButton,
} from "@coreui/react";

const ContactForm = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    let timer;
    if (message) {
      timer = setTimeout(() => {
        setMessage(null);
      }, 20000); // 20 secondes
    }
    return () => clearTimeout(timer);
  }, [message]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Formulaire envoyé avec succès!");
  };

  return (
    <CForm onSubmit={handleSubmit}>
      {/* Champ de saisie pour le nom et le prenom */}
      <CRow className="mb-4">
        <CCol xs>
          <CFormInput placeholder="Prénom" aria-label="Prénom" name="prenom" />
        </CCol>
        <CCol xs>
          <CFormInput placeholder="Nom" aria-label="Nom" name="nom" />
        </CCol>
      </CRow>

    
    

      {/* Champ de saisie pour l'adresse email */}
      <CFormInput
        type="email"
        id="exampleFormControlInput1"
        label="Adresse mail"
        placeholder="nom@exemple.com"
        aria-describedby="exampleFormControlInputHelpInline"
        className="mb-3"
        name="email"
      />

      {/* Champ de saisie pour laliste déroulante */}
      <CFormSelect
        size="sm"
        className="mb-3"
        aria-label="Petit menu déroulant"
        name="subject"
      >
        <option value="">Ouvrir ce menu déroulant</option>
        <option value="product_info">Information sur un produit</option>
        <option value="order">Commande</option>
      </CFormSelect>

      {/* Champ de saisie pour le message */}
      <CFormTextarea
        id="exampleFormControlTextarea1"
        label="Message"
        rows={3}
        className="mb-2"
        name="message"
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
