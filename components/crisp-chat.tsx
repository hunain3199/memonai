"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b36e4bbb-d16a-4c30-87f2-3403cf04e93a");
  }, []);

  return null;
};