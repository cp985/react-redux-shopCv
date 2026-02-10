//! pagine home se con token . si vedrà lista oggetti e filtri
import { useRouteLoaderData, redirect ,useNavigate} from "react-router-dom";
import ItemContainer from "../components/UI/ItemContainer";
import { DUMMY_ITEMS } from "../util/dataDummy";
export default function MainPageShop() {
  const token = useRouteLoaderData("root");
const navigate = useNavigate();
  return (
    <>
      {token && (
        <>
          <h1>MainPageShop</h1> <ItemContainer list={DUMMY_ITEMS} />
        </>
      )}
      {!token && <> <h2>Non sei loggato</h2> <p>Ritorna alla home</p> </> && setTimeout(() => navigate("/"),5000)} 

    </>
  );
}
