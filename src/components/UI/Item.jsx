import classItem from "./style/Item.module.css";
export default function Item({ item }) {

  return (
    <li key={item.id} className={classItem.item}>
      <h3 className={classItem.h3}>{item.nome}</h3>
      <h4>{item.classe}</h4>
      <img className={classItem.image} src="#" alt={item.name} />
      <p>
        Tipo: {item.categoria} - Rarity: {item.rarità}
      </p>
      <p>
        Rating: {item.rating} - Disponibili: {item.stock}
      </p>
      <p>Prezzo: {item.prezzo}</p>
    </li>
  );
}
