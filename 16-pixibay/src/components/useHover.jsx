import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function useHover() {
    const [isActive, setIsActive] = useState(false)
    const ref = useRef(null)

    const setActive = () => setIsActive(true)
    const setInActive = () => setIsActive(false)

    useEffect(() => {
        ref.current.addEventListener("mouseenter", setActive)
        ref.current.addEventListener("mouseleave", setInActive)

        /* return () => {
         *     ref.current.removeEventListener("mouseenter", setActive)
         *     ref.current.removeEventListener("mouseleave", setInActive)
         * } */
    }, [])

    return [ref, isActive]
}
