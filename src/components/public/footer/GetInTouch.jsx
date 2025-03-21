import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading3 from "@components/Heading3";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const GetInTouch = () => {
  const address = `TX 203B

  Department of Materials Science and Engineering, IIT Delhi, Hauz Khas, New Delhi-110016, India`;
  const emails = [" agoswami@mse.iitd.ac.in", "ankurcct15@gmail.com"];
  const phoneNumbers = [ `+91-11-26598403 `];

  
  return (
    <>
      <Heading3 headingText={"Get in touch"} />

      <div className="p-4 text-gray-300 grid gap-6 mx-auto">
        {/* ==== Address === */}
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            className="text-4xl text-primary-regular"
            icon={faLocationDot}
          />
          <p>{address}</p>
        </div>

        {/* ======= Email =====  */}
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            className="text-4xl text-primary-regular"
            icon={faEnvelope}
          />
          <p>
            {emails.map((email) => (
              <a
                key={email}
                className="block hover:text-primary-regular hover:underline duration-500"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            ))}
          </p>
        </div>

        {/* ======== Mobile Numbers======  */}
        <div className="flex items-center gap-4">
          <FontAwesomeIcon className="text-4xl text-primary-regular" icon={faPhone} />
          <p>
            {phoneNumbers.map((phoneNumber) => (
              <a
                key={phoneNumber}
                className="block hover:text-primary-regular hover:underline duration-500"
                href={`tel:${phoneNumber}`}
              >
                {phoneNumber}
              </a>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
