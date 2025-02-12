import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Amanda Mpanza",
          "a PR Officer",
          "a Digital Marketer",
          "A Technical Writer",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
