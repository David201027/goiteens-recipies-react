import CourseCard from "./CourseCard";

const CourseCatalog = ({ courses }) => {
  return (
    <div>
      {courses.map(course => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
};

export default CourseCatalog;
