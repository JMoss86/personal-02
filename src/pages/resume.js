import React from 'react';

import Layout from '../components/Layout';

import about from '../assets/images/wozniak-selfie.jpg';
const IndexPage = () => (
  <Layout activeLink="resume">
    <section className="page-section about-heading">
      <div className="container">
        <img
          className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
          src={about}
          alt=""
        />
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">
                    jdmoss86@gmail.com
                  </span>
                  <span className="section-heading-lower">A Mossy Resume</span>
                </h2>

                <p>
                  <strong>SUMMARY OF QUALIFICATIONS</strong>

                  <ul>
                    <li>Proven oral/written communications skills</li>
                    <li>
                      Ability to interpret design documents and review code
                    </li>
                    <li>Four years of experience using JAVA</li>
                    <li>Versed with SQL DML</li>
                  </ul>
                </p>
                <p>
                  <strong>SKILLS</strong>

                  <ul>
                    <li>
                      Languages / Frameworks:
                      <ul>
                        <li>
                          Proficient in: Java, C, C++, Prolog, Bootstrap, CSS,
                          HTML, JavaScript, PL/SQL
                        </li>
                        <li>
                          Familiarity with: C#, Python, AJAX/XHR, ReactJS,
                          T-SQL, MySQL
                        </li>
                      </ul>
                    </li>

                    <li>
                      Technologies: VisualStudio2015, Eclipse, Git, dependency
                      injection, repository pattern, Node.js, MongoDB, mLab,
                      Robo 3T, SQL Server, Oracle SQL
                    </li>

                    <li>
                      Other Skills: agile and waterfall methodologies, SCRUM,
                      unit testing, MS Office (Word, Excel, Outlook, Access)
                    </li>
                  </ul>
                </p>

                <p>
                  <strong>EDUCATION</strong>

                  <ul>
                    <li>
                      <a
                        href="https://www.gccaz.edu/"
                        target="_blank"
                        rel="noopener"
                        aria-label="Glendale Community College"
                      >
                        Glendale Community College,
                      </a>{' '}
                      Glendale, AZ &ndash; graduated December 2019
                      <ul>
                        <li>
                          <em>
                            <a
                              href="https://curriculum.maricopa.edu/associate-degree-checksheets"
                              target="_blank"
                              rel="noopener"
                              aria-label="Associate Degree Checksheets"
                            >
                              Associate of Science, Emphasis in Computer Science
                            </a>
                          </em>
                        </li>

                        <li>
                          <em>
                            <a
                              href="https://curriculum.maricopa.edu/associate-degree-checksheets"
                              target="_blank"
                              rel="noopener"
                              aria-label="Associate Degree Checksheets"
                            >
                              Associate of Science
                            </a>
                          </em>
                        </li>

                        <li>
                          <em>
                            <a
                              href="https://curriculum.maricopa.edu/associate-degree-checksheets"
                              target="_blank"
                              rel="noopener"
                              aria-label="Associate Degree Checksheets"
                            >
                              Associate of Arts
                            </a>
                          </em>
                        </li>

                        <li>
                          <em>
                            <a
                              href="https://www.gccaz.edu/academics/degrees-certificates/communication-competence-workplace-ac"
                              target="_blank"
                              rel="noopener"
                              aria-label="Communication Competence in the Workplace Acedemic Certificate"
                            >
                              Academic Certificate in Communication Competence
                              in the Workplace
                            </a>
                          </em>
                        </li>
                        <li>
                          Academic Achievements:
                          <ul>
                            <li>
                              President&rsquo;s Honor List (three semesters)
                            </li>

                            <li>
                              Student Recognition Award for Outstanding
                              Contribution for Sigma Chi Eta
                            </li>

                            <li>
                              <a
                                href="https://www.ptk.org"
                                target="_blank"
                                rel="noopener"
                                aria-label="Phi Theta Kappa"
                              >
                                Phi Theta Kappa,
                              </a>
                              <em> President</em>
                            </li>
                            <li>
                              <a
                                href="https://www.natcom.org/student-organizations/sigma-chi-eta"
                                target="_blank"
                                rel="noopener"
                                aria-label="Sigma Chi Eta"
                              >
                                Sigma Chi Eta,
                              </a>
                              <em> Secretary</em>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="https://woz-u.com/"
                        target="_blank"
                        rel="noopener"
                        aria-label="Woz U"
                      >
                        Woz-U,
                      </a>{' '}
                      Scottsdale, AZ &ndash; April through June 2018
                      <ul>
                        <li>Front-end frameworks with ReactJS</li>
                        <li>
                          Acquired skills to program using JavaScript, and build
                          database-driven web applications using MongoDB,
                          JavaScript, and the ReactJS library
                        </li>
                        <li>Met Steve Wozniak (!!)</li>
                      </ul>
                    </li>
                  </ul>
                </p>

                <p>
                  <strong>EXPERIENCE</strong>

                  <ul>
                    <li>
                      <em>Tutor</em>,{' '}
                      <a
                        href="https://www.gccaz.edu/academics/departments/mathematics-computer-science/tutors"
                        target="_blank"
                        rel="noopener"
                        aria-label="GCC Math Solutions"
                      >
                        Math Solutions,
                      </a>{' '}
                      Glendale Community College, Glendale, AZ &ndash; 2013
                      through 2015
                      <ul>
                        <li>
                          Assist students with math problems ranging from MAT082
                          to MAT267 (remedial algebra through differential
                          equations)
                        </li>
                        <li>
                          Worked one-on-one with students in MAT108 course to
                          find solution to achieve academic success in their
                          math courses
                        </li>
                      </ul>
                    </li>
                    <li>
                      <em>Tutor</em>,{' '}
                      <a
                        href="https://www.gccaz.edu/academics/departments/mathematics-computer-science/tutors"
                        target="_blank"
                        rel="noopener"
                        aria-label="GCC Math Solutions"
                      >
                        Computer Science Solutions,
                      </a>{' '}
                      Glendale Community College, AZ &ndash; 2013 through 2015
                      <ul>
                        <li>
                          Assist students with general programming related
                          issues, including languages such as C, C++, Java,
                          Prolog, and LISP
                        </li>
                      </ul>
                    </li>
                    <li>
                      {' '}
                      <em>Supplemental Instructor</em>, Computer Science,
                      Glendale Community College, AZ&nbsp;&nbsp; Spring 2014
                      <ul>
                        <li>
                          Attend computer science classes taught by supervising
                          professor, host directed tutoring sessions for
                          approximately 18 students
                        </li>
                        <li>
                          Work one-one with students on object-oriented
                          programming concepts in JAVA, computer systems, and
                          fundamental algorithm techniques
                        </li>
                      </ul>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
