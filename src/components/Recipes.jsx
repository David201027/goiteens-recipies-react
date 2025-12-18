import { RecipesInfo } from "./RecipesItem.jsx";

export const RecipesItem = ({ data }) => {
    return (
        <ul>
            {data.map((item) => (
                <RecipesInfo
                    key={item.name}
                    name={item.name}
                    time={item.time}
                    servings={item.servings}
                    calories={item.calories}
                    difficulty={item.difficulty}
                    image={item.image}
                />
            ))}
        </ul>
    );
};