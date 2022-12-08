import { useEffect } from "react";

const child = ({ myCallback, number }) => {
  useEffect(() => {
    console.log("render");
  }, [myCallback]);

  return (
    <div>
      <h1>{number}</h1>
    </div>
  );
};

export default child;
