import React from "react";
import Pat1 from "./../svg/pattern-1.svg";
import Pat2 from "./../svg/pattern-2.svg";
import Pat3 from "./../svg/pattern-3.svg";
import Pat4 from "./../svg/pattern-4.svg";
function Pattern() {
  return (
    <>
      <div class="pattern-1">
        <img src={Pat1} alt="" />
      </div>
      <div class="pattern-2">
        <img src={Pat2} alt="" />
      </div>
      <div class="pattern-3">
        <img src={Pat3} alt="" />
      </div>
      <div class="pattern-4">
        <img src={Pat4} alt="" />
      </div>
    </>
  );
}

export default Pattern;
