'use client'
import { useState } from "react";
import { useZxing } from "react-zxing";

const app = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [result, setResult] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  return (
    <>
      <video ref={ref} />
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </>
  );
};

export default app;