import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import {Button} from '@mui/material';
import PropTypes from 'prop-types';

export default function ProfileApplicationPage({applications}) {
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Application Progress</MDBCardText>
          <MDBRow>
            <MDBCol md="4">
              <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBProgress className="rounded" >
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
        <MDBRow>
          <MDBCol lg="12">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Type</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">nul</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Status</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">nul</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Admitted University</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">nul</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Semester</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">nul</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Next Step</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">nul</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="12">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">Documents</MDBCardText>
                    <MDBBtn>Add Document</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
ProfileApplicationPage.propTypes = {
    applications: PropTypes.array,
};
  
ProfileApplicationPage.defaultProps = {
    applications: [],
};