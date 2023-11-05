import CarItem from "./car-item/carItem.jsx";
import { cars } from "./car.data.js";

const Home = () => {
  return (
    <main>
      <h1>Cars-Catalog</h1>
      <section>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>There are no cars</p>
        )}
      </section>
    </main>
  );
};

export default Home;
