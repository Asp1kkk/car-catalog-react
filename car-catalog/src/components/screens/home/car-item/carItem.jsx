import styles from "../home.module.css";

function CarItem({id, item, image, name , price}) {
  return (
    <article key={id} className={item}>
      <img className={styles.img} src={`${image}`} alt={`${name}`} />
      <div className={styles.info}>
        <h2>{name}</h2>
        <p>
          {new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </p>
        <button className={styles.button}>Read more</button>
      </div>
    </article>
  );
}

export default CarItem;
