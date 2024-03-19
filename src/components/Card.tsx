import React from "react";

function Card({ children }: React.PropsWithChildren) {
  return (
    <div className="bg-slate-400 border-2 rounded-xl p-3 my-3">{children}</div>
  );
}

export default Card;
