// TODO: create a component that displays a single bakery item
// name, description, price, image
export default function BakeryItem(props) {
    return (
        <div className="bakeryItem">
            <img src={props.item.image} alt="bakery item"></img>
            <div className="details">
                <div className="descr">
                    <h1>{props.item.name}</h1>
                    <p>{props.item.description}</p>
                </div>
                <div className="pricing">
                    <p>${props.item.price}</p>
                    <button onClick={() => props.updateCart(props.index)}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}