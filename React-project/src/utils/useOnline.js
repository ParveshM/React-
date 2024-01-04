import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    console.log("calling  isoNline");
    const handleOnline = window.addEventListener("online", (event) => {
      setIsOnline(true);
    });
    const handleOffline = window.addEventListener("offline", (event) => {
      setIsOnline(false);
    });
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
