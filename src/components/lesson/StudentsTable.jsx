const StudentsTable = ({ students }) => {
  return (
    <div className="table-wrapper">
      <table className="students-table">
        <thead>
          <tr>
            <th>Ім’я</th>
            <th>Оцінка</th>
            <th>Результат</th>
          </tr>
        </thead>

        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td
                className={
                  student.grade >= 80 ? "pass" : "fail"
                }
              >
                {student.grade >= 80 ? "Склав" : "Не склав"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
