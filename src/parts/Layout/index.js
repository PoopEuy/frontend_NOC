import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

//material ui core
import { makeStyles } from "@material-ui/core/styles";

//redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//components OR parts local
import { getApt1Nojs } from "@redux/apt1/nojs/action";
import DrawerHeader from "@parts/DrawerHeader";
import Apt1 from "@components/ListPages/apt1";
import { useRouter } from "next/router";
import Link from "next/link";

const useStyle = makeStyles({
  content: {
    marginTop: 74,
  },
  link_button: {
    marginRight: 8,
    padding: "12px 16px",
    borderRadius: 4,
    backgroundColor: "#ffffff",
    boxShadow: "0px 3px 8px 4px rgba(0,0,0,0.2)",
    cursor: "pointer",
    textAlign: "center",
    userSelect: "none",
    "&:hover": {
      background: "#f5f5f5",
    },
  },
});

const listPages = () => {
  return (
    <>
      <Apt1 />
      <Link
        href={{
          pathname: "/outproject",
        }}
      >
        <div className={useStyle().link_button}>Non Bakti Project</div>
      </Link>
    </>
  );
};

const Layout = ({ children, getApt1Nojs }) => {
  const router = useRouter().pathname;

  useEffect(() => {
    getApt1Nojs();
  }, []);

  const page = listPages();
  // console.log("Layout");

  return (
    <>
      <DrawerHeader
        listPage={page}
        mainPage={children}
        noc={router === "/apt1/noc" ? true : false}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getApt1Nojs: bindActionCreators(getApt1Nojs, dispatch),
  };
};

Layout.propTypes = {
  mainPage: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default connect(null, mapDispatchToProps)(Layout);
