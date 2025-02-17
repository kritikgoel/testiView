import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
const De = () => {
    return (

        <div className="w-full overflow-auto">
            <h2 className="text-lg font-bold mb-4">Sample Code:</h2>
            
            <button className="bg-purple-500"> <FontAwesomeIcon icon={faCopy} />Copy</button>
            <pre className="bg-gray-200 p-4 rounded mb-4">
                <code>
                    {`<script type="text/javascript" src="https://testimonial.to/js/iframeResizer.min.js"></script>
<iframe id="testimonialto-wall-of-love-for-testimonial-light" src="https://embed-v2.testimonial.to/w/wall-of-love-for-testimonial?theme=light&card=base" frameborder="0" scrolling="no" width="100%"></iframe>
<script type="text/javascript">iFrameResize({log: false, checkOrigin: false}, "#testimonialto-wall-of-love-for-testimonial-light");</script>`}
                </code>
            </pre>
            <iframe
                id="testimonialto-wall-of-love-for-testimonial-light"
                src="https://embed-v2.testimonial.to/w/wall-of-love-for-testimonial?theme=light&card=base"
                frameBorder="0"
                scrolling="no"
                className="w-full min-h-[500px] mb-4" 
                title="Testimonial Wall"
            ></iframe>
            
        </div>
    );
};

export default De;
