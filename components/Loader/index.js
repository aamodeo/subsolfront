import React from "react";
import "./index.css"

export default function Loader(props) {

  return (
    <div className="loader">
     <div class="spinner-border text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>
    </div>
  );
}