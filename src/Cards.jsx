



export function Cards(props) {
    return (
        <div className="card">
            <img className ="card-image" src={props.shoes.image} alt={props.shoes.title} />
            <p>{props.shoes.title}</p>
            <p className="zena">{props.zena}</p>
            <p className="price">{props.shoes.price}</p>
        </div>
    );
}

export default Cards;