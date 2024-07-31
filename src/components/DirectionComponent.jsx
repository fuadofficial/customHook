import { useDirection } from '../hooks/useDirection';

const DirectionComponent = () => {
    const { direction, toggleDirection } = useDirection();

    return (
        <div>
            <p dir={direction}>This text changes direction based on the state.</p>
            <button onClick={toggleDirection}>
                Toggle Direction
            </button>
        </div>
    );
};

export default DirectionComponent;
