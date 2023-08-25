import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link as RouterLink, useLocation } from "react-router-dom";

const BreadcrumbsComponent = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path !== "");

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {paths.map((path, index) => (
        <Link
          key={index}
          color={index === paths.length - 1 ? "textPrimary" : "inherit"}
          component={RouterLink}
          to={`/${paths.slice(0, index + 1).join("/")}`}
        >
          {path}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
