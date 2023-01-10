import axios from "axios"
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const getToken = async () => {
            console.log(user);
            const email = user?.user.email;
            if (email) {
                const { data } = await axios.post('https://geniuscar.onrender.com/login', { email })
                localStorage.setItem('accessToken', data?.accessToken)
                setToken(data.accessToken)

            }
        }
        getToken()
    }, [user])
    return [token]
}
export default useToken;