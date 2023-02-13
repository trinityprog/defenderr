import { ref } from "vue"
import axios from "axios"
import router from "../router";

const authenticated = ref(false)
const user = ref({})
const errors = ref([])

export default function useAuth() {
    const setAuthenticated = (value) => authenticated.value = value

    const setUser = (value) => user.value = value

    const setErrors = (value) => errors.value = value

    const attempt = async () => {
        try {
            let response = await axios.get('/api/user')

            setAuthenticated(true)
            setUser(response.data.data)

            return response
        } catch (e) {
            setAuthenticated(false)
            setUser({})
        }
    }

    const login = async (credentials) => {
        await axios.get('/sanctum/csrf-cookie')
        try {
            await axios.post('/login', credentials)
            await attempt()
            await redirect()
        } catch (e) {
            if(e.response.status === 422) setErrors(e.response.data.errors)
        }
    }

    const logout = async () => {
        try {
            await axios.post('/logout')

            setAuthenticated(false)
            setUser({})

            await router.push({name: 'login'})
        } catch (e) {
            //
        }
    }

    const redirect = () => {
        if(user.value.role === 'admin') {
            window.location.href = '/admin'
        } else {
            router.push({name: 'index'})
        }
    }

    return {
        authenticated,
        user,
        errors,
        attempt,
        login,
        logout
    }
}
