import React from 'react'
import DataDetails from '../components/DataDetails';
import MainRoot from '../components/MainRoot';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';


const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:":id",
                element:<DataDetails/>
            },
            {
                path:"*",
                element:<NotFound/>
            }
        ]
    }
]
export default ROUTES;