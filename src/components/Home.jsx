import React from 'react'
import Clients from './DataBase'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Pets from './Pets';

export default function Home() {
    const [clt,setClt]=useState(Clients)
    //const [email,setEmail]=useState('')
    const navig = useNavigate();
    return (
        <div>
            {
                clt.map((client) => (
                    <div class="card" style={{ width: "18rem;" }}>
                        <div key={client.id} class="card-body">
                            <h5 class="card-title">{client.name}</h5>
                            <p class="card-text">Room number: {client.room_number}</p>
                            <a onClick={()=>{navig("/pets");
                        }} class="btn btn-primary">Go somewhere</a>
                        <Pets hayewen={client.pet} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
