import React from 'react'


export default function WhyChoseUslistpart() {

    function createMarkup() {
        return {__html: '<h1>myh name is khan</h1>'};
      }

    const WhyChoseUslistpart ={
        "title": "Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong>",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit",
        "list_items":[
            {
            "title": "Feugiat scelerisque varius morbi enim nunc?",
            "subtitle": "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."
            },
            {
            "title": "Feugiat scelerisque varius morbi enim nunc?",
            "subtitle": "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."
            }
        ]
      };


   
    return (
        <>
            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

                <div className="content">
                    <h3 dangerouslySetInnerHTML={{__html:  WhyChoseUslistpart.title}}></h3>
                    <p>
                    { WhyChoseUslistpart.description }
                    </p>
                </div>

                <div className="accordion-list">
                    <ul>
                       { WhyChoseUslistpart.list_items.map((info,index) =>
                        <li key={index}>
                            <a data-bs-toggle="collapse" className={ `${(index == 0) ? 'collapse' : 'collapsed' }`  } data-bs-target={`#accordion-list-${index}`}>

                                 <span>{index+1}</span>
                                { info.title }<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i>
                            </a>
                            <div id={`accordion-list-${index}`} className={ `collapse ${(index == 0) ? 'show' : '' }`  }  data-bs-parent=".accordion-list">
                                <p>{  info.subtitle }</p>
                            </div>
                        </li>
                        )}
                        {/* <li>
                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                        <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                            <p>
                            Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                            </p>
                        </div>
                        </li>

                        <li>
                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                        <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                            <p>
                            Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                            </p>
                        </div>
                        </li> */}

                    </ul>
                </div>

            </div>
        </>
    )
}
