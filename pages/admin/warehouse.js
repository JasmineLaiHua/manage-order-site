import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import Quote from "components/Warehouse/Quote.js";
import Muted from "components/Warehouse/Muted.js";
import Primary from "components/Warehouse/Primary.js";
import Info from "components/Warehouse/Info.js";
import Success from "components/Warehouse/Success.js";
import Warning from "components/Warehouse/Warning.js";
import Danger from "components/Warehouse/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

function WarehouseInfomationPage() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardHeader color="info">
          <h4 className={classes.cardTitleWhite}>Warehouse Information Page</h4>
        </CardHeader>
        <CardBody>
          <div className={classes.typo}>
            <div className={classes.note}>Warehouse</div>
            <Info>
              Quang Chau - Đường bộ
            </Info>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Address</div>
            <Info>
              Bach Van
            </Info>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Shipping Fee</div>
            <Info>
              35000
            </Info>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Exchange Rate</div>
            <Info>
              3855
            </Info>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Shipping duration</div>
            <Info>
              ~20
            </Info>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Recipient Name</div>
            <Info>
              AAAA
            </Info>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Recipient phone number</div>
            <Info>
              0123456789
            </Info>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader color="info">
          <h4 className={classes.cardTitleWhite}>Warehouse Information Page</h4>
        </CardHeader>
        <CardBody>
          <div className={classes.typo}>
            <div className={classes.note}>Warehouse</div>
            <Info>
              Quang Chau - Đường bộ
            </Info>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Address</div>
            <Info>
              Bach Van
            </Info>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Shipping Fee</div>
            <Info>
              35000
            </Info>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Exchange Rate</div>
            <Info>
              3855
            </Info>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Shipping duration</div>
            <Info>
              ~20
            </Info>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Recipient Name</div>
            <Info>
              AAAA
            </Info>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Recipient phone number</div>
            <Info>
              0123456789
            </Info>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

WarehouseInfomationPage.layout = Admin;

export default WarehouseInfomationPage;
