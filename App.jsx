// import react , { useState } from "react";
import { PostList } from "./Redux/2/features/posts/PostList.jsx";
import { AddPostForm } from "./Redux/2/features/posts/AddPostForm.jsx";
import {nanoid} from '@reduxjs/toolkit'
import {  RouterProvider , createBrowserRouter , createRoutesFromElements , Route } from "react-router-dom";
import { Home } from "./3_ReactRouters/pages/Home.jsx";
import { About } from "./3_ReactRouters/pages/About.jsx";
import { Help } from "./3_ReactRouters/pages/Help.jsx"
import { HomeLayout } from "./3_ReactRouters/pages/HomeLayout.jsx";
import { Faq } from "./3_ReactRouters/pages/Faq.jsx";
import { Contactus } from "./3_ReactRouters/pages/Contactus.jsx";
import { Careers , careersLoader } from "./3_ReactRouters/Careers/Careers.jsx";
import { CareerLayout } from "./3_ReactRouters/Careers/CareerLayout.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="help" element={<Help/>} >
                <Route path="help/faq" element={<Faq />} />
                <Route path="help/contact" element={<Contactus />}/>
            </Route>
            <Route path="careers" element={<CareerLayout />}>
                <Route index element={<Careers />} loader={careersLoader}></Route>
            </Route>
        </Route>
    )
)

export const App = () => {

    // delay(3000);

    return(
        <>   
                {/* <AddPostForm />
                <PostList /> */}
                <RouterProvider router={router} /> 
        </>
    );

}

