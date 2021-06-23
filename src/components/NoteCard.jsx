import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, makeStyles, Typography } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Avatar from "@material-ui/core/Avatar";

const NoteCard = ({ data }) => {
  const toDate = (dateStr) => {
    const x = dateStr.split("T")[0].split("-").slice(1);
    return `${x[1]}-${x[0]}`;
  };

  return (
    <div>
      <Card>
        <CardHeader
          avatar={<Avatar src={data.picture.medium}></Avatar>}
          action={
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          }
          title="Personnel ID"
          subheader="123456"
        />

        <CardContent>
          <Typography variant="h6">Name</Typography>
          <Typography variant="body2">
            {data.name.first} {data.name.last}
          </Typography>
          <Typography variant="h6">Telephone</Typography>
          <Typography variant="body2">{data.phone}</Typography>
          <Typography variant="h6">Birthday</Typography>
          <Typography variant="body2">{toDate(data.dob.date)}</Typography>
          <Typography variant="h6">Email</Typography>
          <Typography variant="body2">{data.email}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default NoteCard;
