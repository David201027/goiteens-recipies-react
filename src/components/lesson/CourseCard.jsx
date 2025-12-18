const CourseCard = ({ title, level, duration, isAvailable }) => {
  return (
    <div
      className={`course-card ${
        level === "advanced" ? "course-advanced" : ""
      }`}
    >
      <h3 className="course-title">{title}</h3>

      <p>Рівень: {level === "beginner" ? "Початковий" : "Просунутий"}</p>

      <p>
        Тривалість: {duration} год {duration > 30 && "⏳ (довго)"}
      </p>

      <p className={isAvailable ? "course-status-available" : "course-status-unavailable"}>
        Статус: {isAvailable ? "Доступний" : "Недоступний"}
      </p>

      {!isAvailable && <p>Набір тимчасово закритий</p>}
    </div>
  );
};

export default CourseCard;
