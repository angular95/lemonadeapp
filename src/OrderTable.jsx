const OrderTable = ({ totalAmount, setShowModal }) => {
    const total = totalAmount.toFixed(2);
       
    return (
        <>
            <div>
                Total {total}
            </div>
            <div  className="orderNow">
                <span  style={{
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "white"
                    }} onClick={() => setShowModal(true)}>Order Now</span>
                
            </div>
        </>
    )

}

export default OrderTable;
