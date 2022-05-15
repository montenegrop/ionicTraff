import './ExploreContainer.css'

interface ContainerProps {
    letra: Number
}

const ExploreContainer: React.FC<ContainerProps> = (letra) => {
    return (
        <div className="container">
            <strong>Ready to create an app? {letra}</strong>
            <p>
                Start with Ionic{' '}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://ionicframework.com/docs/components"
                >
                    UI Components
                </a>
            </p>
        </div>
    )
}

export default ExploreContainer
