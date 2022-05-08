import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

function Orders() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>Order list</h4>
          </CardHeader>
          <CardBody>
          <Button color="info">Add</Button>
          <Button color="info">Search</Button>
            <Table
              tableHeaderColor="info"
              tableHead={["ID", "Warehouse", "Tracking number", "Status", "Item", "Order Price", "Selling Price", ""]}
              tableData={[
                ["random1", "Quang Chau", "123456789", "New", "Ao thun", "23,000VND", "50000VND", "Details"],
                ["random1", "Quang Chau", "123456789", "Checked-out", "Ao thun", "23,000VND", "50000VND", "Details"],
                ["random1", "Quang Chau", "123456789", "In-stock", "Ao thun", "23,000VND", "50000VND", "Details"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

Orders.layout = Admin;

export default Orders;
