import { lazy, Suspense } from 'react'
import LazyLojas from '../../components/Lojas/lazylojas/index'

const Lojas = lazy(() => import('../../components/Lojas/lojas'))

export default function PageLojas(){
    return(
        <section className="stores">
            <div className="center">
                <Suspense fallback={<LazyLojas />}>
                    <Lojas titulo="Rio de Janeiro" rua="Avenida Presidente Vargas, 5000" andar="10&ordm; andar" local="Centro" telefone="(21) 3333 3333"/>
                </Suspense>

                <Suspense fallback={<LazyLojas />}>
                    <Lojas titulo="São Paulo" rua="Avenida Paulista, 895" andar="3&ordm; andar" local="Jardins" telefone="(11) 4444 4444"/>
                </Suspense>

                <Suspense fallback={<LazyLojas />}>
                    <Lojas titulo="Santa Catarina" rua="Rua Major &Aacute;vila, 370" andar="10&ordm; andar" local="Vila Mariana" telefone="(41) 5555 5555"/>
                </Suspense>

            </div>
        </section>

    )
}