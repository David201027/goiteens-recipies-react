import "./Css.css";
import UserCard from "./components/lesson/UserCard";
import Status from "./components/lesson/Status";
import ProductList from "./components/lesson/ProductList";
import UserList from "./components/lesson/UserList";
import Article from "./components/lesson/Article";
import StudentsTable from "./components/lesson/StudentsTable";
import CourseCatalog from "./components/lesson/CourseCatalog";

export default function App() {
  const users = [
  { id: 1, name: "Анна", age: 22 },
  { id: 2, name: "Максим", age: 19 },
  { id: 3, name: "Ірина", age: 25 }
];

const courses = [
  { id: 1, title: "Основи JavaScript", level: "beginner", duration: 20, isAvailable: true },
  { id: 2, title: "React для початківців", level: "beginner", duration: 30, isAvailable: false },
  { id: 3, title: "Просунутий React", level: "advanced", duration: 40, isAvailable: true },
  { id: 4, title: "HTML & CSS", level: "beginner", duration: 15, isAvailable: true }
];

  return (
    <div>
      <div>
        <UserCard name="Олена" age={20} city="Львів" />
        <Status isOnline={true} />
      </div>
      <div>
        <ProductList products={["Хліб", "Молоко", "Сир", "Яблука"]} />
        <ProductList products={[]} />
      </div>
      <div>
        <UserList users={users} />
      </div>
      <div>
        <Article  title="React для початківців"  text="React дозволяє створювати інтерфейси з компонентів."  isPublished={true}/>
        <Article  title="Секретна стаття"  text="Цей текст не повинен бути видимим."  isPublished={false}/>
      </div>
      <div>
        <StudentsTable students={[{ id: 1, name: "Олег", grade: 90 }]} />
      </div>
      <div>
        <CourseCatalog courses={courses} />
      </div>
    </div>
  );
}
