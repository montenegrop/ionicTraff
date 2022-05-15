import { IonButton, IonCol, IonContent, IonGrid, IonRow } from '@ionic/react'
import { ButtonExample } from '../components/Button'
import { GridRow } from '../components/GridRow'

const GridPage: React.FC = () => {
    const cssIonGridCustom = { '--ion-grid-padding': '0px' }

    return (
        <IonContent>
            <IonGrid>
                <GridRow></GridRow>
            </IonGrid>
        </IonContent>
    )
}
export default GridPage
