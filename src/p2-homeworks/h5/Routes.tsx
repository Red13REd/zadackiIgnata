import React from 'react'
import {BrowserRouter, Navigate, Route} from "react-router-dom";
import PreJunior from "./pages/PreJunior";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

function Routes() {


    return (
        <div>
            <BrowserRouter>
                {/*Switch выбирает первый подходящий роут*/}


                    {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                    {/*exact нужен чтоб указать полное совпадение (что после '/' ничего не будет)*/}
                    <Route path={'/'}  element={() => <Navigate to={PATH.PRE_JUNIOR}/>}/>

                    <Route path={PATH.PRE_JUNIOR} element={() => <PreJunior/>}/>
                    // add routes

                    {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                   {/* <Route element={() => <Error404/>}/>*/}


            </BrowserRouter>
        </div>
    )
}

export default Routes
