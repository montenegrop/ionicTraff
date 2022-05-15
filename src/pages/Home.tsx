import {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer'
import './Home.css'

// redux:
import { useDispatch, useSelector } from 'react-redux'
import {
    getSomeWebFetch,
    getSomeWebSuccess,
} from '../state/reducers/someWebState'
import { RootState } from '..'
import { useEffect } from 'react'

const Home: React.FC = () => {
    const someWebLoading = useSelector(
        (state: RootState) => state.someWebs.isLoading
    )
    const someWebResult = useSelector(
        (state: RootState) => state.someWebs.resultado
    )
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(someWebResult)
        alert(someWebResult.data?.map((element: any) => element.id))
    }, [someWebResult])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{someWebLoading}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Blank</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer />
                <IonButton onClick={() => dispatch(getSomeWebSuccess(99))}>
                    Boton
                </IonButton>
                <IonButton onClick={() => dispatch(getSomeWebFetch())}>
                    saga
                </IonButton>
                {/* <p>{someWebResult}</p> */}
            </IonContent>
        </IonPage>
    )
}

export default Home
