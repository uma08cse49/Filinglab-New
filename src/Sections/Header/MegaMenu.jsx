import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MegaMenuWrapper from "./Megamenu.style";

import startupData from "../../assets/data/header/startup";
import gstData from "../../assets/data/header/ipr";
import incomeTaxData from "../../assets/data/header/tax";
import complianceData from "../../assets/data/header/environmental";
import consultationData from "../../assets/data/header/regulatory";

// Helper function to chunk arrays
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const MegaMenu = ({ megaMenuClass, activeKey }) => {
  const dataMap = {
    startup: startupData,
    gst: gstData,
    incomeTax: incomeTaxData,
    consultation: consultationData,
    compliance: complianceData,
  };

  const defaultData = dataMap[activeKey] || [];
  const [activeTitle, setActiveTitle] = useState(defaultData[0] || {});

  useEffect(() => {
    const newData = dataMap[activeKey] || [];
    setActiveTitle(newData[0] || {});
  }, [activeKey]);

  return (
    <MegaMenuWrapper>
      <div className="mega-menu">
        <div className={`mega-menu-card ${megaMenuClass}`} style={{ display: "flex", width: "100%" }}>
          
          {/* Left menu section */}
          <div className="mega-menu-left" style={{ width: "25%", borderRight: "1px solid #ccc", paddingRight: "10px" }}>
            {(dataMap[activeKey] || []).map((item, idx) => (
              <div
                key={idx}
                className={`menu-title-item ${activeTitle.Maintitle === item.Maintitle ? "active" : ""}`}
                onClick={() => setActiveTitle(item)}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  backgroundColor: activeTitle.Maintitle === item.Maintitle ? "#ddd" : "transparent"
                }}
              >
                {item.Maintitle.trim() || "More"}
              </div>
            ))}
          </div>

          {/* Right menu section */}
          <div className="mega-menu-right" style={{ width: "75%", display: "flex", flexDirection: "row" }}>
            <div className="mega-menu-column">
              {chunkArray(activeTitle.menuList?.slice(0, Math.ceil((activeTitle.menuList?.length || 0) / 2)), 6).map((chunk, i) => (
                <ul key={i} className="mega-menu-list">
                  {chunk.map((menuItem, mid) => (
                    <li key={mid}>
                      <NavLink to={menuItem.url}>{menuItem.title}</NavLink>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            <div className="mega-menu-column">
              {chunkArray(activeTitle.menuList?.slice(Math.ceil((activeTitle.menuList?.length || 0) / 2)), 6).map((chunk, i) => (
                <ul key={i} className="mega-menu-list">
                  {chunk.map((menuItem, mid) => (
                    <li key={mid}>
                      <NavLink to={menuItem.url}>{menuItem.title}</NavLink>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MegaMenuWrapper>
  );
};

export default MegaMenu;
