import { useEffect, useState } from "react";

const MyComponent = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("someKey");
      setData(storedData);
    }
  }, []);

  return <div>{data ? `Stored Data: ${data}` : "No data found"}</div>;
};

export default MyComponent;
