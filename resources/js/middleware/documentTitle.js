import useHelper from "../composables/useHelper";

const {setDocumentTitle} = useHelper()

export default function documentTitle({ to, from, next }) {
    if(to.meta.title) setDocumentTitle(to.meta.title)

    return next();
}
