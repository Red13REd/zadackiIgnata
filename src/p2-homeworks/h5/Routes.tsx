import React from 'react'
import { Navigate, Route, Routes} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import {Error404} from "./pages/Error404";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIORPLUS: '/junior-plus',
    // add paths
}

function Routess() {


    return (
        <div>

                <Routes>

                    {/*Switch выбирает первый подходящий роут*/}

                    {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                    {/*exact нужен чтоб указать полное совпадение (что после '/' ничего не будет)*/}

                    <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                    <Route path={PATH.PRE_JUNIOR} element={ <PreJunior/>}/>
                    <Route path={PATH.JUNIOR} element={<Junior/>}/>
                    <Route path={PATH.JUNIORPLUS} element={<JuniorPlus/>}/>
                    <Route path={'*'} element={<Error404/>}/>

                </Routes>

        </div>
    )
}

export default Routess
