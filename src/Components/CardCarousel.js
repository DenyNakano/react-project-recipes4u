import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./CardCarousel.css";
import { Carrousel } from "./Carrousel";
import { TitleLogo } from "./TitleLogo";
export const CardCarousel = () => {
  return (
    <div className="content">
      <Card className="card">
        <CardBody className="content">
          <div style={{ textAlign: "center" }}>
            <CardTitle tag="h1">
              <TitleLogo />
            </CardTitle>
            <Carrousel />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
