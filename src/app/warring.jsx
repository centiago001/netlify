"use client";

import Heading2 from "@/components/Heading2";
import SubmitButton from "@/components/SubmitButton";
import React, { useEffect, useState } from "react";

export default function Warring() {
  const [disclaimer, setDisclaimer] = useState(true);

  // Store disclaimer in cookies
  const storeDisclaimer = () => {
    const date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);

    document.cookie = `disclaimer=true; expires=${date.toUTCString()}; path=/`;
    setDisclaimer(true);
  };

  useEffect(() => {
    if (document.cookie.includes("disclaimer=true")) {
      setDisclaimer(true);
    } else {
      setDisclaimer(false);
    }
  }, [disclaimer, setDisclaimer]);

  if (disclaimer) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-xl bg-white p-4 rounded-md flex flex-col m-4">
        <Heading2 headingText={"Wellcome message"} />

        <p className="border-t-2 border-black pt-4">
        Dear students and visitors, welcome to our website! We are dedicated to fostering an environment of learning, innovation, and excellence. Whether you are here to explore opportunities, gain knowledge, or connect with our community, we encourage you to dive in and make the most of the resources available. Let’s embark on a journey of growth and discovery together. Wishing you a fulfilling and enriching experience!
        </p>
        <div className="w-24 self-end mt-4" onClick={storeDisclaimer}>
          <SubmitButton text={"Got It"} />
        </div>
      </div>
    </div>
  );
}
