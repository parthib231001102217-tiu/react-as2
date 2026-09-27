import Header from './components/Header.jsx'
import StudentList from './components/StudentList.jsx'
import Footer from './components/Footer.jsx'

const students = [
  {
    id: 'ST-2048',
    name: 'Amara Okafor',
    major: 'Environmental Science',
    year: 'Senior',
    email: 'amara.okafor@parthib.edu',
    gpa: 3.92,
    color: 'coral',
  },
  {
    id: 'ST-1953',
    name: 'Leo Martinez',
    major: 'Computer Science',
    year: 'Junior',
    email: 'leo.martinez@parthib.edu',
    gpa: 3.74,
    color: 'blue',
  },
  {
    id: 'ST-2317',
    name: 'Priya Nair',
    major: 'Architecture',
    year: 'Sophomore',
    email: 'priya.nair@parthib.edu',
    gpa: 3.88,
    color: 'green',
  },
  {
    id: 'ST-1872',
    name: 'Noah Williams',
    major: 'Business & Economics',
    year: 'Senior',
    email: 'noah.williams@parthib.edu',
    gpa: 3.61,
    color: 'yellow',
  },
  {
    id: 'ST-2264',
    name: 'Sofia Chen',
    major: 'Visual Communication',
    year: 'Freshman',
    email: 'sofia.chen@parthib.edu',
    gpa: 3.95,
    color: 'lilac',
  },
  {
    id: 'ST-1739',
    name: 'Ethan Brooks',
    major: 'Psychology',
    year: 'Junior',
    email: 'ethan.brooks@parthib.edu',
    gpa: 3.48,
    color: 'orange',
  },
]

function App() {
  return (
    <div className="app-shell" id="top">
      <Header />
      <main className="page-content">
        <section className="intro" aria-labelledby="page-title">
          <p className="eyebrow">ACADEMIC DIRECTORY / 2025-26</p>
          <h1 id="page-title">People make<br />this place.</h1>
          <p className="intro-copy">
            Get to know the students building what comes next.
          </p>
        </section>
        <StudentList students={students} />
      </main>
      <Footer />
    </div>
  )
}

export default App