import Nav from "./components/Nav.jsx";

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-14">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function App() {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      <Nav />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section id="about" title="🌈 About Me">
          <p className="max-w-3xl leading-7">
            I’m a problem solver, builder, and lifelong learner. Outside of
            architecting backend services or tuning UIs, I tinker with side
            projects, contribute to open-source, and read up on the latest in
            tech.
          </p>
        </Section>

        {/* Experience */}
        <Section id="experience" title="💼 Experience">
          {/* UBER TX */}
          <article className="mt-2 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div>
              <h3 className="text-lg font-semibold">
                Full Stack Developer — UBER TX
              </h3>
              <p className="text-sm text-slate-500">Jan 2024 – Present</p>
            </div>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-sm leading-6">
              <li>
                Migrated Java 8 → Java 17/21; Spring Boot 3.x / Spring 6.x
                modernization.
              </li>
              <li>Upgraded Gradle to 8.x to cut build times and improve DX.</li>
              <li>
                Automated static code analysis and review workflows to reduce
                vulns.
              </li>
              <li>Engineered scalable microservices for high throughput.</li>
              <li>Built robust CI/CD for low‑touch, stable releases.</li>
              <li>Designed low‑latency REST APIs for inter‑service comms.</li>
              <li>Added 25+ unit & integration tests to raise coverage.</li>
              <li>
                Monitoring & alerts with CloudWatch; auditing with CloudTrail.
              </li>
            </ul>
          </article>

          {/* Airbnb India */}
          <article className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div>
              <h3 className="text-lg font-semibold">
                Full Stack Developer — Airbnb India
              </h3>
              <p className="text-sm text-slate-500">Apr 2020 – Mar 2022</p>
            </div>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-sm leading-6">
              <li>
                Java 11, Spring Boot, Spring REST/Security for secure auth &
                booking flows.
              </li>
              <li>
                React, Angular, Node.js with MySQL & MongoDB for full‑stack
                features.
              </li>
              <li>Hibernate ORM for smooth CRUD in microservices.</li>
              <li>Kafka + Spark Streaming for real‑time pipelines.</li>
              <li>REST services for search, availability, and preferences.</li>
              <li>DynamoDB (10k+ records) with optimized R/W throughput.</li>
              <li>
                Reusable React components (filters, date pickers, booking).
              </li>
              <li>
                Dockerized services on AWS EC2; ELK for log ingestion &
                visualization.
              </li>
              <li>Jenkins CI/CD for builds, tests, and staged deploys.</li>
            </ul>
          </article>

          {/* Adani India */}
          <article className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div>
              <h3 className="text-lg font-semibold">
                Front‑End Developer Intern — Adani (India)
              </h3>
              <p className="text-sm text-slate-500">Oct 2019 – Mar 2020</p>
            </div>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-sm leading-6">
              <li>
                Built reusable Angular components for inventory & fleet
                tracking.
              </li>
              <li>Integrated REST APIs with SAP inventory systems.</li>
              <li>Improved state mgmt/rendering; ~30% faster page loads.</li>
              <li>Lazy loading, caching, and perf tuning for dashboards.</li>
              <li>
                Debugged with DevTools/Lighthouse/Postman; ~25% fewer UI
                incidents.
              </li>
              <li>Implemented role‑based auth & access control.</li>
            </ul>
          </article>
        </Section>
        {/* Education */}
        <Section id="education" title="🎓 Education">
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">
                Master of Computer Science
              </h3>
              <p className="text-sm text-slate-500">
                University of Alabama at Birmingham, AL • May 2022 – Dec 2023
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
                <li>
                  Specialized in Full Stack Development, Cloud Computing, and
                  Data Engineering
                </li>
                <li>
                  Key Projects: Scalable E-Commerce Microservices Platform,
                  Real-Time Fleet Tracking Dashboard
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">
                B.E. in Computer Science and Engineering
              </h3>
              <p className="text-sm text-slate-500">
                R.M.K College of Engineering and Technology, India • Jun 2016 –
                Apr 2020
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
                <li>Graduated with Distinction</li>
                <li>
                  Relevant coursework: Data Structures & Algorithms, Database
                  Management Systems, Web Application Development
                </li>
              </ul>
            </div>
          </div>
        </Section>
        {/* Projects */}
        <Section id="projects" title="🚀 Projects">
          <div className="mt-6 grid lg:grid-cols-2 gap-6">
            {/* 1) E‑Commerce Microservices */}
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">
                Scalable E‑Commerce Microservices Platform
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Cloud‑native system split into product, cart, order, and payment
                services; ~40% faster load under traffic.
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm leading-6">
                <li>
                  Secured auth & payments with{" "}
                  <strong>Spring Security (JWT)</strong> and React UI.
                </li>
                <li>
                  Streamed order events via <strong>Kafka</strong>;
                  recommendations with <strong>Spark</strong> (+25% in tests).
                </li>
                <li>
                  Deployed on <strong>AWS EC2</strong> with{" "}
                  <strong>Docker</strong>; CI/CD via <strong>Jenkins</strong>{" "}
                  (−70% deploy errors).
                </li>
              </ul>
              <p className="mt-3 text-xs text-slate-500">
                Stack: Java, Spring Boot, React, Kafka, Spark, Docker, Jenkins,
                AWS EC2
              </p>
            </article>

            {/* 2) Fleet Tracking */}
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">
                Real‑Time Fleet Tracking & Logistics Dashboard
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Live fleet tracking across 5+ geo‑zones with dynamic routing and
                alerts; +35% ops visibility.
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm leading-6">
                <li>
                  REST APIs with <strong>MongoDB</strong>; real‑time GPS routes
                  via <strong>Google Maps API</strong>.
                </li>
                <li>
                  Centralized logs using <strong>ELK</strong> for faster
                  debugging (+35%).
                </li>
                <li>
                  Autoscaled on <strong>AWS EC2</strong>, cutting peak‑load
                  downtime by &gt;50%.
                </li>
              </ul>
              <p className="mt-3 text-xs text-slate-500">
                Stack: Angular, Node.js, MongoDB, Google Maps API, ELK, AWS EC2
              </p>
            </article>

            {/* 3) Smart Healthcare */}
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">
                Smart Healthcare Alert & Monitoring System
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Patients log symptoms; ML‑based alerts help flag risks earlier
                (+28% anomaly detection).
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm leading-6">
                <li>
                  Risk scoring with <strong>logistic regression</strong>;
                  HIPAA‑style RBAC with <strong>Spring Security</strong>.
                </li>
                <li>
                  Medical uploads to <strong>AWS S3</strong>; trend dashboards
                  for clinicians.
                </li>
                <li>
                  <strong>JUnit</strong> tests for 60+ endpoints; ~90%+
                  coverage.
                </li>
              </ul>
              <p className="mt-3 text-xs text-slate-500">
                Stack: Java, Spring Boot/Security, React, PostgreSQL (or
                MongoDB), AWS S3, JUnit
              </p>
            </article>

            {/* 4) Blogging CMS */}
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">
                DevOps‑Ready Blogging & Content Management System
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Lightweight CMS with full CRUD; supported 100+ concurrent users
                with zero reported downtime.
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm leading-6">
                <li>
                  End‑to‑end CI/CD via <strong>GitHub Actions</strong> +{" "}
                  <strong>Docker</strong> (−60% release time/errors).
                </li>
                <li>
                  Deployed on <strong>AWS EC2</strong> with{" "}
                  <strong>CloudWatch</strong> alerts; ~99.99% availability.
                </li>
                <li>
                  Front‑end tuned to reach <strong>95+ Lighthouse</strong>{" "}
                  performance score.
                </li>
              </ul>
              <p className="mt-3 text-xs text-slate-500">
                Stack: Node/Express or Spring Boot, React, Docker, GitHub
                Actions, AWS EC2, CloudWatch
              </p>
            </article>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="🔨 Skills">
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Languages & Frameworks */}
            <div className="rounded-lg bg-white border border-slate-200 p-5 shadow-sm">
              <h4 className="font-semibold">Languages & Frameworks</h4>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 rounded bg-slate-100">
                  Java (8–21)
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  Spring Boot (2.x/3.x)
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  Spring Security
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">React.js</span>
                <span className="px-2 py-1 rounded bg-slate-100">Angular</span>
                <span className="px-2 py-1 rounded bg-slate-100">Node.js</span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  JavaScript
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">HTML</span>
                <span className="px-2 py-1 rounded bg-slate-100">CSS</span>
              </div>
            </div>

            {/* Backend Development */}
            <div className="rounded-lg bg-white border border-slate-200 p-5 shadow-sm">
              <h4 className="font-semibold">Backend Development</h4>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 rounded bg-slate-100">
                  RESTful APIs
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  Microservices Architecture
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  Hibernate
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  Spring REST
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  CRUD Operations
                </span>
              </div>
            </div>

            {/* Frontend Development */}
            <div className="rounded-lg bg-white border border-slate-200 p-5 shadow-sm">
              <h4 className="font-semibold">Frontend Development</h4>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 rounded bg-slate-100">
                  Reusable UI Components
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  State Management
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  Lazy Loading
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  Responsive Design
                </span>
              </div>
            </div>

            {/* DevOps & CI/CD */}
            <div className="rounded-lg bg-white border border-slate-200 p-5 shadow-sm">
              <h4 className="font-semibold">DevOps & CI/CD</h4>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 rounded bg-slate-100">Jenkins</span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  GitHub Actions
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">Docker</span>
                <span className="px-2 py-1 rounded bg-slate-100">AWS EC2</span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  Gradle 8.x
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  CI/CD Pipeline Automation
                </span>
              </div>
            </div>

            {/* Cloud & Monitoring */}
            <div className="rounded-lg bg-white border border-slate-200 p-5 shadow-sm">
              <h4 className="font-semibold">Cloud & Monitoring</h4>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 rounded bg-slate-100">
                  AWS CloudWatch
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  AWS CloudTrail
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">DynamoDB</span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  Elasticsearch
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">Logstash</span>
                <span className="px-2 py-1 rounded bg-slate-100">Beats</span>
              </div>
            </div>

            {/* Databases & Big Data */}
            <div className="rounded-lg bg-white border border-slate-200 p-5 shadow-sm">
              <h4 className="font-semibold">Databases & Big Data</h4>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 rounded bg-slate-100">MySQL</span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  PostgreSQL
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">MongoDB</span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  Apache Kafka
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  Spark Streaming
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  Real-time Data Pipelines
                </span>
              </div>
            </div>

            {/* Security & Testing */}
            <div className="rounded-lg bg-white border border-slate-200 p-5 shadow-sm">
              <h4 className="font-semibold">Security & Testing</h4>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 rounded bg-slate-100">
                  Role-Based Access Control
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  Secure Authentication
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  Static Code Analysis
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  Unit Testing
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  Integration Testing
                </span>
                <span className="px-2 py-1 rounded bg-slate-100">JUnit</span>
                <span className="px-2 py-1 rounded bg-slate-100">
                  Test Automation
                </span>
              </div>
            </div>
          </div>
        </Section>

        {/* Add your Experience, Education, Projects, Skills, and Contact sections here */}
      </main>

      <footer id="contact" className="mt-16 border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h2 className="text-lg font-semibold text-slate-800">📬 Contact</h2>
          <p className="mt-2 text-slate-600">
            Let’s create something amazing together! Feel free to reach out.
          </p>

          {/* Contact Info */}
          <div className="mt-4 space-y-1 text-sm text-slate-500">
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:vidudhala.chaitu@gmail.com"
                className="text-indigo-600 hover:underline"
              >
                vidudhala.chaitu@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium">LinkedIn:</span>{" "}
              <a
                href="https://linkedin.com/in/chaitanyavidudhala"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline"
              >
                linkedin.com/in/chaitanyavidudhala
              </a>
            </p>
            <p>
              <span className="font-medium">GitHub:</span>{" "}
              <a
                href="https://github.com/chaitu-1998"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline"
              >
                github.com/chaitu-1998
              </a>
            </p>
          </div>

          {/* Hire Me Button */}
          <div className="mt-6">
            <a
              href="mailto:vidudhala.chaitu@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Chaitanya,"
              className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-white font-medium shadow hover:bg-indigo-700 transition-colors"
            >
              Hire Me
            </a>
          </div>

          <p className="mt-8 text-xs text-slate-400">
            © {new Date().getFullYear()} Chaitanya Vidudhala. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
