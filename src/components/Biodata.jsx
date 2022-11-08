import { useState } from "react";

export default function Biodata({ data }) {
  const {
    // নাম,
    id,
    বয়স,
    পেশা,
    শিক্ষাগতযোগ্যতা,
    দ্বিনদারপাত্রপাত্রীসন্ধানপেজেআপনিকিধরনেরজীবনসঙ্গীচান,
  } = data;

  //   const [name, setName] = useState(নাম);
  const [idState, setId] = useState(id);
  const [boyos, setBoyos] = useState(বয়স);
  const [pesha, setPesh] = useState(পেশা);
  const [study, setStudy] = useState(শিক্ষাগতযোগ্যতা);
  const [jmnJibonShongi, setJmnJibonShongi] = useState(
    দ্বিনদারপাত্রপাত্রীসন্ধানপেজেআপনিকিধরনেরজীবনসঙ্গীচান
  );
  //
  //
  const SaveData = () => {
    // const dataIdPrompt = prompt("Enter ID: ");
    fetch(
      "https://dindar-patro-patri-default-rtdb.firebaseio.com/PendingBiodata.json"
    )
      .then((res) => res.json())
      .then((respone) => {
        function a(callback) {
          const datas = [];
          for (let key in respone) {
            datas.unshift({ ...respone[key] });
            datas.map((data) => {
              if (data.id == id) {
                let fileName1 = data.নাম.split(/\W/g);
                let fileName2 = data.মোবাইল.split(/\D/g);
                let fileName = fileName1 + "" + fileName2;
                fetch(
                  `https://dindar-patro-patri-default-rtdb.firebaseio.com/PendingBiodata/${fileName}.json`,
                  {
                    method: "PATCH",
                    body: JSON.stringify({
                      id: idState,
                      বয়স: boyos,
                      পেশা: pesha,
                      শিক্ষাগতযোগ্যতা: study,
                      দ্বিনদারপাত্রপাত্রীসন্ধানপেজেআপনিকিধরনেরজীবনসঙ্গীচান:
                        jmnJibonShongi,
                    }),
                  }
                )
                  .then(() => console.log("Success."))
                  .catch(() => alert("Error"));
              } else {
              }
            });
          }
          //
          callback();
        }
        function b() {
          alert("Sucess");
        }
        a(() => b());
        // /////////
      });
  };
  //
  return (
    <div>
      <div>
        <div
          style={{
            backgroundColor: "blueviolet",
            padding: "10px",
            borderRadius: "7px",
            boxShadow: "0 0 10px black",
          }}
        >
          <div>
            <br />
            ID{" "}
            <input
              type="text"
              className="Input"
              value={idState}
              onChange={(e) => setId(e.target.value)}
            />{" "}
            <br />
            বয়স{" "}
            <input
              type="text"
              className="Input"
              value={boyos}
              onChange={(e) => setBoyos(e.target.value)}
            />{" "}
            <br />
            পেশা{" "}
            <input
              type="text"
              className="Input"
              value={pesha}
              onChange={(e) => setPesh(e.target.value)}
            />{" "}
            <br />
            শিক্ষাগতযোগ্যতা{" "}
            <input
              type="text"
              className="Input"
              value={study}
              onChange={(e) => setStudy(e.target.value)}
            />{" "}
            <br />
            দ্বিনদারপাত্রপাত্রীসন্ধানপেজেআপনিকিধরনেরজীবনসঙ্গীচান{" "}
            <input
              type="text"
              className="Input"
              value={jmnJibonShongi}
              onChange={(e) => setJmnJibonShongi(e.target.value)}
            />{" "}
            <br />
          </div>
          <button className="Btn" onClick={SaveData}>
            Update
          </button>{" "}
          <button className="Btn">Delete</button>
        </div>
      </div>
    </div>
  );
}
