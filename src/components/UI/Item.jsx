import classItem from "./style/Item.module.css"
export default function Item({item}){
    return <li className={classItem.item}>
        <h3 className={classItem.h3}>{item.name}</h3>
        <img className={classItem.image} src={item.image} alt={item.name} />
        <p>Tipo: {item.type} - Slot: {item.slot} - Rarity: {item.rarity}</p>
        <p>Peso: {item.weight} - Livel: {item.levelRequired}</p>
        <p>Prezzo: {item.value}</p>
        </li>}