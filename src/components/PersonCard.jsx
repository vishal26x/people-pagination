import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./PersonCard.scss";
import { BiInfoCircle, BiBody } from "react-icons/bi";
import {
  GiBodyHeight,
  GiWeight,
  GiHairStrands,
  GiEyeTarget,
  GiMale,
} from "react-icons/gi";
const PersonCard = ({ data }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const [selected, setSelected] = useState('');
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="people">
      <div className="people-container">
        {currentItems.map((p, i) => (
          <div key={i} className="person-card">
            <div className="person">
              <p className="p-name">{p.name}</p>
              <span className="detail-btn" onClick={() => toggle(i)}>
                {selected === i ? "Hide Details" : "Show Details"}
                <BiInfoCircle style={{ marginLeft: "5px", fontSize: "1rem" }} />
              </span>
            </div>
            <div
              className={
                selected === i ? "person-details show" : "person-details"
              }
            >
              <p className="p-height">
                <GiBodyHeight /> Height: <span>{p.height}</span>cm
              </p>
              <p className="p-height">
                <GiWeight /> Weight:
                <span>{p.mass}kg</span>
              </p>
              <p className="p-height">
                <GiHairStrands /> Hair Color: <span>{p.hair_color}</span>
              </p>
              <p className="p-height">
                <BiBody /> Skin Color: <span>{p.skin_color}</span>
              </p>
              <p className="p-height">
                <GiEyeTarget /> Eye Color: <span>{p.eye_color}</span>
              </p>
              <p className="p-height">
                <GiMale /> Gender: <span>{p.gender}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        containerClassName="paginate"
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Prev"
        renderOnZeroPageCount={null}
        pageClassName="page-indicator"
        activeClassName="active-page"
        nextClassName="arrow-icon"
        previousClassName="arrow-icon"
      />
    </div>
  );
};

export default PersonCard;
