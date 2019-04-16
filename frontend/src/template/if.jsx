import React from 'react'

//O ArrowFunction de um componente condicional é usado entre {}, para que cada condição retorne alto
//Já que o () já possui o return embutido no arrow function
export default props => {
    if(props.test){
        return props.children
    }else{
        return false
    }
}