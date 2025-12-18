export const RecipesItem = ({ data }) => {
    return (
        <ul className="list"> 
            {data.map((item) => (
                <li className="item" key={item.name}>
                    <h2>Name: {item.name}</h2>
                    <p>Time of cooking: {item.time}</p>
                    <p>Servings for: {item.servings}</p>
                    <p>Calories count: {item.calories}</p>
                    <p>Difficulty: {item.difficulty}</p>
                    <img width="200px" src={item.image} alt={item.name} />
                </li>
            ))}
        </ul>
    );
};
