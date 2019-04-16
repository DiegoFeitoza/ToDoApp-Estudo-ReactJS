import React from 'react'

import PageHeader from '../template/pageheader'
import BlocoMussum from '../template/blocomussum'

export default props => (
    <div>
        <PageHeader name="Sobre" small="Nós" />
        <BlocoMussum titulo="Nossa História" />
        <BlocoMussum titulo="Missão e Visão" />
        <BlocoMussum titulo="Imprensa" />
    </div>
)