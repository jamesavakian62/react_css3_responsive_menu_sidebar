import Nav1 from "./Nav1";
import Card from "./Card";
import Data from "./Apidata";

const Software = () => {
  return (
    <>
      <div>
        <Nav1 />

        <h2 className="text-center text-info">Our Software</h2>

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

export default Software;
