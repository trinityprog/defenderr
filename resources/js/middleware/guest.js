import useAuth from "../composables/useAuth";

export default function guest({ next }) {
    const { authenticated } = useAuth();

    if(authenticated.value === true){
        return next({
            name: 'index'
        })
    }

    return next();
}
