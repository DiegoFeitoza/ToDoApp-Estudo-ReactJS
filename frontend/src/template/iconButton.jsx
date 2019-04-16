import React from 'react'

//Componente de renderização condicional é usado para exibir ou não um conteúdo a partir de uma condição
import If from '../template/if'

export default props => (
    <If test={!props.hide}>
        <button className={"btn btn-"+props.style}
                onClick={props.onClick}>
            <i className={"fa fa-"+props.icon}></i>
        </button>
    </If>
)