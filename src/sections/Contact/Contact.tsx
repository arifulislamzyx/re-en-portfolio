import React from "react";

const Contact = () => {
  return (
    <div className="bg-slate-600">
      <div className="container w-full space-y-5 md:space-y-0 px-5 md:px-0 py-10 md:flex items-center justify-center ">
        <div className="text-center md:text-justify ">
          {" "}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="underline font-bold">Personal Email:</span>
              <a
                href="mailto:mdnasimafrojtaj@gmail.com"
                className="hover:underline"
              >
                mdnasimafrojtaj@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <span className="underline font-bold">Alternative Email:</span>
              <a
                href="mailto:nasimafroj1@gmail.com"
                className=" hover:underline"
              >
                nasimafroj1@gmail.com
              </a>
            </div>

            <p>
              <span className="underline font-bold">
                {" "}
                Institutional Email:{" "}
              </span>
              <a href="mailto:vgg6fu@virginia.edu">vgg6fu@virginia.edu</a>
            </p>

            <p>
              <span className="underline font-bold">IEEE email:</span>{" "}
              <a href="mailto:taj@ieee.org">taj@ieee.org</a>
            </p>
            <p>
              <span className="underline font-bold">Mail: </span>
              <span>266 Colonnade Dr, Charlottesville, VA 22903, USA.</span>
              <br />
              <span>Kali Bari Road, Barisal, 8200, Bangladesh.</span>
            </p>

            <p>
              <span>
                <span className="underline font-bold">University: </span>
                University of Virginia (UVA)
              </span>
              <span>
                Bangladesh University of Engineering and Technology (BUET)
              </span>
            </p>

            <p>
              <span className="underline font-bold">Office Address: </span>TH
              C313, 914 Emmet St S, Charlottesville, VA 22904, USA.
            </p>

            <p>
              <span className="underline font-bold">Current Address: </span> 266
              Colonnade Dr, Charlottesville, VA 22903, USA.
            </p>
            <p>
              <span className="underline font-bold">Permanent Address:</span>{" "}
              Kali Bari Road, Barisal, 8200, Bangladesh.
            </p>

            <p className="my-10 mb-5">
              <a
                className="bg-black px-10 py-4 rounded text-white"
                target="_blank"
                href="https://www.google.com/url?q=https%3A%2F%2Fbio.link%2Fmdnasim&sa=D&sntz=1&usg=AOvVaw3UbDJa5HhDvpSpNH8s4vvK"
              >
                Md. Nasim Afroj Taj | Bio. Link
              </a>
            </p>
          </div>
          <div className="mt-10 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.580727856188!2d-78.51055212410427!3d38.03355287192141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b38648b749c4dd%3A0x405108c2cc8b5846!2sUniversity%20of%20Virginia!5e0!3m2!1sen!2sbd!4v1729363805801!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe-lvhEE6W-AzKVS0JF0xglmzmgNNuV9kaCiWuklILJ4h3m5A/viewform?embedded=true"
            height="959"
            className="w-full max-w-md md:w-96 lg:max-w-xl"
            frameBorder="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
