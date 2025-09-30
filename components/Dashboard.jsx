import React from "react";
import { useContext } from "react";
import { AuthContext } from "../src/context/AuthContext";

function Dashboard ()  {      
    const {user, token} = useContext (AuthContext);

    if (!token) return null // solo para autenticados!

    const racingNews = 
    []
}