import { useEffect, useState } from "react";
import Biodata from "./Biodata";
import "./Style.css";

export default function AllBiodata() {
  const [allData, setAllData] = useState();
  useEffect(() => {
    fetch(
      "https://dindar-patro-patri-default-rtdb.firebaseio.com/PendingBiodata.json"
    )
      .then((res) => res.json())
      .then((res) => {
        const datas = [];
        for (let key in res) {
          datas.unshift({ ...res[key] });
          setAllData(datas);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {allData &&
        allData.map((data) => (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              flexWrap: "wrap",
              padding: "10px",
              margin: "10px",

              color: "whitesmoke",
            }}
            key={Math.random()}
          >
            <Biodata data={data} />
          </div>
        ))}
    </div>
  );
}
