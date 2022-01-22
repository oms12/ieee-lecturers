import "./professor.css";
import Professor_Content from "./professorcontent.js";
import image1 from "../../image/jseph bigun.jpg";
import image2 from "../../image/kewin.jpg";
import image3 from "../../image/mark nixon.jpg";
import image4 from "../../image/sharath pankanti.jpg";
import image5 from "../../image/xilin chen.jpg";
import image6 from "../../image/yashsuhi yagi.jpg";
import image7 from "../../image/venu.jpg";
import Popup from "../Popupdata/Popupdata";
const Professor = (props) => {
  function showpop(ok,lecture,content)
  {
    props.toshow(ok,lecture,content);
    // console.log(lecture);
  }
  return (
    <>
      <div className="container">
        <div class="title">
          <div class="left_border"></div>
          <p class="mid_para">IEEE Biometrics Council DLP Speakers (2022-2024)</p>
          <div class="right_border"></div>
        </div>
        <div className="content">
          <Professor_Content
            name="Kevin Bowyer"
            biograhy = "abc"
            branch=" Computer Science and Engineering"
            university_name="University of Notre Dame, USA"
            university_address=""
            image={image2}
            research_topics = {[" abc, ","pqr"]}
            lectures = {["Current Trends and Topics in Iris Presentation Attack Detection",
                        "Face Recognition Accuracy Differences Across Demographic Groups"]}
            content = {["Iris recognition is increasingly used in large-scale applications. As a result, presentation attack detection for iris recognition takes on fundamental importance. This survey covers" + 
                        " the diverse research literature on this topic. Different categories of presentation attack"+
                        " are described and placed in an application-relevant framework, and the state of the art in"+
                        " detecting each category of attack is summarized. One conclusion from this is that"+
                        " presentation attack detection for iris recognition is not yet a solved problem. Datasets"+
                        " available for research are described, research directions for the near- and medium-term"+
                        " future will be discussed, along with a short list of recommended readings.",
                        "Face recognition technology has recently become controversial over concerns about"+
                        " possible bias due to accuracy varying based on race or skin tone. We explore three"+
                        " important aspects of face recognition technology related to this controversy. Using two"+
                        " different deep convolutional neural network face matchers, we show that for a fixed"+
                        " decision threshold, the African-American image cohort has a higher false match rate"+
                        " (FMR), and the Caucasian cohort has a higher false nonmatch rate. We present an"+
                        " analysis of the impostor distribution designed to test the premise that darker skin tone"+
                        " causes a higher FMR, and find no clear evidence to support this premise. Finally, we"+
                        " explore how using face recognition for one-to-many identification can have a very low"+
                        " false-negative identification rate and still present concerns related to the false-positive"+
                        " identification rate. Both the ArcFace and VGGFace2 matchers and the MORPH dataset"+
                        " used in our experiments are available to the research community so that others should"+
                        " be able to reproduce or reanalyze our results."]}
            show = {showpop}
          />

          <Professor_Content
            name="Mark Nixon"
            biograhy = "abc"
            branch="Electronics and Computer Science"
            university_name="University of Southampton, UK"
            university_address=""
            image={image3}
            research_topics = {[" abcddddddddddddddddd, ","pqrdddddddddddddddddd"]}
            lectures = {["Future of Biometrics",
                         "Biometrics and Forensics",
                         "Gait and Soft Biometrics",
                         "Soft Biometrics"]}
            show = {showpop}
            content={["Biometrics has made amazing progress in its (relatively) short history. This speaker" +
                      " started his research in 1984, on face recognition, before it was even called biometrics." +
                      " Then, computers were slow and memory was expensive, but we showed there was" +
                      " potential. Fast forward to now, when computers are fast and memory is cheap: with" +
                      " modern tools we can now produce a laboratory system which can achieve recognition," +
                      " and in an afternoon. Biometrics helps the lives of most people on this planet by its virtues" +
                      " of speed and convenience. So it is time to take stock on our progress. As biometrics" +
                      " researchers, where are we going, and where should we go? Deep learning has enabled" +
                      " fast and accurate processes but we need to learn more of the underlying science. Can" +
                      " we deploy this capability for identification elsewhere, say forensic science? Is the" +
                      " underlying question what is identity and what does it imply? This talk will aim to introduce " +
                      " these questions, in the context of my own work on gait and soft biometrics, though the" +
                      " solutions and answers remain for future work.",
                      "Many biometrics can be used in forensics, as that is largely where biometrics started as" +
                      " a subject. This keynote concentrates forensics, and use of gait, ear and soft biometrics." +
                      " We will describe how gait has been presented as evidence, and the limitations and" +
                      " advantages in has provided. We shall also describe how the ear itself can be used as" +
                      " identification evidence, as people can hide their faces but are usually less concerned with" +
                      " hiding their ears. We shall also discuss how soft biometrics are used already as evidence," +
                      " and how they can be learned from video data. Any consideration for use of biometrics in" +
                      " forensics must consider the provision of evidence. Procedures are described for" +
                      " handcrafted approaches in gait and in ear, though the emergence of deep learning" +
                      " complicates the provision of evidence for newer biometrics and newer implementations." +
                      " Overall it is likely that biometrics has a rich potential future, and as well as describing the" +
                      " current state of art this talk describes some of the considerations that must be made for" +
                      " generating and using gait, ear and soft biometrics in forensics. As such it is an indicator" +
                      " of a fertile and rewarding area for deployment of biometrics.",
                      "With the proliferation of surveillance cameras, society needs means to identify people" +
                      " from the images these cameras provide. Crime solving websites are replete with imagery" +
                      " of criminals who are often disguised and/or at low resolution; terrorist attacks yield more" +
                      " imagery. We noticed this many years ago and were the first to develop systems that" +
                      " aimed to recognise people by their gait, their style of walking. This talk will describe some" +
                      " of the earlier approaches and their motivation, together with the recent works on deep" +
                      " learning. More recently we have moved to recognising people from human descriptions," +
                      " consistent with eyewitness statements and the limited spatial and temporal resolution of" +
                      " surveillance imagery, and the chance of disguise. We have shown that human" +
                      " descriptions can be used for recognition and retrieval, and formulated ways to make these" +
                      " descriptions more effective. We have so far used descriptions of the face, the body and" +
                      " the clothing, and are our current work shows how the labels can be derived by computer" +
                      " vision and explores the new information available by the interface between semantic" +
                      " description and automated recognition. This talk thus surveys these areas, describing" +
                      " progress in gait and in soft biometrics.",
                      "This talk will focus on identifying people in surveillance imagery. This is needed by society" +
                      " to solve crimes where imagery is at low resolution and faces and other traditional" +
                      " discriminatory information is not available. Soft Biometrics is a relatively new field wherein" +
                      " the majority of new techniques augment traditional ‘hard’ biometrics data with soft" +
                      " measures. These measures are perceived to have low discriminatory ability, though can" +
                      " be used to increase the performance of a traditional biometric system, e.g. by augmenting" +
                      " data with estimates of age and gender. At Southampton we have been working on using" +
                      " these measures for identification alone. It required a totally new approach using human" +
                      " derived labels. These are then used for recognition. They can also be used to prime" +
                      " computer vision systems to estimate the labels a human would describe. It’s a totally new" +
                      " area encompassing computer science and psychology, bridging the semantic gap" +
                      " between computer and human vision. The labels ae used to describe the body, he face" +
                      " and the clothing for recognition. I will describe the background, motivation and" +
                      " accomplishments of these fascinating new approaches."]}
          />

          <Professor_Content
            name="Sharath Pankanti"
            biograhy = "abc"
            branch="Computer Science"
            university_name="Microsoft , USA"
            university_address=""
            image={image4}
            research_topics = {[" abcddddddddddddddddd, ","pqrdddddddddddddddddd"]}
            lectures = {["Global ID: Biometrics for Billions of Identities",
                         "Next Generation Biometrics: Operating from Encrypted Data"]}
            show = {showpop}
            content={["The world’s population, which is currently estimated to be 7.5 Billion, is very likely to" + 
                      " surpass 10 Billion by the turn of the century. While there are several challenges when" + 
                      " dealing with a population of this magnitude, the ability to positively establish or refute an" + 
                      " individual’s identity is likely to be one of the fundamental expectations of a global society." + 
                      " In this article, we systematically discuss the issues impacting the design, implementation" + 
                      " and deployment of a large-scale biometric identification system that can effectively" + 
                      " manage and distinguish over 10 Billion identities. In this regard, we identify four" + 
                      " technological issues that have to be satisfactorily resolved to design such a system:" + 
                      " system scalability, identification accuracy, response time, template security and privacy." + 
                      " We discuss how the lessons learned from ongoing large-scale biometric systems such as" + 
                      " UAE’s Border Crossing System and India’s National ID Card Program (Aadhaar) can be" + 
                      " leveraged and incorporated into a Global ID system that handles 10B identities. Further," + 
                      " we study existing large-scale pattern recognition and machine learning systems, and" + 
                      " determine how the challenges resident in such systems can be effectively addressed for" + 
                      " use in the proposed Global ID system. Finally, we assess the gaps that need to be" + 
                      " addressed by the research and development community-at-large for designing the Global" + 
                      " ID system. We conclude that the outstanding research, engineering and design topics are" + 
                      " “Grand Challenges” and, without a serious understanding of the underlying complex" + 
                      " issues, simplistic identity infrastructure solutions will be dwarfed by the enormity of the" + 
                      " identity problems of the next generation.",
                      "Machine learning on encrypted data can address the concerns related to privacy and" + 
                      " legality of sharing sensitive data with untrustworthy service providers. Fully Homomorphic" + 
                      " Encryption (FHE) is a promising technique to enable machine learning and inferencing" + 
                      " while providing strict guarantees against information leakage. Since deep convolutional" + 
                      " neural networks (CNNs) have become the machine learning tool of choice in several" + 
                      " applications, several attempts have been made to harness CNNs to extract insights from" + 
                      " encrypted data. However, existing works focus only on ensuring data security and ignore" + 
                      " security of model parameters. They also report high level implementations without" + 
                      " providing rigorous analysis of the accuracy, security, and speed trade-offs involved in the" + 
                      " FHE implementation of generic primitive operators of a CNN such as convolution, non-" + 
                      " linear activation, and pooling. In this work, we consider a Machine Learning as a Service" + 
                      " (MLaaS) scenario where both input data and model parameters are secured using FHE." + 
                      " Using the CKKS scheme available in the open-source HElib library, we show that" + 
                      " operational parameters of the chosen FHE scheme such as the degree of the cyclotomic" + 
                      " polynomial, depth limitations of the underlying leveled HE scheme, and the computational" + 
                      " precision parameters have a major impact on the design of the machine learning model" + 
                      " (especially, the choice of the activation function and pooling method). Our empirical study" + 
                      " shows that choice of aforementioned design parameters results in significant trade-offs" + 
                      " between accuracy, security level, and computational time. We strongly believe our work" + 
                      " will enable the next generation of biometrics systems affording biometrics recognition" + 
                      " from encrypted data and thus overcoming many of the privacy concerns."]}
          />

          <Professor_Content
            name="Xilin Chen"
            biograhy = "abc"
            branch="abc"
            university_name="Institute of Computing Technology, Chinese Academy of Sciences, Beijing, China"
            university_address=""
            image={image5}
            research_topics = {[" abcddddddddddddddddd, ","pqrdddddddddddddddddd"]}
            lectures = {["Hand Gesture Recognition and Interaction",
                        "Towards Understandable Computer Vision",
                        "Health Perception from Face and Action"]}
            show = {showpop}
            content={["Gesture has emerged as an important component for biometrics authentication and day-" + 
                      " to-day interaction in our lives. It is also widely used in traffic control, marine" + 
                      " communication, etc. Gesture can even extend to form a kind of language -- sign language." + 
                      " Sign language contains a larger vocabulary set and has become a major communication" + 
                      " tool among the Deaf. Gesture recognition provides not only human-human" + 
                      " communication, but also human-machine interaction for a range of biometrics" + 
                      " applications. This talk will firstly introduce challenges in hand gesture recognition, and" + 
                      " then discuss the advances in hand gesture and sign language recognition.",
                      " (This talk title can be preferably for the undergraduate students or industry)" + 
                      " In the past decades, computer vision-based biometrics has become the hottest area in" + 
                      " artificial intelligence due to it can offer similar or better results, in some typical tasks such" + 
                      " as the recognition of objects or humans, than those performed by humans. However," + 
                      " most current computer vision systems are designed for specific task(s) in the close world," + 
                      " and hard to deal with open world cases. Flat structure for specific task(s) without" + 
                      " reasoning and lack of knowledge are the major barriers toward a flexible computer vision" + 
                      " system. For this purpose, a key factor is understandable or interpretable. Therefore," + 
                      " objects should be processed in a contextual environment rather than a solo one with a" + 
                      " simple identity, and objects should also be associated with relevant concepts. A" + 
                      " conceptual mapping of a given image brings enhanced representation, which can support" + 
                      " versatile tasks. In this talk, I will briefly review the current state of computer vision, and" + 
                      " talk about some open problems. I will then share my points on these relevant problems." + 
                      " Some of our efforts towards understandable computer vision are reported, including" + 
                      " hierarchical object detection and categorization, scene graph construction and its" + 
                      " application, unseen object inference, etc.",
                      "Human Faces are widely used in Biometrics and can reveal range of other features that" + 
                      " can not just improve the personal identification but also advance healthcare technologies." + 
                      " Similarly the human actions and gait data can also reveal such intrinsic healthcare" + 
                      " parameters for a range of real world applications and assessments. During last several" + 
                      " years, our research group has investigated a range such problems and developed" + 
                      " applications. This talk will discuss on such challenges and technologies for healthcare" + 
                      " advancements."]}
          />

         <Professor_Content
            name="Yasushi Yagi"
            biograhy = "abc"
            branch="Computer Science"
            university_name="Osaka University, Japan"
            university_address=""
            image={image6}
            research_topics = {[" abcddddddddddddddddd, ","pqrdddddddddddddddddd"]}
            lectures = {["Human Gait Analysis for Biometrics and Forensics",
                          "Personal Emotions and Psychophysiological Analysis from Human Gait"]}
            show = {showpop}
            content={["We have been studying human gait analysis for more than 15 years. Because everyone's" + 
                      " walking style is unique, human gait is a prime candidate for person authentication tasks." + 
                      " Our gait analysis technologies are now being used in real criminal investigations." + 
                      `\n` +                                
                                                  
  
                                                                                                                        
                        "We have constructed a very large-scale gait database, and proposed several methods of" + 
                      " gait analysis. The appearances of gait patterns are influenced by changes in viewpoint," + 
                      " walking direction, speed, clothes, and shoes. To overcome these problems, we have" + 
                      " proposed several approaches using a part-based method, an appearance-based view" + 
                      " transformation model, a periodic temporal super resolution method, a manifold-based" + 
                      " method and score-level fusion. During this talk, I will also present the experimental results" + 
                      " to show the efficiency of our approaches on the large-scale gait database.",
                      "Human gait can be conveniently acquired from a-distance and also widely accessible" + 
                      " from the publicly installed surveillance systems. During this talk, I will present a new focus" + 
                      " on the gait analysis to detect emotions from the persons gait patterns. The objective of" + 
                      " such study is predict human emotion and mental condition, and for the people" + 
                      " surrounding us. During this talk, I will also introduce some studies on its medical" + 
                      " applications."]}
          />

          <Professor_Content
            name="Joseph Bigun"
            branch="abc"
            university_name="Halmstad University, Sweden"
            university_address=""
            image={image1}
            research_topics = {[" abcddddddddddddddddd, ","pqrdddddddddddddddddd"]}
            lectures = {["Dense Maps of Orientation, Frequency and Phase for Explainable Biometrics",
                         "Fundamentals of Image Processing for Fingerprints by Wave and Particle Natures of Local Patches",
                         ]}
            show = {showpop}
            content={["A summary of main Fourier features along with their importance to human visual" + 
                      " intelligence will be given. These features comprise local direction, local (absolute)" + 
                      " frequency, and local phase which in turn drive more complex models of shape, also they" + 
                      " being dense.\n" + 
                      "Whereas fingerprint wave structures can be modelled by frequency and direction maps" + 
                      " alone, minutiae in the form of ridge ends and bifurcations call for modelling these as first" + 
                      " order angular variation of local phase. Likewise, complex global patterns in the form of" + 
                      " cores and deltas demand a modelling of dense direction maps using angular variations" + 
                      " of order 1 and -1. Similar example applications from other biometrics will be visited," + 
                      " including identity recognition using iris, periocular regions, lip movements, and full faces.\n" + 
                      "However intricate, the underlying shape models demand a principled and robust" + 
                      " estimation of local direction and frequency, independent of each other. With such" + 
                      " estimations at hand one can recognize more complex patterns, including those using local" + 
                      " phase, as delivered by Gabor filters associated with estimated frequencies and directions." + 
                      " Tools using complex valued filters on complex valued dense maps, easing the practice" + 
                      " of more intricate shape recognition will be presented. Examples of shape models built on" + 
                      " top of basic dense fields, which in themselves yield dense responses, will be given along" + 
                      " their use..",
                      "A characteristics of a physical wave is that it is everywhere and cannot be confined to a" + 
                      " location. In images, texture is a local property defined by translation invariance of the local" + 
                      " appearance. It is hard to define a location inside a texture uniquely by observing the local" + 
                      " pattern around the location. Examples in fingerprints are patches with slow orientation" + 
                      " and frequency changes at locations far away from deltas and cores. The more it is difficult" + 
                      " to define a location by image measurements of an image patch, the more the patch" + 
                      " exhibits wave property.\n" + 
                      "On the other hand, a particle in physics is characterized by its infinitely precise location." + 
                      " In images too, it is sometimes possible to define a location very precisely by measuring" + 
                      " image pattern properties around the location, which is the opposite of a texture patch. In" + 
                      " fingerprints, delta and core are example patterns which can define a location rather" + 
                      " precisely and uniquely at macro scale. Even in micro scale such patterns exist: ridge ends" + 
                      " and bifurcations, also known as minutiae. In line with this division of pattern" + 
                      " characteristics, there exist image measurements that are more suitable for each of the" + 
                      " two cathegories of image patches. Wave properties can be obtained by measuring" + 
                      " spectral energy properties, the most known example yielding dense orientation fields." + 
                      " Likewise, patches having particle nature can be described most effectively by their own" + 
                      " tools, to the effect that by using them not only one can detect locations precisely but also" + 
                      " systemize and explain what one is measuring. Examples include direction estimation in" + 
                      " harmonic coordinates yielding precise localization of cores, deltas as well as minutiae," + 
                      " each turning out to be a special type of direction measurement but in non-cartesian" + 
                      " coordinates.."]}
          />
          <Professor_Content
            name="Venu Govindaraju"
            biograhy = "abc"
            branch="Computer Science and Engineering"
            university_name="State University of New York, Buffalo, USA"
            university_address=""
            image={image7}
            research_topics = {[" abcddddddddddddddddd, ","pqrdddddddddddddddddd"]}
            lectures = {["Handwriting Recognition",
                        "Science of Authentication",
                        "Biometrics in Smart Environments"]}
            show = {showpop} 
            content={["We present an overview of two decades of innovation in" + 
                      " perspective on the evolution of research in this area and the future of the field. We highlight" + 
                      " handwriting recognition at the Govindaraju lab at the University at Buffalo and offer a" + 
                      " our seminal work in handwriting recognition that was at the core of the first handwritten" + 
                      " address interpretation system used by the U.S. Postal Service, described as one of the first" + 
                      " practical success stories of AI and as a shining example of AI for the Social Good (Eric Horvitz," + 
                      " Microsoft Research). We journey through the HWR landscape, from lexicon-based to lexicon-" + 
                      " free approaches, and from heuristics-driven techniques to the principled methodologies that" + 
                      " we introduced. We explore a sample of the variety of impactful applications that resulted from" + 
                      " our research, from the processing of healthcare forms for the NYS Department of Health for" + 
                      " deriving early indicators of outbreaks, to access to historical documents through word spotting," + 
                      " transcript mapping and other indexing schemes for digital libraries, to award-winning pre-" + 
                      " processing techniques and multilingual OCR solutions.",
                      "Given the pervasive use of e-commerce transactions and personal" + 
                      " and protects the privacy and online assets of individuals and organizations. We recommend a" + 
                      " data storage in the cloud, society has an urgent need for a robust process that authenticates" + 
                      " totally new approach that rethinks the entire 'science of authentication.' The biometrics and" + 
                      " cyber security communities have approached the challenge from different vantage points. The" + 
                      " former focuses on 'individuality' and 'liveness' of human characteristics whereas the latter has" + 
                      " primarily considered encryption and elaborate software protocols. This talk explores methods" + 
                      " that go beyond the traditional biometrics of physical and behavioral modalities by integrating" + 
                      " tests for humanness and identity in a cognitive framework. We also will show how our holistic" + 
                      " process allows for a more practical approach to security within the framework of a" + 
                      " continuous authentication scenario.",
                      "A ‘smart space’ is one that automatically identifies and" + 
                      " tracks its occupants using unobtrusive biometric modalities such as face, gait, and voice in an" + 
                      " unconstrained fashion. Information retrieval in a smart space is concerned with the location" + 
                      " and movement of people over time. We abstract a smart space by a probabilistic state" + 
                      " transition system in which each state records the probabilities of presence of individuals in" + 
                      " various zones of the smart space. We carry out track-based reasoning on the states in order to" + 
                      " determine more accurately the occupants of the smart space. This leads to a data model based" + 
                      " upon an occupancy relation in which time is treated discretely, owing to the discrete nature of" + 
                      " events, but probability is treated as a real-valued attribute. Using this data model, we show" + 
                     " how to formulate a number of spatio-temporal queries, focusing on the computation of" + 
                      " probabilities, an aspect that is novel to this model. We show that a query-dependent metric" + 
                      " gives significantly better results for a class of occupancy-related queries compared with query-" + 
                      " independent metrics."]}
          />
        </div>
      </div>
      <Popup />
    </>
  );
};
export default Professor;
