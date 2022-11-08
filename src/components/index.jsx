import AllBiodata from "./AllBiodata";

export default function MainComponent() {
  const pass = prompt("");
  if (pass === "s") {
    return <AllBiodata />;
  } else if (pass !== "s") {
    return <p style={{ color: "white" }}>এখানে কোনো তথ্য নেই।</p>;
  } else {
    return <p style={{ color: "white" }}>এখানে কোনো তথ্য নেই।</p>;
  }
}
