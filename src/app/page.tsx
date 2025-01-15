import Display from "./components/Display";
import Navbar from "./components/Navbar";
import ShapeOptions from "./components/ShapeOption";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 mx-auto mx-[18vw]">
        <ShapeOptions />
        <Display />
      </div>
    </>
  );
}
