import { lazy, Suspense } from 'react'
import LazyFaleConosco from '../../components/FaleConosco/lazyfaleconosco'

const FaleConosco = lazy(() => import('../../components/FaleConosco/faleconosco'))

export default function PageFaleConosco(){
    return(
        <div>
            <Suspense fallback={<LazyFaleConosco />}>
                <FaleConosco />
            </Suspense>
        </div>
    )
}