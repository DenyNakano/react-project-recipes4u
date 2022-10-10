import React from "react";
import { Spinner } from "reactstrap";
import { TitleLogo } from "../Components/TitleLogo";

export const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: 540,
        alignItems: "center",
      }}
    >
      <Spinner
        color="dark"
        style={{
          height: "3rem",
          width: "3rem",
        }}
      >
        Loading ...
      </Spinner>
      <h1>
        <TitleLogo />
      </h1>
    </div>
  );
};
