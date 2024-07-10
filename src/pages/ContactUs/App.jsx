import React from "react";
import Banner from "../../components/Banner/App";

function Contact() {
  return (
    <>
      <Banner
        img="bg-banner_contact"
        children={
          <>
            Let's <span className="text-red">Talk</span>
          </>
        }
      />
    </>
  );
}

export default Contact;
