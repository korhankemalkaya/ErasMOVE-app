import { Grid, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PreApprovalsTable from './table/PreApprovalsTable';
import { getPreApprovalFormsRequest, deletePreApprovalFormRequest } from "../actions";


const PreApprovalPage = ({ deletePreApprovalFormRequest, getPreApprovalFormsRequest, preApprovalForms, userId, typeForReq }) => {
    useEffect(() => {
        getPreApprovalFormsRequest(userId, typeForReq);
    }, [getPreApprovalFormsRequest, userId, typeForReq]);

    return (
        <Stack spacing={2}>
            <Typography gutterBottom variant="h1" textAlign={ "center" } component="div">
                Pre-Approval Form Requests
            </Typography>
            <Grid container justifyContent={'center'}>
                <Grid item xs={12}>
                    <PreApprovalsTable deletePreApprovalFormRequest={deletePreApprovalFormRequest} preApprovalForms= {preApprovalForms} />
                </Grid>
            </Grid>
        </Stack>
    );
};
const mapStateToProps = state => {
    const preApprovalForms = state.requests.preApprovalForms;
    const userId = state.user.user.id;
    const typeForReq = state.auth.authTypeForReq;
    return {
        preApprovalForms,
        userId,
        typeForReq,
    };
};

const mapActionsToProps = {
    getPreApprovalFormsRequest,
    deletePreApprovalFormRequest,
};

PreApprovalPage.propTypes = {
    preApprovalForms: PropTypes.array,
    userId: PropTypes.number,
    getPreApprovalFormsRequest: PropTypes.func,
    deletePreApprovalFormRequest: PropTypes.func,
    typeForReq: PropTypes.string,
};
  
PreApprovalPage.defaultProps = {
    preApprovalForms: [],
};

export default connect(mapStateToProps, mapActionsToProps)(PreApprovalPage);