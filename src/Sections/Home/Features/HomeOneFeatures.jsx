import HomeIntegrateStyleWrapper from "./Features.style";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const boxData = [
  { 
    title: "Pvt Ltd Company Registration", 
    sentence: "Register your private limited company easily with expert guidance."
  },
  { 
    title: "GST Registration Online", 
    sentence: "Get your GST registered quickly and hassle-free."
  },
  { 
    title: "LLP Registration Online", 
    sentence: "Effortless LLP registration with legal support."
  },
  { 
    title: "One Person Company Registration", 
    sentence: "Launch your One Person Company with ease."
  },
  { 
    title: "MSME Registration", 
    sentence: "Boost your small business with MSME certification."
  },
  { 
    title: "IEC Registration", 
    sentence: "Start exporting with fast IEC registration."
  },
  { 
    title: "FSSAI Registration", 
    sentence: "Get your FSSAI license to ensure food safety compliance."
  },
  { 
    title: "Trademark Registration", 
    sentence: "Protect your brand with a registered trademark."
  },
  { 
    title: "Legal Advisory Services", 
    sentence: "Expert legal advice tailored for your business needs."
  }
];

const HomeIntegrate = () => {
  return (
    <HomeIntegrateStyleWrapper>
      <div className="container">
      <SectionTitle
                  subtitle="Features"
                  title="Get amazing benefits"
                  parentClass="md-mb-0 text-center"
                />
        <div className="grid-container">
          {boxData.map((box, index) => (
            <ScrollAnimate key={index} delay={index * 100}>
              <div className={`integrate-card color-${index % 2}`}>
                <div className="card-content">
                  <h3>{box.title}</h3>
                  <p>{box.sentence}</p>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
      <hr className="mx-auto fw-bold horizontalLine" style={{margin:"1rem",width:"75%",height: "2px",backgroundColor: "black",border:"none"}}></hr>

     
      
    </HomeIntegrateStyleWrapper>
  );
};

export default HomeIntegrate;
