import { IonButton, IonCol, IonContent, IonGrid, IonRow } from '@ionic/react'
import { ButtonExample } from '../components/Button'
import { GridRow } from '../components/GridRow'

const GridPage: React.FC = () => {
    const cssIonGridCustom = { '--ion-grid-padding': '0px' }

    const primerRenglon = ['a', 'a', 'a', 'a', 'a', 'a']
    const segundoRenglon = ['a', 'a', 'a', 'a', 'a', 'b']
    const tercerRenglon = ['a', 'a', 'a', 'a', 'a', 'c']
    const cuartoRenglon = ['a', 'a', 'a', 'a', 'a', 'd']

    return (
        <IonContent>
            <IonGrid>
                <IonRow>
                    {primerRenglon.map((col) => (
                        <IonCol>
                            <IonButton>{col}</IonButton>
                        </IonCol>
                    ))}
                </IonRow>
                <IonRow>
                    {segundoRenglon.map((col) => (
                        <IonCol>
                            <IonButton>{col}</IonButton>
                        </IonCol>
                    ))}
                </IonRow>
                <IonRow>
                    {tercerRenglon.map((col) => (
                        <IonCol>
                            <IonButton>{col}</IonButton>
                        </IonCol>
                    ))}
                </IonRow>
                <IonRow>
                    {cuartoRenglon.map((col) => (
                        <IonCol>
                            <IonButton>{col}</IonButton>
                        </IonCol>
                    ))}
                </IonRow>
            </IonGrid>
        </IonContent>
    )
}
export default GridPage
