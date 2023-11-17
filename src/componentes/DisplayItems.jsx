import { SimgleItems } from "./SimgleItems";

export function DisplayItems({subs, eliminarItem, editItem}){
    return (
        <>
            <h2>Subcripciones</h2>
            {subs.map(item => (
                <SimgleItems
                    key={item.id}
                    id={item.id}
                    price={item.price}
                    type={item.type}
                    eliminarItem={eliminarItem}
                    editItem={editItem}
                />
            ))}
        </>
    );
}
