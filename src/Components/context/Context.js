import React,{createContext,useState} from "react";

//! Context Data...
export const CategoryContext=createContext();
export const CategoryProvider=(props)=>{
    const [category,]=useState([
        
        {
            id:"1",
            category:"TollyWood",
            img:"https://www.tollywood.net/wp-content/uploads/2022/03/Bheemla-Nayak-latest-Collections-14th-place-in-USA.jpg",
            det:"Bheemla nayak Box Office Day 23 (Early Trends): Picks Up Terrifically On 4th Saturday",
            date:"By IANS -January 3, 2022",
            description:"Bheemla Nayak is a 2022 Indian Telugu-language action drama film directed by Saagar K Chandra from a screenplay written by Trivikram Srinivas. It is a remake of the 2020 Malayalam film Ayyappanum Koshiyum by Sachy. Produced by Suryadevara Naga Vamsi of Sithara Entertainments, the film stars Pawan Kalyan, Rana Daggubati, Nithya Menen and Samyuktha Menon."
        },
        {
            id:"2",
            category:"TollyWood",
            img:"https://cdn.gulte.com/wp-content/uploads/2021/10/Shyam.jpeg",
            det:"Shyam singha roy  is Biggies To Take Tollywood A Step Higher In 2021",
            date:"By Koimoi.com Team -January 9, 2022",
            description:"Shyam Singha Roy is a 2021 Indian Telugu-language period romantic drama film[3] directed by Rahul Sankrityan from a story written by Janga Satyadev. The film stars Nani in a dual role alongside Sai Pallavi, Krithi Shetty and Madonna Sebastian. It is partly set in the backdrop of Kolkata in the 1970s and it is based on the theme of reincarnation.[4]The film was announced in February 2020 and principal photography took place from December 2020 to July 2021 in Hyderabad and Kolkata. Production and release were delayed due to the COVID-19 pandemic. Shyam Singha Roy was theatrically released on 24 December 2021 and opened to positive reviews.[5] The film emerged successful at the box office grossing over ₹50 crore."
        },
        {
            id:"3",
            category:"TollyWood",
            img:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/02/kgf-chapter-2-to-get-postponed-001.jpg",
            det:"Delay In 'KGF 2' Release, A Blessing In Disguise For Other Tollywood Films",
            date:"Published: 05 Jan 2022, Updated: 05 Jan 2022 8:14 pm",
            description:"K.G.F: Chapter 2 is a upcoming Indian Kannada-language period action film directed by Prashanth Neel. A sequel to the 2018 film K.G.F: Chapter 1, the film stars Yash in the lead reprising his role from the first film and Sanjay Dutt as the antagonist.Neel retained the technicians from its predecessor with Bhuvan Gowda handling the cinematography and Ravi Basrur scoring the music for the soundtrack and the film's background.[8] It is the most expensive Kannada film with a budget of ₹100 crore.[6] The film is scheduled for a theatrical release on 14 April 2022 in Kannada along with the dubbed versions of Telugu, Hindi, Tamil and Malayalam languages."

        },
        {
            id:"4",
            category:"TollyWood",
            img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg",
            det:"Pushpa : Tollywood heroines get a professional identity finally, but is that change enough?",
            date:"Published: 02nd January 2022 05:00 AM",
            description:"Pushpa: The Rise – Part 01 is a 2021 Indian Telugu-language action drama film[5] written and directed by Sukumar. Produced by Mythri Movie Makers in association with Muttamsetty Media, it stars Allu Arjun as the titular character alongside Fahadh Faasil (in his Telugu debut) and Rashmika Mandanna while Jagadeesh Prathap Bandari, Sunil, Rao Ramesh, Dhananjaya, Anasuya Bharadwaj, Ajay and Ajay Ghosh play supporting roles. The first of two cinematic parts, the film depicts the rise of a coolie in the smuggling syndicate of red sandalwood, a rare wood that grows only in the Seshachalam Hills of Andhra Pradesh state. "
            
        },
        {
            id:"5",
            category:"Technology",
            img:"https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/kv/9-s.jpg",
            det:"One plus 9 (5g) Series Video Leak Shows Off Design of 3 Models Ahead of Launch; Specifications Tipped",
            date:"by Nithya P Nair, 10 January 2022",
            description:"If you live in the US and you’re buying an Android phone, chances are very high that you’ll end up with a Samsung Galaxy phone. Samsung has the carrier relationships, quality, and marketing that have led directly to market share. LG, Motorola, and even Google sell more phones here than OnePlus does.But after nearly seven years and dozens of phones, OnePlus has established itself as a brand that can make great phones that are serious alternatives to the mainstream. The $1069 OnePlus 9 Pro (the only option in North America, other parts of the world have access to a slightly less expensive model) achieves that goal with only a handful of notable compromises.OnePlus’ flagship phones always come with a laundry list of top-of-the-line specs, but what makes the OnePlus 9 Pro good isn’t the numbers; it’s how well those specs translate into one of the best experiences you can get using Android.notable compromises.OnePlus’ flagship phones always come with a laundry list of top-of-the-line specs, but what makes the OnePlus 9 Pro good isn’t the numbers; it’s how well those specs translate into one of the best experiences you can get using Android."
        },
        {
            id:"6",
            category:"Technology",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRHf0LVN-OnJCkoPF-mBpTYqno04McKHVxwQ&usqp=CAU",
            det:"iPhone 12 pro Pro Front Design Teased Ahead of January 11 Launch, China Model Confirmed to Have ColorOS 12.1",
            date:"by Jagmeet Singh, 10 January 2022",
            description:"Cupertino, California — Apple today announced iPhone 12 Pro and iPhone 12 Pro Max, introducing a powerful 5G experience and advanced technologies that push the boundaries of innovation for users who want the most out of iPhone. iPhone 12 Pro models feature a new design and edge-to-edge Super Retina XDR displays, the largest ever on iPhone, protected by the all-new Ceramic Shield front cover, which provides the biggest jump in durability ever on iPhone. The Apple-designed A14 Bionic chip, the fastest chip in a smartphone, powers impressive computational photography features including the all-new Apple ProRAW for more creative control in photos, and enables the first end-to-end Dolby Vision video experience, up to 60 fps. The reimagined pro camera systems include an expansive Ultra Wide camera, a Telephoto camera with an even longer focal length on iPhone 12 Pro Max, and new Wide cameras to capture beautiful professional-quality images and video in bright and low-light environments. iPhone 12 Pro models also introduce a new LiDAR Scanner for immersive augmented reality (AR) experiences and MagSafe, which offers high-powered wireless charging and an all-new ecosystem of accessories that easily attach to iPhone."
        },
        {
            id:"7",
            category:"Technology",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAo3S05K0wahIyqpJuHS5mWWi6WkNzLRiArw&usqp=CAU",
            det:"Technology and DesignGet an introduction to the 5G physical layer and RF techniques",
            date:"by David Delima, 7 January 2022",
            description:"Engineers are using MATLAB® and Simulink® to develop products that implement the new 5G New Radio (NR) specification.Learn how you can accelerate 5G NR development tasks such as optimizing 5G physical layer algorithms and link-level performance, simulating RF and antenna designs, and system verification with hardware prototypes and over-the-air tests.Section 1: Technology and DesignGet an introduction to the 5G physical layer and RF techniques you can use to optimize spectrum efficiency and data rates.Section 2: New Architectures and AlgorithmsLearn about techniques such as hybrid beamforming, linearizing power amplifiers, new radio waveforms, and polar codes and LDPC channel coding.Section 3: Accelerating Prototypes and Field TrialsSee the steps to convert MATLAB reference algorithms to automatically generate HDL code. Read case studies on how Huawei and Ericsson are using these methods."
        }, 
        {
            id:"8",
            category:"Technology",
            img:"https://empowering-people-network.siemens-stiftung.org/wp-content/uploads/resized/2021/05/Livox_solution_single-pic-1-800x450-c-default.jpg",
            det:"A platform that allows non-verbal people with disabilities to communicate and learn, Livox has helped thousands of people.",
            date:"by Nithya P Nair, 7 January 2022",
            description:"There are over 1 billion people with disabilities on the planet.Disabled people are the highest risk of being socially excluded.Livox is a platform that enables non-verbal people with disabilities and people with learning impairments to communicand to learn.Livox has already helped over 25,000 people with disabilities to have a voice and, in turn, have access to proper education.Livox has three components: the Livox app, the Livox Store, and MyLivox Portal."
        },
        {
            id:"9",
            category:"Jobs",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFcoQXHmP3OxTqCEIPNxEy-g5UrccvlH8xA&usqp=CAU",
            det:"Tcs mass recuritment to bag data science job roles in 2022",
            date:"PUBLISHED ON JANUARY 7, 2022 By BY SREEJANI BHATTACHARYYA",
            description:"Tata Consultancy Services (TCS) is an Indian multinational information technology (IT) services and consulting company headquartered in Mumbai, Maharashtra, India[6][7] with its largest campus located in Chennai, Tamil Nadu, India. It is a subsidiary of the Tata Group and operates in 149 locations across 46 countries.[8]TCS is the second largest Indian company by market capitalisation and is among the most valuable IT services brworldwide.[9][10][11] In 2015, TCS was ranked 64th overall in the Forbes World's Most Innovative Companies ranking, making it both the highest-ranked IT services company and the top Indian company.[12] As of 2018, it is ranked eleventh on the Fortune India 500 list.[13] In April 2018, TCS became the first Indian IT company to reach $100 billion in market capitalisation[14] and second Indian company ever (after Reliance Industries achieved it in 2007)[15] after its market capitalisation stood at ₹6.793 trillion (equivalent to ₹7.7 trillion or US$100 billion in 2020) on the Bombay Stock Exchange.",
        },
        {
            id:"10",
            category:"Jobs",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-EunnV-io8CNLm0p0UaTk_bQZpZRBBjr5iA&usqp=CAU",
            det:"Jobs: Infosys invites applications from graduates",
            date:"Sameer|   Updated: 7th January 2022 12:14 pm IST",
            description:"Established in 1981, Infosys is a NYSE listed global consulting and IT services company with more than 292k employees. From a capital of US$250, we have grown to become a US$ 15.64 billion (LTM Q3 FY22 revenues) company with a market capitalization of approximately US$ 106.44 billion.In our journey of over 40 years, we have catalyzed some of the major changes that have led to India's emergence as the global destination for software services talent. We pioneered the Global Delivery Model and became the first IT Company from India to be listed on NASDAQ. Our employee stock options program created some of India's first salaried millionaires.With over four decades of experience in managing the systems and workings of global enterprises, we expertly steer our clients through their digital journey. We do it by enabling the enterprise with an AI-powered core that helps prioritize the execution of change. We also empower the business with agile digital at scale to deliver unprecedented levels of performance and customer delight. Our always-on learning agenda drives their continuous improvement through building and transferring digital skills, expertise, and ideas from our innovation ecosystem.",
        },
        {
            id:"11",
            category:"Jobs",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyzTBFVcbuFXR9OAw2Ud4Eb5YS7d8VCtVhA&usqp=CAU",
            det:"Jobs in Hyderabad: Apprentice jobs in Hyderabad .. Qualifications, application process",
            date:"Published by: Sharath Chandra January 08, 2022, 17:04 IST",
            description:"The company was incorporated on 29 December 1945 in Amalner, India, by Mohamed Premji as Western India Vegetable Products Limited, later abbreviated to Wipro. It was initially set up as a manufacturer of vegetable and refined oils in Amalner, Maharashtra, British India, under the trade names of Kisan, Sunflower, and Camel.[8][9][10] In 1966, after Mohamed Premji's death, his son Azim Premji took over Wipro as its chairman at the age of 21.[11][12]During the 1970s and 1975 the company shifted its focus to new opportunities in the IT and computing industry, which was at a nascent stage in India at the time. On 7 June 1977, the name of the company changed from Western India Vegetable Products Limited, to Wipro Products Limited.[9] In 1982, the name was changed again, from Wipro Products Limited to Wipro Limited.[13] Wipro continued to expand in the consumer products domain with the launch of Ralak, a tulsi-based family soap and Wipro Jasmine, a toilet soap.In 1988, Wipro added mobile hydraulic cylinders and heavy-duty industrial cylinders to its line of products.[9] A joint venture company with the United States' General Electric in the name of Wipro GE Medical Systems Pvt. Ltd. was set up in 1989 for the manufacture, sales, and service of diagnostic and imaging products.[14] In 1991, tipping systems and Eaton hydraulic products were launched. The Wipro Fluid Power division, in 1992, developed the capability to offer standard hydraulic cylinders for construction equipment and truck tipping systems. The Santoor talcum powder and Wipro Baby Soft range of baby toiletries were launched in 1990.",
        },
        {
            id:"12",
            category:"Jobs",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO2MrQ-q8P3tsFiRTjUdnQJOTHoGyQZj0N4w&usqp=CAU",
            det:"IT Jobs: Good news for freshers .. Cap Gemini will be hosted by Off Campus Drive .. Full details ..",
            date:"LAST UPDATED: JANUARY 10, 2022, 12:03 IST",
            description:"Capgemini, Multi National Information Technology Company ( IT Company ), says good news for the unemployed. Off campus drive will be conducted for engineering students who have completed graduation in 2019 or 2020. This will create large scale job opportunities for freshers. Capgemini currently operates in 13 cities with over 1,50,000 employees. The company has offices in Bangalore, Bhubaneswar, Chennai, Coimbatore, Gandhinagar, Gurugram, Hyderabad , Kolkata, Mumbai, Noida, Pune, Salem and Tiruchirappalli. Selected candidates will be posted in the respective offices. Eligible candidates are required to apply through the official website of CapGemini.Eligibility Criteria Candidates must have completed graduation in 2019/2020. Those who have completed it before are ineligible to apply. Only those who have completed MCA, BE / BTech in any discipline are eligible to apply. ME / MTech students must have passed only in Information Technology, Information Science and Computer Science. Only those who have secured at least 50% or more marks in Graduation (8 semesters in total), MCA (6 semesters in total), ME / MTech are eligible to apply.         Candidate should not have a gap of more than 1 year in the amount of academic education. Candidate should not take more than 4 years to complete BE / BTech. The candidate should not have any backlog by the time of attending the interview. Must be ready to work at any Capzemini location in the country. Be prepared to work in shifts if necessary.Must be willing to sign a service bond at the time of joining the company. Only shortlisted candidates will have the opportunity to participate in the selection process. ",
        },
        {
            id:"13",
            category:"Nature",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7tviu-wGQ-5PpuF8nXvWblSAv2lRa-kLOJQ&usqp=CAU",
            det:"These childern make Christmas clean and green It's time to celebrate our festivals in an eco-friendly manner showing the way towards the same! ",
            date:"TNN / Dec 26, 2021, 09:53 (IST)",
            description:"nGreen is the way to celebrate festivals in these days of climate emergency, but not everyone takes the effort for it. However, these Malayalis found ways to make Christmas eco-friendly and also help others do the same. Wonder how they make merry without hurting nature? Read on! Muhamma in Alappuzha district is known for coir making and a handful of youngsters there, belonging to St George Churchs Yuvadeepthi group, made an eco-friendly star that suits the spirit of their place. Made of 40 kg coir, the star is 22 feet tall and was made in about 10 days. Binu K Joseph, who was part of the group, tells us, We decided to make an eco-friendly star revering Pope Francis's message to lead an eco-friendly life. The star also houses our church's crib in the middle. The team will be giving away the coir for erosion control efforts, after the Christmas season Priya Ann Varghese has been making Christmas decors for long, but this year, she decided to make her collection as eco-friendly as possible. The former techies online profile @annzcreations, filled with the green tree ornaments, berries, pine cones and more is quite popular among Keralas young nature lovers too. “Sourcing the raw materials for green decors isnt easy in Kerala. But, today environmentally-aware youngsters are seriously into recycling and eco-friendly decors, so I wanted to cater to them. The products, made of raw materials like bamboo, also last for a long time,” says Priya.",
        },
        {
            id:"14",
            category:"Nature",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxWcMF8q37fxgvZsjoGVl9K2PR27UfxTxKUw&usqp=CAU",
            det:"Flood accident 'act of God' only if caused by natural force:..",
            date:"TNN / Updated: Jan 7, 2022, 05:15 IST ",
            description:"NEW DELHI: The  has held that only those fire accidents could be termed acts of God which is inevitable and caused by external natural force and not due to active or passive negligence of human being. A force majeure clause or act of God is one exception that releases the party of its contractual obligations to an extent when events beyond their control take place and leave them unable to perform their part of the contract. It has also not been the case that the fire was a result of any mischief by any person. The fire that started around 12:55pm on April 10, 2003, could be brought under control only by 5am on April 11. When all the relevant factors are cumulatively taken into account, we find it difficult to accept that the fire and the resultant loss had been beyond the control of human agency,it said. ",
        },
        {
            id:"22",
            category:"Nature",
            img:"https://static.toiimg.com/thumb/msid-88218300,imgsize-165476,width-400,resizemode-4/88218300.jpg",
            det:"Natural, eco-friendly fibre weaves its way into Surats poly ..",
            date:"Yagnesh Bharat Mehta / TNN / Updated: Dec 11, 2021, 09 .",
            description:"SURAT: With the world consciously trying to leave at least one carbon footprint less in the sands of time, Suras textile hub, known for its polyester products, too is making efforts into weaving a greener thinking by adopting After introducing plant-based cupro fibre and viscose rayon, the city is now experimenting with fibre and yarn sourced from pineapple, birch wood, banana and bamboo. Few of the products are researched and developed locally, while some innovations made abroad are also trying to find its footing in the man-made fabric hub. Besides fabrics like nylon, cotton, cuprammonium, viscos,inen and a few others, almost 80 percent of fabric products at present are polyester based. “Plantain stems weighing around 45kg each were earlier considered waste and would actually incur the farmer an additional Rs 15,000 per hectare cost for removal of the eco-trash. But now, with the innovation of plant-based fibre, farmers can earn from that waste, said ",
        },
        {
            id:"15",
            category:"Nature",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyG5S7TyZZbqmQpaccaqWb2CSuL3qBdgHTaw&usqp=CAU",
            det:"The people close to nature ... but it's taken decades of replanting and protecting forests and wildlife ",
            date:"TNN / Dec 26, 2021, 09:53 (IST)",
            description:"nGreen is the way to celebrate festivals in these days of climate emergency, but not everyone takes the effort for it. However, these Malayalis found ways to make Christmas eco-friendly and also help others do the same. Wonder how they make merry without hurting nature? Read on! Muhamma in Alappuzha district is known for coir making and a handful of youngsters there, belonging to St George Churchs Yuvadeepthi group, made an eco-friendly star that suits the spirit of their place. Made of 40 kg coir, the star is 22 feet tall and was made in about 10 days. Binu K Joseph, who was part of the group, tells us, We decided to make an eco-friendly star revering Pope Francis's message to lead an eco-friendly life. The star also houses our church's crib in the middle. The team will be giving away the coir for erosion control efforts, after the Christmas season Priya Ann Varghese has been making Christmas decors for long, but this year, she decided to make her collection as eco-friendly as possible. The former techies online profile @annzcreations, filled with the green tree ornaments, berries, pine cones and more is quite popular among Keralas young nature lovers too. “Sourcing the raw materials for green decors isnt easy in Kerala. But, today environmentally-aware youngsters are seriously into recycling and eco-friendly decors, so I wanted to cater to them. The products, made of raw materials like bamboo, also last for a long time,” says Priya.",
        },
    ])
    return(
        <CategoryContext.Provider value={[category]}>
            {props.children}
        </CategoryContext.Provider>
    )
}