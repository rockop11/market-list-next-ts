"use client"
import { useState, MouseEvent } from "react"

export const useModal = () => {
    const [toggleModal, setToggleModal] = useState<boolean>(false)
    const [modalTitle, setModalTitle] = useState<string>("")
    const [buttonValue, setButtonValue] = useState<string>("")

    const toggleModalHandler = (e?: MouseEvent<HTMLButtonElement | SVGAElement>) => {
        if (e) {
            if (e.currentTarget.innerHTML === "Borrar lista") {
                setModalTitle("Desea borrar la lista?")
                setButtonValue("Borrar")
            }
            if (e.currentTarget.innerHTML === "Guardar lista") {
                setModalTitle("Desea guardar la lista?")
                setButtonValue("Guardar")
            }
        }
        setToggleModal(!toggleModal)
    }

    return {
        toggleModal,
        modalTitle,
        buttonValue,
        toggleModalHandler,
    }
}