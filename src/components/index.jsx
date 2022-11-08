import AllBiodata from "./AllBiodata";

export default function MainComponent() {
    const pass = prompt("");
    if (pass === "606920") {
  return <AllBiodata />;
    } else if (pass !== "606920") {
      return <>এখানে কোনো তথ্য নেই।</>;
    } else {
      return <>এখানে কোনো তথ্য নেই।</>;
    }
}
