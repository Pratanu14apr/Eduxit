import React from 'react'
import axios from 'axios'

export let AxiosInstance = axios.create({
    baseURL:"https://localhost:5000"
})