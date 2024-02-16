// HOOK'S
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import Button from "../Button";

// REDUX
import { getPagination } from "../../Redux/actions";

// LIBRARY
import { Pagination } from "antd";

// CSS
import "./pagination.css";

// JAVASCRIP

function PaginationComponent({ pages }) {
  const dispatch = useDispatch();

  const handlerLogin = (page) => {
    dispatch(getPagination(page));
  };

  return (
    <div className="container-pagination">
      <Pagination
        defaultCurrent={1}
        total={pages * 10}
        onChange={handlerLogin}
      />
    </div>
  );
}

export default PaginationComponent;
