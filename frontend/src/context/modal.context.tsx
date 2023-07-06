import { ReactNode, createContext, useContext, useState } from "react";

interface ProviderProps {
    children: ReactNode
}

interface ModalSchema {
    modalContent: ReactNode | false
    setModalContent: (content: ReactNode | false) => void
}

export const ModalContext = createContext<ModalSchema>({} as ModalSchema)

export const ModalProvider = ({children}: ProviderProps) => {
    const [modalContent, setModalContent] = useState<ReactNode | null>(false)

    return (
        <ModalContext.Provider value={{modalContent, setModalContent}}>
            {children}
        </ModalContext.Provider>
    )
}

export const ContextModal = () => useContext(ModalContext)

/* 
    Para usar o modal, coloquem um botão que no evento "onClick" ele usa a função anônima () => setModalContent(JSXElement) sendo o JSXElement uma função onde o return é um HTML,
    como qualquer componente, por exemplo um <form>, quando criarem o componente que será inserido no lugar do JSXElement, faça a criação com o componente <ModalHeader> que nesse
    componente já está criando o título que será igual ao children dentro do componente <ModalHeader> e o botão para fechar o modal.
    Exemplo:
    ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    const ExemploJSX = () => {
        return (
            <>
                <ModalHeader>Título do modal</ModalHeader>
                <form>
                    ...
                </form>
            </>
        )
    }

    setModalContent(ExemploJSX)
    ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    A lógica para fechar o modal é caso o modalContent sejá null, o modal não será renderizado, porém caso ele seja true, onde sempre será um JSXElement, pois ele apenas recebe
    JSXElement ou null, ele renderizará o elemento dentro do modal.

    Após utilizar o modal, coloque dentro da lógica, setModalContent(null) para fechar o modal após a lógica que foi utilizada.
*/