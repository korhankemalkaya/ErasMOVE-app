import React, { useState } from "react";
import { Button, Grid, Modal, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import PropTypes  from 'prop-types';
import { MDBCard, MDBCardBody, MDBCardText, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { sentenceCase } from 'change-case';

import Label from '../../label';
import { connect } from "react-redux";


const CourseRequestDetail = ({ openDetails, handleCloseDetails, authType }) => {

    const [feedback, setFeedback] = useState('');

    const handleChangeFeedback = e => setFeedback(e.target.value);

    const status = 'waiting';

    return (
        <Modal
            open={openDetails}
            onClose={handleCloseDetails}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            BackdropProps={{ style: { backgroundColor: "rgba(0, 0, 0, 0.2)" } }}
        >
            <Box sx={style}>
                <Stack spacing={6}>
                    <Typography id="modal-modal-title" textAlign={"center"}
                        variant="h2" component="h1">
                        Course Request
                    </Typography>
                    <Stack alignItems={"center"} spacing={3}>
                        <section style={{ width: '100%', backgroundColor: '#eee' }}>
                            <MDBContainer className="py-5">
                                <Typography id="modal-modal-title" sx={{ marginBottom: '10px'}}
                                    variant="h3" component="h1">
                                    Details
                                </Typography>
                                <MDBRow>
                                <MDBCol lg="12">
                                    <MDBCard className="mb-4">
                                    <MDBCardBody>
                                        <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Course Name</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">ACS319</MDBCardText>
                                        </MDBCol>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Description</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">Object Oriented Software Engineering</MDBCardText>
                                        </MDBCol>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Type</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">Must Course</MDBCardText>
                                        </MDBCol>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Equivalent Course</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">CS319</MDBCardText>
                                        </MDBCol>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Syllabus</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">
                                                <Button variant="contained">Download Syllabus</Button>
                                            </MDBCardText>
                                        </MDBCol>
                                        </MDBRow>
                                    </MDBCardBody>
                                    </MDBCard>

                                    <Typography id="modal-modal-title" sx={{ marginBottom: '10px'}}
                                        variant="h3" component="h1">
                                        Response
                                    </Typography>
                                    {(status == 'waiting') && (authType == 'Course Coordinator') 
                                    ? (
                                        <MDBRow>
                                            <MDBCol md="12">
                                                <MDBCard className="mb-4 mb-md-0">
                                                <MDBCardBody>
                                                    <MDBRow>
                                                        <MDBCol sm="3">
                                                            <MDBCardText>{status}</MDBCardText>
                                                        </MDBCol>
                                                        <MDBCol sm="9">
                                                            <MDBCardText className="text-muted">
                                                                <Label color={(status === 'waiting' && 'warning') || (status === 'rejected' && 'error') || 'success'}>{sentenceCase(status)}</Label>
                                                            </MDBCardText>
                                                        </MDBCol>
                                                    </MDBRow>
                                                    <hr />
                                                    <MDBRow>
                                                        <MDBCol sm="3">
                                                            <MDBCardText>Feedback</MDBCardText>
                                                        </MDBCol>
                                                        <MDBCol sm="9">
                                                            <MDBCardText className="text-muted">
                                                                <TextField
                                                                    id="outlined-multiline-flexible"
                                                                    multiline
                                                                    fullWidth
                                                                    maxRows={4}
                                                                    value={feedback}
                                                                    onChange={handleChangeFeedback}
                                                                />
                                                            </MDBCardText>
                                                        </MDBCol>
                                                    </MDBRow>
                                                    <hr />
                                                    <Grid container >
                                                        
                                                        <Grid item xs={2} >
                                                            <Button sx={{margin: 'auto'}} variant="contained" color="success" size="medium" onClick={handleCloseDetails} >
                                                                Accept
                                                            </Button>
                                                        </Grid>
                                                      
                                                        <Grid item xs={2} >
                                                            <Button sx={{margin: 'auto'}} variant="contained" color="error" size="medium" onClick={handleCloseDetails} >
                                                                Reject
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </MDBCardBody>
                                                </MDBCard>
                                            </MDBCol>
                                        </MDBRow>
                                    )
                                    
                                    : (
                                        <MDBRow>
                                            <MDBCol md="12">
                                                <MDBCard className="mb-4 mb-md-0">
                                                <MDBCardBody>
                                                    { (authType !== 'Course Coordinator') 
                                                    ? (
                                                        <MDBRow>
                                                            <MDBCol sm="3">
                                                                <MDBCardText>Course Coordinator</MDBCardText>
                                                            </MDBCol>
                                                            <MDBCol sm="9">
                                                                <MDBCardText className="text-muted">
                                                                    Can Alkan
                                                                </MDBCardText>
                                                            </MDBCol>
                                                        </MDBRow>
                                                    ) : null }
                                                    { (authType !== 'Course Coordinator') ? <hr /> : null }
                                                    <MDBRow>
                                                        <MDBCol sm="3">
                                                            <MDBCardText>{status}</MDBCardText>
                                                        </MDBCol>
                                                        <MDBCol sm="9">
                                                            <MDBCardText className="text-muted">
                                                                <Label color={(status === 'waiting' && 'warning') || (status === 'rejected' && 'error') || 'success'}>{sentenceCase(status)}</Label>
                                                            </MDBCardText>
                                                        </MDBCol>
                                                    </MDBRow>
                                                    <hr />
                                                    <MDBRow>
                                                        <MDBCol sm="3">
                                                            <MDBCardText>Feedback</MDBCardText>
                                                        </MDBCol>
                                                        <MDBCol sm="9">
                                                            <MDBCardText className="text-muted">LGTM Thanks!</MDBCardText>
                                                        </MDBCol>
                                                    </MDBRow>
                                                </MDBCardBody>
                                                </MDBCard>
                                            </MDBCol>
                                        </MDBRow>
                                    )

                                    }
                                </MDBCol>
                                </MDBRow>    
                            </MDBContainer>
                            </section>
                    </Stack>
                    <Grid container sx={{marginTop: '0px'}} alignItems={"flex-end"}>
                        <Button sx={{margin: 'auto'}} variant="contained" color="error" size="medium" onClick={handleCloseDetails} >
                            Close
                        </Button>
                    </Grid>
                </Stack>
            </Box>
        </Modal>
    );
};

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: '60%',
    bgcolor: "background.paper",
    border: "none",
    borderRadius: "6px",
    boxShadow: 24,
    p: 4,
    maxHeight: "90%",
    mb: 2,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    overflowY: "scroll",
};


const mapStateToProps = state => {
    const authType = state.auth.authType;
    return {
        authType,
    };
};

CourseRequestDetail.propTypes = {
    openDetails: PropTypes.bool,
    handleCloseDetails: PropTypes.func,
    authType: PropTypes.string
};
  
CourseRequestDetail.defaultProps = {
    openDetails: false,
    handleCloseDetails: f => f,
};

export default connect(mapStateToProps, {})(CourseRequestDetail);