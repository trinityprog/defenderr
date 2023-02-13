import {useRouter} from "vue-router";


export default function useHelper() {

    const router = useRouter()

    const goBack = () => { return router.go(-1) }

    const setDocumentTitle = (str) => { document.title = str + ' | ' + import.meta.env.VITE_DOCUMENT_TITLE }

    const isMobile = () => { return window.matchMedia('only screen and (max-width: 768px)').matches }

    const isTablet = () => { return window.matchMedia('only screen and (min-width: 768px) and (max-width: 1024px)').matches }

    const isHandheld = () => { return window.matchMedia('only screen and (max-width: 1024px)').matches }

    const isDesktop = () => { return window.matchMedia('only screen and (min-width: 1024px)').matches }

    return {
        goBack,
        setDocumentTitle,
        isMobile,
        isTablet,
        isHandheld,
        isDesktop,
    }
}
