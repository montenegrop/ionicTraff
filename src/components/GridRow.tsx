import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react'

interface ContainerProps {
    letras: string[]
}

export const GridExample: React.FC<ContainerProps> = ({ letras }) => {
    return (
        <IonRow>
            {letras.map((letra) => (
                <IonCol>{letra}</IonCol>
            ))}
        </IonRow>
    )
}
