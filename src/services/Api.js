import React from "react";
import axios from "axios";

export const getApiData = async (url, cors) => {
        let response = await axios.get(url, cors)
        return response
}