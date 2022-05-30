import React, { useEffect, useState } from "react";
import classes from "./MenuItems.module.css";

const MenuItems = (props) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        "https://italia-fake-restaurant-project-default-rtdb.europe-west1.firebasedatabase.app/" +
          props.menuSelection +
          "/" +
          props.sectionSelection +
          ".json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      console.log("this is the response data", responseData);

      const loadedItems = [];

      for (const key in responseData) {
        loadedItems.push({
          id: key,
          name: responseData[key].Name,
          description: responseData[key].Description,
          price: responseData[key].Price,
        });
      }

      setItems(loadedItems);
      console.log(items);
      setIsLoading(false);
    };

    fetchItems().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [props]);

  const itemsList = items.map((item) => (
    <li key={item.id} className={classes.item}>
      <div>
        <div className={classes.topLine}>
          <h3 className={classes.title}>{item.name}</h3>
          <p className={classes.price}>£{item.price}</p>
        </div>
        <div className={classes.bottomLine}>{item.description}</div>
      </div>
    </li>
  ));

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  } else {
    return <ul className={classes.container}>{itemsList}</ul>;
  }
};

export default MenuItems;
