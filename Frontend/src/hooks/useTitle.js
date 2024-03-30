import { useEffect } from "react"

const useTitle = (title) => {
        // title == what you want it to say. For SPA, looks more professional

    useEffect(() => {
        const prevTitle = document.title
        document.title = title

        return () => document.title = prevTitle
    }, [title])


}

export default useTitle