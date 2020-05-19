import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Clock from "./components/Clock";
import ContactCards from "./components/contact/ContactCards"

function App() {
  return (
    <div>
      <Header />
      <Clock />
      <Main />
      <ContactCards/>
      <Footer />
    </div>
  );
}

export default App;
