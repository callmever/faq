import { useState } from "react";
import "./App.css";
import data from "./data";
import list from "./list";
import Card from "./components/Card";

function App() {
  const filterItem = list.filter((item) => item.id <= 5);

  return (
    <>
      <div className="banner">
        <div className="banner-title">
          <h2>Helpdesk</h2>
        </div>
        <div className="banner-main">
          <div className="banner-textbox">
            <h1>HELLO!</h1>
            <h1 className="text-bottom">HOW CAN WE HELP?</h1>
            <input
              className="search-box"
              type="text"
              placeholder="Ketik apa yang kamu mau cari"
            />
          </div>
        </div>
      </div>
      <div className="faq-header">
        <h2>Cari Berdasarkan Kategori Masalah</h2>
        <div className="faq-slider">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <div className="cardbox">
                  <img src={item.image} alt="image" />
                  <p>{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="faq-lists">
        <h2 id="lists-title">Pertanyaan Yang Paling Sering Ditanyakan</h2>
        <div className="faq-accordion">
          {filterItem.map((item) => {
            return (
              <button key={item.id} className="accordion">
                {item.title}
              </button>
            );
          })}
        </div>
      </div>

      <footer>
        <p>@ 2024 Helpdesk FAQ</p>
      </footer>
    </>
  );
}

export default App;
