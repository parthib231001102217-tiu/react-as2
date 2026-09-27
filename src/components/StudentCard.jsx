function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

function StudentCard({ student }) {
  return (
    <article className="student-card">
      <div className={`student-avatar avatar-${student.color}`} aria-hidden="true">
        {getInitials(student.name)}
      </div>
      <div className="student-info">
        <div className="student-name-line">
          <h3>{student.name}</h3>
          <span className="student-id">{student.id}</span>
        </div>
        <p className="student-major">{student.major}</p>
        <a className="student-email" href={`mailto:${student.email}`}>
          {student.email}
        </a>
        <div className="student-meta">
          <span>{student.year}</span>
          <span className="gpa"><strong>{student.gpa.toFixed(2)}</strong> GPA</span>
        </div>
      </div>
      <span className="card-arrow" aria-hidden="true">&nearr;</span>
    </article>
  )
}

export default StudentCard