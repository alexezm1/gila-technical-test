import { ChildrenProps } from "../types";

function Card({ children }: ChildrenProps) {
  return (
    <div className="bg-slate-100 border-black dark:bg-slate-400 dark:border-slate-200 border-2 rounded-xl p-3 my-3">
      {children}
    </div>
  );
}

export default Card;
