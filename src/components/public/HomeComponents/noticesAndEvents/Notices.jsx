import Button from "@components/Button";
import Notice from "./NoticeItem";
import styles from "./styles.module.css";

// set api url to make api calls
const apiURL = process.env.NEXT_PUBLIC_API_HOST;

const Notices = () => {
  //TODO: fetch notices form database
  const notices = [
    {
      category: "2023",
      title: "Effect of wire diameter on structure and electrical properties of (Al + Al2O3)-sheathed MgB2 with Nb barrier",
      date: "14 June 2023",
      description: "Nitin Srivastava, S. Mehrotra, Dheeraj Sharma, Shalini, M. Búran, I. Hušek, Ankur Goswami, P. Kováč, Sangeeta Santra, Ceramics International",
      downloadLink: "/notice/download",
      detailsLink: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=sEAO69sAAAAJ&sortby=pubdate&citation_for_view=sEAO69sAAAAJ:ns9cj8rnVeAC",
    },
    {
      category: "2023",
      title: "Microstructural and electrical investigation of polymorph stabilization and multistate transition in interface engineered epitaxial VO2 films",
      date: "14 June 2023",
      description: "Ujjwal Chitnis, Sooraj Kumar, Syed A. Bukhari, Chhotrai Soren, Ram Krishna Ghosh, Ankur Goswami, Applied Surface Science",
      downloadLink: "/notice/download",
      detailsLink: "https://sites.google.com/view/ankur-goswami/home/publications",
    },
    {
      category: "2023",
      title: "Flexible magnetoelectric sensor and nonvolatile memory based on magnetization-graded Ni/FSMA/PMN-PT multiferroic heterostructure",
      date: "14 June 2023",
      description: "Diksha Arora, Pradeep Kumar, Shalini Singh, Ankur Goswami, Davinder Kaur, Applied Physics Letter",
      downloadLink: "/notice/download",
      detailsLink: "https://pubs.aip.org/aip/apl/article-abstract/122/26/263501/2900235/Flexible-magnetoelectric-sensor-and-nonvolatile?redirectedFrom=fulltext",
    },
    {
      category: "2023",
      title: "Impact of photovoltaic effect on performance enhancement of triboelectric nanogenerator for energy harvesting applications",
      date: "14 June 2023",
      description: "Shailendra Kumar, Rajesh Kumar Jha, Ujjwal Chitnis, Shalini Singh, Jay Krishna Anand, Swapan K Roy, Ankur Goswami, Journal of Vacuum Science and Technology",
      downloadLink: "/notice/download",
      detailsLink: "https://sites.google.com/view/ankur-goswami/home/publications",
    },
    {
      category: "2022",
      title: "Energy Harvesting From Water Droplet Motion Confined On A Hydrophobic-Hydrophilic Stripped Surface",
      date: "14 June 2022",
      description: "Shalini, Dhairya Singh Arya, Nadeem T Beigh, Sooraj Kumar, Richa Mudgal, Pushpapraj Singh, Pranaba K Muduli, Dhiman Mallick, Ankur Goswami",
      downloadLink: "/notice/download",
      detailsLink: "https://ieeexplore.ieee.org/abstract/document/9699619",
    },
    {
      category: "2022",
      title: "Dual Piezoelectric/Triboelectric Behavior of BTO/SU-8 Photopatternable Nanocomposites for Highly Efficient Mechanical Energy Harvesting",
      date: "14 June 2022",
      description: "Nadeem Tariq Beigh, Shalini Singh, Ankur Goswami, Dhiman Mallick, Advanced Electronic Materials",
      downloadLink: "/notice/download",
      detailsLink: "https://sites.google.com/view/ankur-goswami/home/publications",
    },
    {
      category: "2022",
      title: "Unusual Electronic Properties of Cellulose Nanocrystals Conjugated to Cobalt Phthalocyanine: Long-Lived Charge Separation and Visible-Light-Driven Photocatalytic Activity",
      date: "14 June 2022",
      description: "Kazi M Alam, Pawan Kumar, Narendra Chaulagain, Sheng Zeng, Ankur Goswami, John Garcia, Ehsan Vahidzadeh, Manish L Bhaiyya, Guy M Bernard, Sanket Goel, Vladimir K Michaelis, Alexander E Kobryn, Sergey Gusarov, Karthik Shankar, Journal of Physical Chemistry C",
      downloadLink: "/notice/download",
      detailsLink: "https://sites.google.com/view/ankur-goswami/home/publications",
    },
    {
      category: "2021",
      title: "Graphene oxide crosslinker for the enhancement of mechanical properties of polylactic acid",
      date: "14 June 2021",
      description: "Majharul Islam Sujan, Stephen Don Sarkar, Chanchal K Roy, M. Ferdous, Ankur Goswami, Md Abdul Gafur, Md Shafiual Azam, Journal of Polymer Science",
      downloadLink: "/notice/download",
      detailsLink: "https://sites.google.com/view/ankur-goswami/home/publications",
    },
    {
      category: "2021",
      title: "Photoinduced Multistable Resonance Frequency Switching of Phase Change Microstring at Room Temperature",
      date: "14 June 2021",
      description: "Syed A Bukhari, Ryan McGee, Amirhossein Mahdavi, Farid Bensebaa, Liang Zhou, Hyun-Joong Chung, Thomas Thundat, Ankur Goswami, Advanced Electronic Materials",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1002/aelm.202100819",
    },
    {
      category: "2020",
      title: "Consistently high Voc values in p-i-n type perovskite solar cells using Ni3+-doped NiO nanomesh as the hole transporting layer",
      date: "14 June 2020",
      description: "Ujwal K. Thakur, Pawan Kumar, Sergey Gusarov, Alexander E. Kobryn, Saralyn Riddell, Ankur Goswami, Kazi M. Alam, Spencer Savela, Piyush Kar, Thomas Thundat, Alkiviathes Meldrum, Karthik Shankar, ACS Applied Materials & Interfaces",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1021/acsami.9b18197",
    },
    {
      category: "2020",
      title: "Bidirectional frequency tuning of Vanadium dioxide (VO2) microstring resonator by optothermal excitation",
      date: "14 June 2020",
      description: "Syed A. Bukhari, Ankur Goswami, Ryan McGee, Rosmi Abraham, Dale Hume, Hyun Joong Chung, Thomas Thundat, Proc. IEEE MEMS 2020",
      downloadLink: "/notice/download",
      detailsLink: "https://sites.google.com/view/ankur-goswami/home/publications",
    },
    {
      category: "2020",
      title: "Mapping the surface potential, charge density and adhesion of cellulose nanocrystals using advanced scanning probe microscopy",
      date: "14 June 2020",
      description: "Ankur Goswami, Kazi Alam, Pawan Kumar, Piyush Kar, Thomas Thundat, Karthik Shankar, Carbohydrate Polymers",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1016/j.carbpol.2020.116393",
    },
    {
      category: "2020",
      title: "The effect of oxygen flow rate on metal–insulator transition (MIT) characteristics of vanadium dioxide (VO2) thin films by pulsed laser deposition (PLD)",
      date: "14 June 2020",
      description: "Syed A. Bukhari, Sooraj Kumar, Pawan Kumar, Sarang P Gumfekar, Hyun Joong Chung, Thomas Thundat, Ankur Goswami, Applied Surface Science",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1016/j.apsusc.2020.146995",
    },
    {
      category: "2020",
      title: "Synthesis and characterization of zinc phthalocyanine−cellulose nanocrystal (CNC) conjugates: Towards highly functional CNCs",
      date: "14 June 2020",
      description: "Kazi Alam, Pawan Kumar, Sergey Gusarov, Alexander E Kobryn, Aarat Kalra, Sheng Zeng, Ankur Goswami, Thomas Thundat, Karthik Shankar, ACS Applied Materials & Interfaces",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1021/acsami.0c07179",
    },
    {
      category: "2019",
      title: "Magnetoelectric Coupling in Ni−Mn−In/PLZT Artificial Multiferroic Heterostructure and Its Application in Mid-IR Photothermal Modulation by External Magnetic Field",
      date: "14 June 2019",
      description: "Anuj Kumar, Ankur Goswami, Kirandeep Singh, Ryan McGee, Thomas Thundat, Davinder Kaur, ACS Applied Electronic Materials",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1021/acsaelm.9b00435",
    },
    {
      category: "2019",
      title: "Separation and Quantum Tunneling of Photo-generated Carriers Using a Tribo-induced Field",
      date: "14 June 2019",
      description: "Jun Liu, Y. Zhang, James Chen, Rima Bao, Keren Jiang, Faheem Khan, Ankur Goswami, Zhi Li, Feifei Liu, Ke Feng, Jingli Luo, Thomas Thundat, Matter, Cell Press",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1016/j.matt.2019.05.017",
    },
    {
      category: "2019",
      title: "CVD grown, nitrogen doped graphene is an exceptional visible-light driven photocatalyst for surface catalytic reactions",
      date: "14 June 2019",
      description: "K.M. Alam, Pawan Kumar, A.P. Manuel, Ehsan Vahidzadeh, Ankur Goswami, Sheng Zeng, Wenjie Wu, Najia Mahdi, Kai Cui, Alexandar E. Kobryn, Sergey Gusarov, Yenan Song, Karthik Shankar, 2D Materials, IOP",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1088/2053-1583/ab4554",
    },
    {
      category: "2019",
      title: "Fabrication of Phase Change Microstring Resonators via Top Down Lithographic Techniques: Incorporation of VO₂/TiO₂ Into Conventional Processes",
      date: "14 June 2019",
      description: "Ryan McGee, Ankur Goswami, Syed Asad Manzoor Bukhari, Liang Zhou, Karthik Shankar, Thomas Thundat, Journal of Microelectromechanical Systems (JMEMS), IEEE",
      downloadLink: "/notice/download",
      detailsLink: "https://ieeexplore.ieee.org/document/8793197",
    },
    {
      category: "2019",
      title: "Threshold hydrophobicity for inhibition of salt scale formation on SAM-modified titania nanotube arrays",
      date: "14 June 2019",
      description: "Lian CT Shoute, Weidi Hua, Ryan Kisslinger, Ujwal K Thakur, Sheng Zeng, Ankur Goswami, Pawan Kumar, Piyush Kar, Karthik Shankar, Applied Surface Science, Elsevier",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1016/j.apsusc.2018.11.173",
    },
    {
      category: "2019",
      title: "C3N5: A Low Bandgap Semiconductor Containing an Azo-Linked Carbon Nitride Framework for Photocatalytic, Photovoltaic and Adsorbent Applications",
      date: "14 June 2019",
      description: "Pawan Kumar, Ehsan Vahidzadeh, Ujwal Kumar Thakur, Piyush Kar, Kazi Mohammad Alam, Ankur Goswami, Najia Mahdi, Kai Cui, Guy M Bernard, Vladimir K Michaelis, Karthik Shankar, Journal of American Chemical Society, ACS",
      downloadLink: "/notice/download",
      detailsLink: "https://pubs.acs.org/doi/abs/10.1021/jacs.9b00144",
    },
    {
      category: "2019",
      title: "Anomalous interfacial stress generation during sodium intercalation/extraction in MoS2 thin-film anodes",
      date: "14 June 2019",
      description: "Zhi Li, Keren Jiang, Faheem Khan, Ankur Goswami, Jun Liu, Ali Passian, Thomas Thundat, Science Advances",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1016/j.apsusc.2018.11.173",
    },
    {
      category: "2018",
      title: "Preferentially oriented TiO2 Nanotube arrays on non-native substrates and their improved performance as electron transporting layer in Halide Perovskite solar cells",
      date: "14 June 2018",
      description: "Ryan Kisslinger, Abdelrahman Mostafa Askar, Ujwal Kumar Thakur, Saralyn Riddell, Darren Dahunsi, Yun Zhang, Sheng Zeng, Ankur Goswami, Karthik Shankar, Nanotechnology, IOP",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1088/1361-6528/aae9b6",
    },
    {
      category: "2018",
      title: "Synthesis of phase pure vanadium dioxide (VO2) thin film by reactive pulsed laser deposition",
      date: "14 June 2018",
      description: "Devanshi Bhardwaj, Ankur Goswami, A.M. Umarji, Journal of Applied Physics",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1063/1.5046455",
    },
    {
      category: "2018",
      title: "Sustained electron tunneling at unbiased metal-insulator-semiconductor triboelectric contacts",
      date: "14 June 2018",
      description: "Jun Liu, Mengmeng Miao, Keren Jiang, Faheem Khan, Ankur Goswami, Ryan McGee, Zhi Li, Lan Nguyen, Zhiyu Hu, Jungchul Lee, Ken Cadien, Thomas Thundat, Nano Energy, Elsevier",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1016/j.nanoen.2018.03.068",
    },
    {
      category: "2018",
      title: "Sharpness and intensity modulation of the metal-insulator transition in ultrathin VO2 films by interfacial structure manipulation",
      date: "14 June 2018",
      description: "Ryan McGee, Ankur Goswami, Soupitak Pal, Kalvin Schofield, Syed Asad Manzoor Bukhari, Thomas Thundat, Physical Review Materials, APS",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1103/PhysRevMaterials.2.034605",
    },
    {
      category: "2018",
      title: "Direct-current triboelectricity generation by a sliding Schottky nanocontact on MoS2 multilayers",
      date: "14 June 2018",
      description: "Jun Liu, Ankur Goswami, Keren Jiang, Faheem Khan, Seokbeom Kim, Ryan McGee, Zhi Li, Zhiyu Hu, Jungchul Lee, Thomas Thundat, Nature Nanotechnology",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1038/s41565-017-0019-5",
    },
    {
      category: "2018",
      title: "Phase transformation induced modulation of the resonance frequency of VO2/TiO2 coated microcantilevers",
      date: "14 June 2018",
      description: "Ryan McGee, Ankur Goswami, Rosmi Abraham, Syed Bukhari, Thomas Thundat, MRS Advances",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1557/adv.2018.140",
    },
    {
      category: "2018",
      title: "Energy Harvesting using droplet",
      date: "14 June 2018",
      description: "Ankur Goswami, Prosenjit Sen, Chapter 4, Nanomaterials for green energy, Elsevier",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1016/B978-0-12-813731-4.00004-7",
    },
    {
      category: "2017",
      title: "Effect of interface on mid-infrared photothermal response of MoS2 thin film grown by pulsed laser deposition",
      date: "14 June 2017",
      description: "Ankur Goswami, Priyesh Dhandaria, Soupitak Pal, Ryan McGee, Faheem Khan, Željka Antić, Ravi Gaikwad, Kovur Prashanthi, Thomas Thundat, Nano Research, Springer",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1007/s12274-017-1788-8",
    },
    {
      category: "2017",
      title: "Effect of process parameters on phase stability and metal-insulator transition of vanadium dioxide (VO2) thin films by pulsed laser deposition",
      date: "14 June 2017",
      description: "Ryan McGee, Ankur Goswami, Behnam Khorshidi, Kristi McGuire, Kalvin Schofield, Thomas Thundat, Acta Materialia, Elsevier",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1016/j.actamat.2017.07.025",
    },
    {
      category: "2017",
      title: "Thermomechanical analysis of picograms of polymers using a suspended microchannel cantilever",
      date: "14 June 2017",
      description: "Syed Asad Manzoor Bukhari, M Faheem Khan, Ankur Goswami, Ryan McGee, Thomas Thundat, RSC Advances",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1039/C6RA25455A",
    },
    {
      category: "2015",
      title: "Low resistance liquid motion for energy harvesting",
      date: "14 June 2015",
      description: "Ankur Goswami, Shashank Gowda, Abinash Tripathy, Diptanu Roy, Venkatesh Bharadwaja, Prosenjit Sen, 28th IEEE International Conference on Micro Electro Mechanical Systems (MEMS)",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1109/MEMSYS.2015.7051008",
    },
    {
      category: "2014",
      title: "Single step fabrication of nano-structured superhydrophobic surfaces showing angle dependent colours",
      date: "14 June 2014",
      description: "Abinash Tripathy, Ankur Goswami, Prosenjit Sen, IEEE 2nd International Conference on Emerging Electronics (ICEE)",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1109/ICEmElec.2014.7151208",
    },
    {
      category: "2014",
      title: "Optimization of rheological properties of photopolymerizable alumina suspensions for ceramic microstereolithography",
      date: "14 June 2014",
      description: "Ankur Goswami, K Ankit, N Balashanmugam, Arun M Umarji, Giridhar Madras, Ceramics International",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1016/j.ceramint.2013.09.059",
    },
    {
      category: "2013",
      title: "Study of thermal relaxation of poly (HDDA-co-MMA) by temperature modulated DSC and dielectric spectroscopy",
      date: "14 June 2013",
      description: "Ankur Goswami, A.M. Umarji, Giridhar Madras, Polymer-Plastics Technology and Engineering",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1080/03602559.2012.759588",
    },
    {
      category: "2013",
      title: "Temperature dependent structural and dielectric investigations of PbZr0.5Ti0.5O3 solid solution at the morphotropic phase boundary",
      date: "14 June 2013",
      description: "Geetika Srivastava, Ankur Goswami, A. M. Umarji, Ceramics International",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1016/j.ceramint.2012.08.049",
    },
    {
      category: "2013",
      title: "Synthesis, characterization and thermal degradation of dual temperature- and pH-sensitive RAFT-made copolymers of N, N-(dimethylamino) ethyl methacrylate and methyl methacrylate",
      date: "14 June 2013",
      description: "Saswati Ghosh Roy, Kamal Bauri, Sunirmal Pal, Ankur Goswami, Giridhar Madras, Priyadarsi De, Polymer International",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1002/pi.4335",
    },
    {
      category: "2013",
      title: "Thermal degradation kinetics of thermoresponsive poly (N-isopropylacrylamide-co-N, N-dimethylacrylamide) copolymers prepared via RAFT polymerization",
      date: "14 June 2013",
      description: "Kamal Bauri, Saswati Ghosh Roy, Simran Arora, Rajib Kumar Dey, Ankur Goswami, Giridhar Madras, Priyadarsi De, Journal of Thermal Analysis and Calorimetry",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1007/s10973-012-2344-0",
    },
    {
      category: "2012",
      title: "Thermomechanical and fractographic behavior of poly (HDDA-co-MMA): a study for its application in microcantilever sensors",
      date: "14 June 2012",
      description: "Ankur Goswami, A.M. Umarji, Giridhar Madras, Polymers for Advanced Technologies",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1002/pat.3035",
    },
    {
      category: "2012",
      title: "Thermal degradation kinetics of poly (trimethylol propane triacrylate)/poly (hexane diol diacrylate) interpenetrating polymer network",
      date: "14 June 2012",
      description: "Ankur Goswami, Geetika Srivastava, A.M. Umarji, Giridhar Madras, Thermochimica Acta",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1016/j.tca.2012.08.006",
    },
    {
      category: "2012",
      title: "Polymer microfabrication by scanning based microstereolithography: Optical design and material functionality",
      date: "14 June 2012",
      description: "Ankur Goswami, Arindam Phani, A.M. Umarji, Giridhar Madras, Review of Scientific Instruments",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1063/1.4750975",
    },
    {
      category: "2011",
      title: "Poly-HDDA microstructure fabrication using microstereolithography for microcantilever-based sensor technology",
      date: "14 June 2011",
      description: "Ankur Goswami, Arindam Phani, Ankit Krisna, N Balashanmugam, Giridhar Madras, A.M. Umarji, Proc. SPIE Micromachining and Microfabrication Process Technology XVI",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1117/12.888045",
    },
    {
      category: "2010",
      title: "Degradation kinetics of poly(HDDA-co-MMA)",
      date: "14 June 2010",
      description: "Ankur Goswami, A.M. Umarji, Giridhar Madras, Journal of Applied Polymer Science",
      downloadLink: "/notice/download",
      detailsLink: "https://doi.org/10.1002/app.32122",
    }
];

  return (
    <div className={`${styles.noticeList} grid gap-6 m-4`}>
      {notices.map((notice, index) => (
        <Notice
          key={index}
          category={notice.category}
          title={notice.title}
          date={notice.date}
          description={notice.description}
          downloadLink={apiURL + notice.downloadLink}
          detailsLink={notice.detailsLink}
        />
      ))}
      <div className="mx-auto w-fit">
        <Button text={"More &rarr;"} href={""} />
      </div>
    </div>
  );
};

export default Notices;
