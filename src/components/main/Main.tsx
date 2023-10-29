"use client";
import Temperature from "../temperature/Temperature";
import SiteTable from "../sitePanel/SiteTable";
import "./main.css";

export default function Main() {
  return (
    <div className="main">
      <div className="weatherPanel">
        <div id="today">
          <Temperature></Temperature>
        </div>

        <div id="tomorrow">
          <Temperature></Temperature>
        </div>
      </div>

      <div className="tablePanel">
        <SiteTable></SiteTable>
      </div>
    </div>
  );
}
