import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react'

interface ContainerProps {
    cols: string[]
}

export const GridRow: React.FC<ContainerProps> = ({ cols, children }) => {
    return (
        <IonRow>
            {cols.map((col) => (
                <IonCol>{children}</IonCol>
            ))}
        </IonRow>
    )
}
