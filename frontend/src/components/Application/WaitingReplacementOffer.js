import * as React from "react";
import {
    Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from 'prop-types';


export const WaitingReplacementOffer = ({acceptReplacementRequest, declineReplacementRequest, offer}) => {
//   const offer = {
//     from: "Eray Tüzün",
//     student: "Alperen Gözeten",
//     university: "Bilkent University",
//     status: "Waiting for your response...",
//     info: "You have a replacement offer for the Exchange Program.",
//   };

  const handleAccept = () => {
    acceptReplacementRequest(offer.id, offer.student.isErasmus, offer.student.id);
  };

  const handleDecline = () => {
    declineReplacementRequest(offer.id, offer.student.isErasmus, offer.student.id);
  };

  return (
    (offer.departmentCoordinator) ? (<form autoComplete="off">
      <Card>
        <CardHeader
          subheader="You have a replacement offer to be answered."
          title="Replacement Offer"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                disabled
                label="From"
                name="from"
                value={offer?.departmentCoordinator?.name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                disabled
                label="To"
                name="to"
                value={offer?.student?.name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                disabled
                label="New University"
                name="uni"
                value={offer?.student?.isErasmus ? offer?.erasmusUniversity?.universityName : offer?.exchangeUniversity?.universityName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                disabled
                label="Status"
                name="status"
                value={offer?.status}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                disabled
                label="Info"
                name="info"
                value={offer?.info}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Button color="success" variant="contained" onClick={handleAccept}>
                Accept
              </Button>
            </Grid>
            <Grid item md={6} xs={12}>
              <Button color="error" variant="contained" onClick={handleDecline}>
                Decline
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
      </Card>
    </form>) : <Typography
        gutterBottom
        variant="h3"
        textAlign={"center"}
        component="div"
      >
        {"You don't have any replacement request"} 
      </Typography>
  );
};

WaitingReplacementOffer.propTypes = {
  offer: PropTypes.object,
  acceptReplacementRequest: PropTypes.func,
  declineReplacementRequest: PropTypes.func,
};
