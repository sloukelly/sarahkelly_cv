import { Container } from "react-bootstrap";
import './Home.css';

const Experience = () => {
    return (
      <Container maxWidth="sm" className="section">

        <div className="section-item">
          <div className="job-title">Full Stack Development Degree</div>
          <div className="date">2023</div>
        </div> 
        <div className="company">Code First Girls</div>
        
        <div className="job-description">
          <p>The Code First Girls Degree covered an intensive curriculum emcompassing a comprehensive range of web development skills, meticulously preparing me with the relevant knowledge and proficiency for a successful career in tech. The list below shows the key skills I learnt.</p>
          <ul style={{listStyleType: 'square'}}>
            <li>MySQL - creating databases, writing queries, analysing data, joins and unions, functions, transactions, views, stored procedures, triggers and events.</li>
            <li>Python - data types, loops, functions, logic, lists and dictionaries, hashing, file handling and APIs. </li>
            <li>JavaScript - conditions and logic, DOM, frontend Frameworks such as React and Node.js. </li>
            <li>HTML/CSS/JS.</li>
            <li>React - class and functional components, lifecycle methods and hooks, props, events and router.</li>
            <li>UX, UI, design and styling.</li>
            <li>Angular and Linux.</li>
            <li>Agile methodology - group project following the core principals and managed using Jira</li>
            <li>Time and space complexity, searching and sorting algorithms.</li>
            <li>Graphs and trees.</li>
          </ul>
        </div>
        <hr className="left-line"/>

        <div className="section-item">
          <div className="job-title">Teacher of Design Technology and Engineering, and KS4 coordinator</div>
          <div className="date">2021 - 2023</div>
        </div> 
        <div className="company">Hazelwick School</div>
        
        <div className="job-description">
          <p>As a former teacher, I have demonstrated a capacity for simplifying intricate concepts through methodical and innovative strategic planning. Within dynamic work settings, I have cultivated proficiency in fostering collaborative solutions to intricate challenges.</p>
          <ul style={{listStyleType: 'square'}}>
            <li>Technical expertise - DATA training in the practical workshop using a variety of hand tools and machines, CAD skills using SpaceClaim/ SketchUp/ Techsoft 2D, in-depth theoretical knowledge, technical drawing skills. </li>
            <li>Planning - developed structured lesson plans and curriculum material to convey complex concepts suitable for all students.</li>
            <li>Classroom management - ensuring a conductive and disciplined environment.</li>
            <li>Problem solving - developing the ability to troubleshoot technical issues and find creative solutions, both in the workshop and classroom.</li>
            <li>Team collaboration - working with the department and wider school staff to coordinate activites, projects and events.</li>
            <li>Time management - balancing multiple tasks such as marking, planning and administration whilst adhering to schedules. </li>
            <li>Assessment and evaluation - desinging and implementing assessments to accurately measure student progress.</li>
            <li>Skills from KS4 coordinator position - curriculum development, assessment coordination, progress monitoring, data analysis, and team leadership.</li>
          </ul>
        </div>
        <hr className="left-line"/>

        <div className="section-item">
          <div className="job-title">Teacher Training</div>
          <div className="date">2020 - 2021</div>
        </div> 
        <div className="company">GORSE SCITT</div>
        
        <div className="job-description">
          <p>This teacher training course provided me with the necessary foundations to begin my teaching journey. Diving into effective classroom management, differentiation, pedagogical techniques,  assessment and feedback strategies, and meeting the needs of a diverse range of student needs - it was an intensive and highly rewarding course. </p>
          <ul style={{listStyleType: 'square'}}>
            <li>Classroom management</li>
            <li>Padagogical techniques</li>
            <li>Differentiation</li>
            <li>Assessment and feedback</li>
            <li>Inclusive teaching and SEND needs</li>
            <li>Safeguarding</li>
          </ul>
        </div>
        <hr className="left-line"/>

        <div className="section-item">
          <div className="job-title">Began coding journey</div>
          <div className="date">2021</div>
        </div> 
        <div className="company">Varied providers</div>
        
        <div className="job-description">
          <p>I started my coding journey after realising how vast and exciting the world of tech is, and how many opportunities there are. I knew from the get-go that my skills and traits aligned well with possible pathways.</p>
          <ul style={{listStyleType: 'square'}}>
            <li>Codecademy courses - JavaScript, Python, Ruby.</li>
            <li>CodeBar Brighton - attended various in-person workshops providing 1:1 tutoring on specific tech projects. </li>
            <li>Code First Girls - completed multiple MOOC challenges, such as Web Development, and JavaScript.</li>
          </ul>
        </div>
        <hr className="left-line"/>

        <div className="section-item">
          <div className="job-title">Retail and Hospitality roles</div>
          <div className="date">2013 - 2019</div>
        </div> 
        <div className="company">Various positions</div>
        
        <div className="job-description">
          <p>A background in retail and hospitality jobs gave me the foundational skills and hardworking mindset that allow me to thrive today. With a focus on product knowledge, customer relationships, team work and time management, these jobs provided transferrable skills that are still relevant today. </p>
          <ul style={{listStyleType: 'square'}}>
            <li>LUSH, White Rose - retail assistant.</li>
            <li>The Tetley, Leeds - cafe/bar associate, waitress, event staff.</li>
            <li>Headrow House, Leeds - bar associate in the cocktail bar.</li>
            <li>Chalkboard business - small personal business writing chalkboards for local companies.</li>
            <li>Crust and Crumb, Leeds - cafe assistant.</li>
            <li>Leeds Market - sales assistant.</li>
          </ul>
        </div>
        
      
      </Container>

    
    );
  }
   
  export default Experience