import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MainContext } from '../context/ContextProvider'

const DataDetails = () => {
    const {data,setData}=useContext(MainContext)
    const { id } = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/all/${id}`)
            .then((resp) => setData(resp.data));
    }, [id])
    function handleClick(){
        navigate("/")
    }
  return (
    <div>
        <button onClick={()=>handleClick()}>back</button>
        <div>
            <div><img src="{data.flags.png}"/></div>
            <div>
                {/* <h1>{data.name.common}</h1> */}
                <p>{data.capital}</p>
            </div>
        </div>
    </div>
  )
}

export default DataDetails