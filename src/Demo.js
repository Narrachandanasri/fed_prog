import { useEffect, useState } from "react";

export default function Demo() {
  const data = [1, 2, 3, 4, 4];
  const [arr, setArr] = useState(data);
  useEffect(() => {
    setArr([...arr, 999]);
  }, []);
  return (
    <>
      <table border={1}>
        {arr.map((item) => {
          return (
            <tr>
              <td>{item}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
