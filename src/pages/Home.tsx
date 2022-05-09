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
import { getSomeWebSuccess } from '../state/reducers/someWebState'

const Home: React.FC = () => {
    const someWebLoading = useSelector((state: any) => state.someWebs.isLoading)
    const someWebResult = useSelector((state: any) => state.someWebs.resultado)
    const dispatch = useDispatch()

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
                <p>{someWebResult}</p>
            </IonContent>
        </IonPage>
    )
}

export default Home
