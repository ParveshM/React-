import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header";
import Body from "./components/body.jsx";
import Footer from "./components/footer.jsx";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>{<AppLayout />}</React.StrictMode>
);
