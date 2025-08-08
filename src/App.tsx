import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div>
      <h2>Ping-Pong Competition 2025</h2>
      <p>Welcome to the official site for the annual ping-pong tournament!</p>
      <ul>
        <li><strong>Date:</strong> August 20, 2025</li>
        <li><strong>Location:</strong> Sioux Sports Center</li>
      </ul>
      <p>Register, view the schedule, and check results using the menu above.</p>
    </div>
  );
}
function Registration() {
  return (
    <div>
      <h2>Registration</h2>
      <form style={{ maxWidth: 400 }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" required style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" required style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="level">Skill Level:</label><br />
          <select id="level" name="level" style={{ width: '100%' }}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Fill out the form to participate in the tournament.</p>
    </div>
  );
}
function Schedule() {
  return (
    <div>
      <h2>Match Schedule</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Time</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Player 1</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Player 2</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Round</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>10:00 AM</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>Alice</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>Bob</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>Quarterfinal</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>11:00 AM</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>Carol</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>Dave</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>Quarterfinal</td>
          </tr>
        </tbody>
      </table>
      <p>Check back for updates as the tournament progresses.</p>
    </div>
  );
}
function Results() {
  return (
    <div>
      <h2>Results & Rankings</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Player</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Wins</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Losses</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Rank</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>Alice</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>2</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>0</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>1</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>Bob</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>1</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>1</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>2</td>
          </tr>
        </tbody>
      </table>
      <p>Final results will be posted after all matches are completed.</p>
    </div>
  );
}
function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <Link to="/">Home</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/results">Results</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
