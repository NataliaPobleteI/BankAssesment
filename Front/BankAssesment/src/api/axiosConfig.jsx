import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:3000/api',
        headers: {"ngrok-skip-browser-warning": "true"}
})