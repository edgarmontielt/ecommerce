import { useEffect } from 'react';
import { useLocation } from 'react-router'

const useScrollTo = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 1)
    }, [pathname])
}

export default useScrollTo