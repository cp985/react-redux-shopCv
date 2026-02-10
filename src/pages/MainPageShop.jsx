//! pagine home se con token . si vedrà lista oggetti e filtri
import ItemContainer from "../components/UI/ItemContainer";
import { DUMMY_ITEMS } from "../util/dataDummy";
export default function MainPageShop() {
  return (
    <>
      <h1>MainPageShop</h1>
      <ItemContainer list={DUMMY_ITEMS} />
    </>
  );
}
