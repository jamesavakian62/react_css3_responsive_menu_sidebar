import Card from "./Card";
import Data from "./Apidata";
import Nav2 from "./Nav2";

const Aboutme = () => {
  return (
    <>
      <div>
        <Nav2 />

        <h2 className="text-center text-info">About Me</h2>

        <div className="container">
          <div className="row">
            {Data.map((values) => {
              return (
                <>
                  <Card title={values.title} images={values.image} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
