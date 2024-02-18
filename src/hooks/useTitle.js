import { useEffect } from "react";

export const useTitle = (title) => {


  useEffect(() => {

    document.title = `${title} | Shopping Kart`
  }, [title])



  return null;
};
