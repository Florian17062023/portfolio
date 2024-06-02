import React from 'react';
import { CRow, CCol, CCard, CCardImage,CCardBody, CCardTitle, CCardText  } from '@coreui/react';


const Projets = () => {
  return (
    <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
    <CCol xs>
      <CCard className="h-100">
        <CCardImage orientation="top" src={'/panda.jpg'} />
        <CCardBody>
          <CCardTitle>Le panda</CCardTitle>
          <CCardText>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol xs>
      <CCard className="h-100">
        <CCardImage orientation="top" src={'/cochon.jpg'} />
        <CCardBody>
          <CCardTitle>Le cochon</CCardTitle>
          <CCardText>
            This card has supporting text below as a natural lead-in to additional content.
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol xs>
      <CCard className="h-100">
        <CCardImage orientation="top" src={'/dragon2.jpg'} />
        <CCardBody>
          <CCardTitle>Le dragon</CCardTitle>
          <CCardText>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This card has even longer content than the first to show that equal height
            action.
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol xs>
      <CCard className="h-100">
        <CCardImage orientation="top" src={'/lapin.jpg'} />
        <CCardBody>
          <CCardTitle>Le lapin</CCardTitle>
          <CCardText>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  );
};

export default Projets;