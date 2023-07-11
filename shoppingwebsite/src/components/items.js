import { useContext as UseContext, useEffect as UseEffect } from "react";
import ItemContext from "../context/itemscontext";
const items = () => {
  const context = UseContext(ItemContext);
  const { items, fetchitems } = context;

  UseEffect(() => {
    fetchitems("true");
  }, []);

  const callpage = (item) => {
    window.location.href ="http://localhost:3000/openpage?itemid=" + item.target.name;
  };

  const itemshowcase = (item) => {
    return (
      <>
        <li>
          <div className="card " style={{ width: "14rem", height: "14rem" }}>
            <img
              src={item.image}
              className="card-img "
              alt="..."
              style={{ width: "14rem", height: "14rem" }}
              onClick={callpage}
              name={item.productid}
            />
            <b>
              <p
                className="card-title"
                style={{
                  color: "black",
                  backgroundColor: "grey",
                  backgroundBlendMode: "soft-light",
                }}
              >
                {item.productname}:-{item.price}Rs
              </p>
            </b>
            <p></p>
          </div>
        </li>
      </>
    );
  };
  return (
    <>
      <div>
        <center>
          <ul
            className="images ul"
            style={{
              height: "100%",
              width: "100%",
              paddingRight: "10%",
              paddingBottom: "5%",
            }}
          >
            {items.map((item) => {
              return itemshowcase(item);
            })}
          </ul>
        </center>
      </div>
    </>
  );
};

export default items;
