import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function CheckoutPage() {
    const [address, setAddress] = useState("")
    const [number, setNumber] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")

    async function submitHandler() {
        const url = "http://localhost:5000/api/order"
        const { data } = await axios.post(url, { address, number, city, state })
    }

    return (
        <div className='forms'>
            <center>
                <form onSubmit={submitHandler} className='form' action="">
                    <input className='form-control' type="text" placeholder='Address' value={address} onChange={e => setAddress(e.target.value)} />
                    <input className='form-control' type="number" placeholder='Number' value={number} onChange={e => setNumber(e.target.value)} />
                    <input className='form-control' type="city" placeholder='city' value={city} onChange={e => setCity(e.target.value)} />
                    <input className='form-control' type="state" placeholder='State' value={state} onChange={e => setState(e.target.value)} />
                    <button type='submit'>Submit</button>
                </form>
            </center>

        </div>
    )
}

export default CheckoutPage
