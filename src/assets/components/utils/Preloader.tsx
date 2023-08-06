import React from 'react'
import { PreloaderStyled } from '../../styles/utils-styled/Preloader.styled'

const Preloader = () => {
    return (
        <PreloaderStyled>
            <div className="spinner" />
        </PreloaderStyled>
    )
}

export default Preloader