import AllBiodata from "./AllBiodata";

export default function MainComponent() {
  const pass = prompt("");
  if (pass === "606920") {
    return <AllBiodata />;
  } else if (pass !== "606920") {
    return <p style={{ color: "white" }}>এখানে কোনো তথ্য নেই।</p>;
  } else {
    return <p style={{ color: "white" }}>এখানে কোনো তথ্য নেই।</p>;
  }
}
