import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color={"blue"} maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars </p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={6}
      color={"red"}
      size={24}
      className={"test"}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={48} />
    <Test /> */}

    <App />
  </React.StrictMode>
);
