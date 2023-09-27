import React from 'react'

export default function AboutSection() {
    const aboutSection = [
        {
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "list_items":[
             {"list_item": "Ullamco laboris nisi ut aliquip ex ea commodo consequat"},
             {"list_item": "Ullamco laboris nisi ut aliquip ex ea commodo consequat"},
             {"list_item": "Ullamco laboris nisi ut aliquip ex ea commodo consequat"},
            ],
            "description_two":"Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ] ;
    return (
        <>
            <section id="about" className="about">
                <div class="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>About Us</h2>
                    </div>

                    <div className="row content">
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p>
                              { aboutSection[0].description }  
                            </p>
                            <ul>
                                { aboutSection[0].list_items.map((info) =>
                               
                                <li><i className="ri-check-double-line"></i>{ info.list_item }</li>
                                )}
                            </ul>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p>
                                { aboutSection[0].description_two }  
                            </p>
                            <a href="#" className="btn-learn-more">Learn More</a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
