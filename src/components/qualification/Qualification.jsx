import React , { useState }from 'react';
import "./qualification.css" ;

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
  <section className="qulification section">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My Personel journey </span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uill uil-graduation-cap qualification__icon"></i>Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uill uil-briefcase-alt qualification__icon"></i>Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content "}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.Tech In Computer Science And Engineering</h3>
                            <span className="qualification__subtitle">G H Raisoni Institute of Engineering and Business Management</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2020 - present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Higher Secondary Education(12th STD)</h3>
                            <span className="qualification__subtitle">Bhonsala Military College, Nashik </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2018 - 2020
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Senior Secondary Education(10th STD)</h3>
                            <span className="qualification__subtitle">Shree Chatrapati Shivaji Vidyalay, Nashik</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2008 - 2018
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content "}>
                    {/* <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.Tech In Computer Science And Engineering</h3>
                            <span className="qualification__subtitle">G H Raisoni Institute of Engineering and Business Management</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2020 - present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Higher Secondary Education(12th STD)</h3>
                            <span className="qualification__subtitle">Bhonsala Military College </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2018 - 2020
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Senior Secondary Education(10th STD)</h3>
                            <span className="qualification__subtitle">Shree Chatrapati Shivaji Vidyalay</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2008 - 2018
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div> */}
                    <div className='message'>Looking for good opportunity in web develpement. I'm ideally looking for a Forntend develper role. For a greate understanding of my professional qualificatons, you can find my resume attached in about section</div>
                </div>
            </div>
        </div>
  </section>
  )
}

export default Qualification