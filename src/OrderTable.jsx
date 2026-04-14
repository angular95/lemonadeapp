const OrderTable = () => {
    const total = "$5";
       const deleteItem = () => {
    
  };
    return (
        <>
            <div>
                Total {total}
            </div>
            <div>
                <button
                    onClick={() => deleteItem()}
                    style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "18px",
                        color: "red"
                    }}
                >deee</button>
            </div>
        </>
    )

}

export default OrderTable;