import { useState } from 'react'
import StudentCard from './StudentCard.jsx'

function StudentList({ students }) {
  const [sortBy, setSortBy] = useState('name')
  const sortedStudents = [...students].sort((first, second) => {
    if (sortBy === 'gpa') return second.gpa - first.gpa
    if (sortBy === 'year') {
      const classYear = ['Freshman', 'Sophomore', 'Junior', 'Senior']
      return classYear.indexOf(first.year) - classYear.indexOf(second.year)
    }
    return first.name.localeCompare(second.name)
  })

  return (
    <section className="directory" aria-labelledby="directory-title">
      <div className="directory-heading">
        <div>
          <p className="eyebrow">THE CLASS ROSTER</p>
          <h2 id="directory-title">Meet your classmates</h2>
        </div>
        <label className="sort-control">
          <span>Sort by</span>
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
            <option value="name">Name</option>
            <option value="year">Class year</option>
            <option value="gpa">GPA</option>
          </select>
        </label>
      </div>
      <p className="student-count">
        <span>{students.length.toString().padStart(2, '0')}</span> students in this directory
      </p>
      <div className="student-grid">
        {sortedStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </section>
  )
}

export default StudentList