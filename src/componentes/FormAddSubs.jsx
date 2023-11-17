import { useState } from "react";

export function FormAddSubs({setType, setPrice, type, price, setSubs, subs, editId, setEditId, spent, count}){
    const[error, setError] = useState(false);
    const[errorMoney, setErrorMoney] = useState(false);

    const handleSubs = e => {
        e.preventDefault()
        if(price === "" || Number(price)<0 || type === ""){
            setError(true);
            return;
        }
        if (count - spent < Number(price)){
            setErrorMoney(true);
            return;
        }
        setError(false);
        setErrorMoney(false);

        if (editId != ""){
            setEditId("");
            const newSubs = subs.map(item => {
                if (item.id === editId){
                    item.type = type;
                    item.price = price;
                }
                return item;
            })
            setSubs(newSubs);
        } else{
            //Objeto
            const data = {
                type: type,
                price: price,
                id: Date.now()
            }
            //Se crea una copia y concatenamos el dato
            setSubs([...subs, data]);
        }
        
        setType("");
        setPrice("");
        //console.log(type);
        //console.log(price);
    } 
    return(
        <div className="add-subcription">
            <h3>Agregar Subcripciones</h3>
            <form onSubmit={handleSubs}>
                <p>Servicio</p>
                <select onChange={e => setType(e.target.value)} value={type}>
                    <option value="">--Elegir--</option>
                    <option value="netflix">Netflix</option>
                    <option value="disneyPlus">Disney Plus</option>
                    <option value="hboMax">HBO MAX</option>
                    <option value="startPlus">Start Plus</option>
                    <option value="spotify">Spotify</option>
                    <option value="crunchyRoll">Crunchyroll</option>
                </select>
                <p>Canitidad</p>
                <input type="number" placeholder="20$" onChange={e => setPrice(e.target.value)} value={price} />
                { editId != ""  ?  <input type="submit" value="Guardar" />
                    : <input type="submit" value="Agregar" />}
            </form>
            { error ? <p className="error">Campos Invalidos</p> : null }
            { errorMoney ? <p className="error">No tienes presupuesto</p> : null }

        </div>
    )
}