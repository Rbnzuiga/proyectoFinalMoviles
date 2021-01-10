import React, {createContext, useState, useEffect} from 'react';
import firebase from '../Settings/ConfigFirebase';

export const dndContext = createContext();

const DndProv = (props) =>{
    const [dndPersonaje, setdndPersonaje] = useState({ 
        id:"",
        nombre:"",
        Raza:"",
        Clase:"",
        Edad:"",
        Estatura:"",
        DescripcionGeneral:""
    })

    const [PersonajesLista, setLista] = useState([]);

    useEffect(()=>{
        firebase.database().ref('proyectofinaldnd').on('value', snapshot=>{
            let PersonajesLista=[];
            snapshot.forEach(row=>{
                PersonajesLista.push({
                    id:row.key,
                    nombre:row.val().nombre,
                    Raza:row.val().Raza,
                    Clase:row.val().Clase,
                    Edad:row.val().Edad,
                    Estatura:row.val().Estatura,
                    DescripcionGeneral:row.val().DescripcionGeneral
                })
            })

            setLista(PersonajesLista)
        })
    },[])

    const eliminar =(id)=>{

        firebase.database().ref('proyectofinaldnd/'+id).set(null).then(()=>{
            alert("Eliminado");
        })

        const temporal = PersonajesLista.filter((item)=>{
            return item.id!== id;
        })
        setLista(temporal)
    }

    return(
        <dndContext.Provider 
        value ={{
            dndPersonaje,
            PersonajesLista,
            setdndPersonaje,
            setLista,
            eliminar
        }}>

        {props.children}

        </dndContext.Provider>
    )
}

export default DndProv;