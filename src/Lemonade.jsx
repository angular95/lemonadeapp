import React, { useEffect, useState } from "react";
 import tableArray from "./constent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faLemon } from "@fortawesome/free-solid-svg-icons";

const LemonadeTable = ({setTotalAmount}) => {
const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://localhost:7209/api/Lemonade")
            .then((response) => response.json())
            .then((data) => {
                const updatedItems = data.map((item) => ({
                    ...item,
                    quantity: 0,
                    total: 0
                }));
                setItems(updatedItems);
            })
            .catch((error) => {
                console.error("Error fetching data:", error)
               const updatedItems1 = tableArray.map((item) => ({
                    ...item,
                    quantity: 0,
                    total: 0
                }));
                setItems(updatedItems1);
            });
    }, []);

    // initialize state with constantData
    // const [items, setItems] = useState(
    //     tableArray.map((item) => ({ ...item, quantity: 0 }))
    // );

    const increaseQuantity = (index) => {
        const updated = [...items];
        updated[index].quantity += 1;
        updated[index].total = updated[index].price * updated[index].quantity;
        const totalAmount = updated.reduce((sum, item) => sum + item.total, 0);
        setTotalAmount(totalAmount);
        setItems(updated);
    };

    const decreaseQuantity = (index) => {
        const updated = [...items];
        if (updated[index].quantity > 0) {
            updated[index].quantity -= 1;
            updated[index].total = updated[index].price * updated[index].quantity;
            const totalAmount = updated.reduce((sum, item) => sum + item.total, 0);
            setTotalAmount(totalAmount);
            setItems(updated);
        }
    };

   const deleteItem = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };


    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>
                             <button   
                            style={{
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "18px",
                            color: "#dfdf4a"
                            }}
                            >

                            <FontAwesomeIcon icon={faLemon} />
                            </button>
                            </td>
                        <td style={{ textAlign: "left" }}>
                            {item.name}
                            <br />
                            <span>{item.nametype}</span>
                        </td>
                        <td>{item.price}</td>
                        <td>
                            <button onClick={() => decreaseQuantity(index)}>-</button>
                            <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                            <button onClick={() => increaseQuantity(index)}>+</button>
                        </td>
                        <td>{item.total}</td>
                        <td>
                            <button
                                onClick={() => deleteItem(index)}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "18px",
                                    color: "red"
                                }}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default LemonadeTable;
