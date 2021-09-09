import React, { useEffect } from "react";
import axios from "axios";
import { useStoreState } from "pullstate";
import { Store1 } from "./Store";
import Place from "./Place";

function Main() {
  const allState = useStoreState(Store1);
  const { isDarkMode, isMobile, places } = Store1.useState((s) => ({
    isDarkMode: s.isDarkMode,
    isMobile: s.isMobile,
    places: s.places,
  }));

  // const testOddOrEven = Store1.subscribe(
  //   s => s.isMobile,
  //   newTemplate => {
  //     tileLayer.setUrl(newTemplate.url);
  //   }
  // );

  function toggleMode(e) {
    Store1.update((s) => {
      s.isDarkMode = !isDarkMode;
      s.isMobile = isMobile + 1;
    });
  }
  useEffect(() => {
    //fetching data
    axios
      .get("https://610bb7502b6add0017cb3a35.mockapi.io/api/v1/places")
      .then((data) => {
        Store1.update((s) => {
          s.places = data.data;
        });
      });
  }, []);

  return (
    <div
      style={{
        background: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <h1>Hello Pullstate</h1>
      <button onClick={toggleMode}>Toggle Dark Mode</button>
      <h1>isMobile:{allState.isMobile}</h1>

      {places &&
        places.map((place) => <Place key={place.id} place={place}></Place>)}
    </div>
  );
}

export default Main;
