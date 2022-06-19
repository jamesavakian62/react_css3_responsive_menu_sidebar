import Card from "./Card";
import Data from "./Apidata";

const Services = () => {
  return (
    <>
      <div>
        <h2 className="text-center text-info">Our Services</h2>

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

export default Services;
