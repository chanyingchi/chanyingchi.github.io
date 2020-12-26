import React, { useMemo } from "react";
import { NAME } from "./links";

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  return <div className="App-footer">{`© ${NAME}, ${year}`}</div>;
}
