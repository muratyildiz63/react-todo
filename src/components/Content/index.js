import React from "react";
import Footer from "../FooterContent";
import List from "./List";


function Content() {
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <List />
      </section>
      <Footer />
    </>
  );
}

export default Content;
