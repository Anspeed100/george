import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useLocation } from 'react-router-dom';

const faqData = [
      {
        question: 'Why should we vote for you?',
        answer: 'The first article of the Constitution says the sovereignty of Ghana resides in the people of Ghana in whose name and for whose welfare the powers of government are to be exercised. My layman’s understanding of this is that the powers of government are to be exercised for the welfare and benefit of the people of Ghana. <br> <br>Also, Article 57 of the Constitution states that there shall be a President of the Republic who shall be Head of State, Head of Government, and Commander-in Chief of the Armed Forces of Ghana. What we have realised since the inception of the fourth republic is that we have had Presidents who have not acted as Head of State at all and for that matter have not exercised their enormous powers for the welfare and benefit of the people. Instead, we have had Presidents who act for and in the interest of the welfare of their political party, family, friends, and cronies. That is why in the last thirty-two years a large majority of Ghanaians have not benefitted from the 4th Republic. <br> <br>This will change under my government. As you are aware my slogan is ‘Breaking the 2” and my motto in English is ‘Common Prosperity for All.’ To the Glory of God, we don’t intend to just Break the 2, but provide Common Prosperity for all Ghanaians. This is why you should vote for me. Because, for the first time in the history of the fourth republic, Ghana will have a President who is not only Head of Government and Commander-In-Chief of the Armed Forces of Ghana but truly serves as Head of State for all Ghanaians. <br> <br>What that means is that I will serve Ghanaians day and night for the betterment of Ghana and the welfare and benefit of every Ghanaian. This will ensure that the nation Ghana becomes what it needs to be: a prosperous nation that is able to feed itself, able to manage her affairs properly, doesn’t need foreign aid and assistance to survive and every Ghanaian has the opportunity to prosper and is indeed prospering.',
        backgroundColor: 'bg-[#BA2026]',
        textColor:'text-[#fff]'
      },
      {
        question: 'Who is George Twum-Barimah-Adu',
        answer: 'A humble man of TRUTH who is TRANSPARENT and you can TRUST. <br> <br>I am Uncle George. Third child of Mr Frank Brako Adu Snr and Mrs Mariam Ama Acheampong Adu. I hail from Tafo in the Eastern Region of Ghana. <br> <br>I did my primary education at Castle Road Methodist Primary, Adabraka, Englebet International School at Airport Residential Area and Garrison Elementary at Burma-Camp. <br> <br>I did my secondary education at Presbyterian Boys’ Secondary School, (PRESEC) Legon and then my Bachelors and Master’s degree at Florida International University (FIU) in Miami Florida. <br> <br>I came back to Ghana to serve my country in 1993 where I worked at the National Insurance Commission till 2001 and left for the private sector. <br> <br>I’m a father of three, one daughter and two sons. I am married to my beautiful and lovely wife, Winnifred Lamiorkor Wolley Twum-Barimah-Adu.',
        backgroundColor: 'bg-[#009845]',
        textColor:'text-[#fff]'
      },
      {
        question: 'When you say Common Properity 4 All, What do you mean. In short, What is Common Prosperity?',
        answer: 'To answer the question, allow me to give my simple understanding of capitalism and socialism. <br> <br>Capitalism, simply put, is helping the rich with the hope that they will create the avenues to and for employment that will help the rest of the people. <br> <br>Socialism, simply put, is bringing the rich down to the level of the rest of the masses, so as to make everyone equal in wealth. <br> <br><strong>Common Prosperity however, simply put, is lifting everyone up in wealth and social status.</strong> <br> <br>Therefore policies executed under a Common Prosperity Agenda, are not meant to make a few rich and hope that they will help lift the rest, or bring the rich lower in their wealth status, but are meant to attain the true meaning of democracy as elaborated by the sixteenth  President of the United States of America, Abraham Lincoln: “A Government Of The People, By The People, For The People”',
        backgroundColor: 'bg-[#b8ae59]',
        textColor:'text-[#fff]'
      },
  {
    question: 'What would you do for the youth?',
    answer: 'With my government, it’s going to be all about two things:<br> <ul><li>1. the districts;</li> <li>2. and the youth.</li></ul> <br> <br>I will first and foremost urge the youth to stay in their districts because my youth job creation policies are district centred. I have termed that policy: <br> <br> <strong>District Contracts for the Youth.</strong> <br> <br>This policy ensures that contracts that are to be executed by the Government through the District Assemblies are awarded to qualified youths who live in the District. <br> <br>Secondly, youths in every Districts will be encouraged, assisted and resourced to enter into productive sectors of their districts taking into consideration the comparative advantage of the district. <br> <br>This policy will;<ul><li>1. Grow the local economy,</li><li>2. Retain wealth in the district,</li><li>3. Create wealth amongst the youth in every district in Ghana ; and</li><li>4. Prevent the youth from migrating from poorer districts to richer districts.</li></ul>',
    backgroundColor: 'bg-[#009845]',
    textColor:'text-[#fff]'
  },
  {
    question: 'What would you do differently?',
    answer: 'Since my mission is to deliver Common Prosperity For All. I will first and foremost, govern more as a Head-of- State and not as Head-of-Party. What that means is that: <br><br><ul><li>1. Decisions taken by my government must be in the interest of Ghana and benefit all Ghanaians.</li><li>2. I will not look at your party affiliation or non-affiliation to determine whether you get a government appointment and/or contract.</li><li>3. I will pursue a policy of Ghana First Within Cost which will ensure that every sector of the economy is reimagined, redefined and repurposed to benefit Ghana, be in the interest of Ghanaians and delivered within cost. </li>',
    backgroundColor: 'bg-[#fff]',
    textColor:'text-[#BA2026]'
  },
  {
    question: 'What would be your key policy priority or priorities for your first 100 days when elected?',
    answer: '<ul><li>1. Form my government.</li><li>2. Cut wastage in government.</li><li>3. Commence the process of strengthen anti-corruption agencies.</li><li>4. Spearheaded by my government under the NDPC, commence the process of reimagining, redefining and repurposing every sector of the economy.</li><li>5. Review all taxes, levies, and fees. Abolition those we need to and reduce the rates and percentages of the ones we have to.</li><li>6. Work towards the repealing of E-Levy and the introduction of E-Sika.</li><li>7. Work towards the introduction of a 4-day work week.</li></ul>',
    backgroundColor: 'bg-[#000]',
    textColor:'text-[#fff]'
  },
  {
    question: 'What do you mean by Breaking the 2?',
    answer: 'When I say Breaking The 2, I am talking about two things: <br>The first one is, breaking the foothold the two main known political parties, the NDC and the NPP, have had in Ghana’s politics over the last thirty-two years. <br><br> It is now clear more than ever, that after thirty-two years of the fourth republic both the NDC and the NPP have not been useful to Ghana. And until we extricate ourselves from the tyranny of these two non-performing conjoined twins, we shall continue to have Presidents who serve only their party and its supporters and not the totality of Ghanaians. A scenario which so far as we can see has taken our nation nowhere. <br><br>Secondly, when I say Breaking the 2, I am saying to Ghanaians that, together, we should not let the same party hold both the executive (ie, the Presidency) and have majority in the legislature (ie Parliament). <br><br>Beginning from this year’s election, we should let the political parties that field parliamentary candidates have the legislature, and elect a non-party backed candidate (in this case George Twum-Barimah-Adu) for the executive. <br><br>By Breaking the 2, the legislature will be a check on the executive and the executive will be a check on the legislature. And Ghana and Ghanaians will be better off.',
    backgroundColor: 'bg-[#009845]',
    textColor:'text-[#fff]'
  },
  {
    question: 'What made you decide to run for President?',
    answer: 'When I say Breaking The 2, I am talking about two things: <br>The first one is, breaking the foothold the two main known political parties, the NDC and the NPP, have had in Ghana’s politics over the last thirty-two years. <br><br> It is now clear more than ever, that after thirty-two years of the fourth republic both the NDC and the NPP have not been useful to Ghana. And until we extricate ourselves from the tyranny of these two non-performing conjoined twins, we shall continue to have Presidents who serve only their party and its supporters and not the totality of Ghanaians. A scenario which so far as we can see has taken our nation nowhere. <br><br>Secondly, when I say Breaking the 2, I am saying to Ghanaians that, together, we should not let the same party hold both the executive (ie, the Presidency) and have majority in the legislature (ie Parliament). <br><br>Beginning from this year’s election, we should let the political parties that field parliamentary candidates have the legislature, and elect a non-party backed candidate (in this case George Twum-Barimah-Adu) for the executive. <br><br>By Breaking the 2, the legislature will be a check on the executive and the executive will be a check on the legislature. And Ghana and Ghanaians will be better off.',
    backgroundColor: 'bg-[#BA2026]',
    textColor:'text-[#fff]'
  },
  {
    question: 'What makes you think you can Break the 2?',
    answer: 'It is not I who shall Break the 2. I cannot on my own Break the 2. God has already done it. He has heard the prayers of Mother Ghana. <br><br> Proverbs 21 verse 31 states that ‘The horse is prepared for the day of battle, But victory belongs to the LORD.”',
     backgroundColor: 'bg-[#b8ae59]',
     textColor:'text-[#fff]'
  },
  {
    question: 'What would be your key policy priorities that you will focus on when elected?',
    answer: "In conjunction with the Committees of Parliament, CSO’s, NDPC and interested stakeholders I will:<br><br> Commence the ‘Ghana First, Within Cost’ Policy by re-imagining, re-defining and re-purposing every sector of the economy (i.e., energy, tourism, mining, health, telecommunications, environment, education, agriculture, finance, IT, banking, construction, roads and transport, trade, procurement, local government, policing, law, culture and creatives, wages and salaries, national identity and identification, public order and security, contracts, power, taxation, etc.). This is to ensure that Ghana and Ghanaians benefit. It is within cost and Ghana is getting value for money.<br><br>Commence the implementation of my Manifesto, which is Chapter Six of the 1992 Constitution of the Republic of Ghana; to make democracy useful and meaningful to Ghanaians.<br><br>Tackle corruption by strengthening government agencies such as:<br>The Auditor-General’s Department.<br>CHRAJ.<br>Office of the Special Prosecutor (OSP).<br>EOCO; and<br>NIB.<br><br>Cut wastage in government to free funds for development, including the abolition of ex-gratia payments made to Article 71 office holders at the end of each tenure in office.<br><br>Introduce Domestic Direct Investment (DDI) with the view of securing jobs for qualified Ghanaians with improved wages & salaries.<br><br>Introduce District Contracts for the Youth to create employment and wealth for our youth and develop our local economy.<br><br>a. Repeal LI 2462, in respect of regulation concerning the ability to mine in forest reserves; and<br>b. Fight and win the battle against illegal mining, by providing alternative livelihoods such as carbon credit harvesting and legal industrial hemp industry to the youth in galamsey and other Ghanaians who want to venture into those areas.<br><br>Abolish E-Levy and introduce E-Sika.<br><br>Implement the 4-day work week.<br><br>Launch and support the Agric for Wealth program.<br><br>Extend and improve internet connectivity across the whole length and breadth of the country as it is vital for my digitalization agenda in areas such as financial inclusion, job creation, identification, delivery of quality education and healthcare, fight against corruption, revenue collection, etc.<br><br>Review of the 1992 constitution to ensure that it serves Ghana and Ghanaians better. Some areas for review will include:<br>Article 66: As former President Kufour said, Presidential term should move from 4 years to 5 years. It is difficult to complete what one wants to in four years. Moreover, as a nation having elections every four years is expensive for us.<br>Article 71: must be relooked, and a better method found. The practice where the president determines the salaries of the parliamentarians, and the parliamentarians determine that of the president (and is always done in secret) must be abolished. An independent committee of experts in salary determination must be set up to do that.<br>Article 78: Where Ministers of State are appointed from Members of Parliament should be abolished if we want parliament to be independent.<br>Articles 86 and 87: should be entrenched. This will provide Ghana with a comprehensive long-term Development Plan that is binding on all successive governments.<br>Article 88: The AG should not be a Minister of State. There must be a Minister of Justice (separate from the AG) who shall be a Minister of State and the principal legal advisor to the government. The search and appointment of an AG must be done by parliament, where the final vote shall be two-thirds of members of parliament approving the person.<br>Articles 89 to 92: The Council of State should be abolished. It is just a drain on the national purse.",
    
    backgroundColor: 'bg-[#b8ae59]',
    textColor:'text-[#fff]'
  },
  {
    question: 'What is your vision for Ghana?',
    answer: "Someone said, “it is not who we are but what we want to become.”<br><br>My vision, therefore, is for Ghana to become a country where:<br><br>Our leaders are selfless and serve the interest of the country and her citizens.<br><br>We have food security, and we can export the surplus.<br><br>Most Ghanaians own their own homes.<br><br>We are self-reliant, that we will not need to depend on foreign aid from other countries to survive.<br><br>The Ghanaian owns the key sectors of the economy, i.e.:<br>Banking<br>Finance<br>Telecommunications<br>Mining<br>Construction: civil and non-civil<br>Media<br>Manufacturing/Industry<br>Energy<br>Technology<br>Trade<br>Agriculture<br><br>Inflation is low as well as interest rates and that we have a strong and stable currency against other currencies.<br><br>We take care of our aged, pensioners and those who have served our country well.<br><br>Justice is delivered by our courts irrespective of who you are.<br><br>The police are well-resourced to provide the citizens with security and order; and<br><br>Our Armed Forces are well-resourced to protect and defend the territory of Ghana.<br><br>But most importantly what I want for Ghana is a country where one can choose to live anywhere in the country because:<br><br>The Local Government system there is working and effective.<br><br>The schools there are good and affordable. And the quality of education being offered is excellent.<br><br>The health facilities there are the best and affordable.<br><br>There is good, safe and affordable housing.<br><br>The roads are excellent, and the transport system is such that one need not spend so much time in traffic to get to where they want to go.<br><br>The environment is clean, tidy, less noisy and devoid of illegalities such as galamsey and animals (basically cattle) roaming the streets.<br><br>There is safe water, electricity, telephone, internet and they are reliable.<br><br>It is safe to move about and around anytime of the day and night because there is security everywhere and it is reliable.<br><br>Recreational, cultural, and tourist sites are available and well developed; and<br><br>There are good paying jobs.",
    backgroundColor: 'bg-[#009845]',
    textColor:'text-[#fff]'
  },
  {
    question: "How do you intend to govern since you don't have a party in parliament?",
    answer: "That is not a problem at all. The President represents the whole country and the constitution never said that a President should take ministers from his or her party only. It said it must take the majority of cabinet ministers from parliament. Therefore, I don’t need to have a party in parliament to be able to govern the country. The two are separate. All I need to be able to do as the constitution states, is to take my cabinet ministers, (a majority of them) from parliament. <br><br>So far as they are members of parliament, and they qualify, whether it is party A party B, C or D, I select my ministers from them and work with them as per the constitution.  They assist me in determining the general policy of government. I don’t need members of parliament to be members of my party to be able to govern. There has to be a parliament as per the constitution and there has to be an executive and it is for the executive to take from parliament to form the government to govern the nation.<br><br>And secondly, I intend to work closely with the committees of parliament in formulating Bills that will be sent to parliament for approval. So, with the committees of parliament involved from the onset and the final bill going to parliament for approval, it is easy for parliament to approve them because they were involved from the very beginning.<br><br>In fact, that is why we are saying to Ghanaians that we must “Break The Two.” Ghanaians must give the political parties, parliament and give the executive to a presidential candidate who is not party affiliated. When that happens, we will get a President who shall select his or her ministers from political parties with representation in parliament. And both the executive and parliament will be working for the betterment of Ghana and all Ghanaians.",
    backgroundColor: 'bg-[#000]',
    textColor:'text-[#fff]'
  },
];

const FAQ = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const faqIndex = searchParams.get('faq');
    if (faqIndex !== null && faqIndex < faqData.length) {
      openModal(faqData[faqIndex]);
    }
  }, [location]);

  const openModal = (faq) => {
    setSelectedFaq(faq);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedFaq(null);
  };

  return (
    <div className="min-h-screen bg-white pt-32">
      <header className="bg-[#BA2026] h-32 flex items-center px-4">
        <h1 className="text-white font-bold text-4xl">Frequently Asked Questions (FAQ)</h1>
      </header>
      <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md cursor-pointer ${faq.backgroundColor}`}
            onClick={() => openModal(faq)}
          >
            <h2 className={`text-xl font-canarobold uppercase ${faq.textColor}`}>{faq.question}</h2>
          </div>
        ))}
      </div>

      {selectedFaq && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="FAQ Modal"
          className="flex items-center justify-center p-4"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-2xl relative">
            <h2 className="text-2xl font-canarobold mb-4">{selectedFaq.question}</h2>
            <div className="h-[400px] overflow-y-auto">
              <div
                className="text-gray-600 font-canarobook"
                dangerouslySetInnerHTML={{ __html: selectedFaq.answer }}
              />
            </div>
            <div className="mt-4 flex justify-center">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-600 text-white font-canarobold rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default FAQ;