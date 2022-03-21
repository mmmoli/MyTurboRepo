import React, { useCallback } from "react";
import { atom, useAtom } from "jotai";
import { useUpdateAtom } from "jotai/utils";

const countAtom = atom(1);
const asyncCountAtom = atom(async (get) => get(countAtom) * 2);

export const CoolBeans: React.FC = () => {
  const [num] = useAtom(asyncCountAtom);
  const set = useUpdateAtom(countAtom);

  const onClick = useCallback(() => {
    set((x) => x + 1);
  }, [set]);

  return (
    <div>
      CoolBeans was{" "}
      <button className="btn" onClick={onClick}>
        {num}
      </button>
    </div>
  );
};

export default CoolBeans;
