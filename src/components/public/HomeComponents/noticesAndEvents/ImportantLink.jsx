const ImportantLink = () => {
  const impLinks = [
    {
      text: "» Suspended micro cantilever and micro string resonator using Phase Change Material (VO2)",
      path: "",
    },
    {
      text: "» Suspended MoS2 membrane on Si/SiN for mid IR detector",
      path: "",
    },
    {
      text: "» Vanadium Oxide (VO2) growth  by Pulsed Laser Deposition (PLD) and the effect of interface on its  Metal-Insulator Transition (MIT)",
      path: "",
    },
    {
      text: "» Surface charge measurement of by Electrostatic Force Microscopy (EFM) of Cellulose Nanocrystal (CNC)",
      path: "",
    },
    {
      text: "» Energy Harvesting Using Water Droplet and Confinement of droplet in Hydrophobic-Hydrophilic Channel",
      path: "",
    },

    
  ];
  return (
    <div className="grid my-4">
      {impLinks.map((link, index) => (
        <div
          className="border-t border-b border-white w-full p-4 animation-on-scroll"
          key={index}
        >
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            className="block duration-500 relative hover:translate-x-4"
            href={link.path}
          >
            {link.text}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImportantLink;
