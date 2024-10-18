import React,{forwardRef} from 'react'

export const PoliciesSection =forwardRef(({
        ghanafirst,
        agricforWealthPic,
        ddi,
        esika,
        youth,
        fourDayPolicies,
        educationForAll,
        createWealth,
      },
      ref
    ) => {
  return (
    <div ref={ref}>
      <section className="flex flex-col items-start md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#B2444C] w-full">
        <img
          src={ghanafirst}
          alt="candidate"
          className="w-full h-auto max-w-xs md:max-w-md md:h-[400px]"
        />
        <div className="flex flex-col font-canarobook justify-center items-start w-full md:w-[40%] gap-3 p-5 bg-white relative">
          <h2 className="font-bold font-canarobold text-3xl text-[#b91f26] uppercase pb-5">
            1. GHANA FIRST WITHIN COST
          </h2>
          <p>
            Ghana First within Cost is one of presidential candidate George Twum-Barimah-Adu's policies.
          </p>
          <p>Under the auspices of the NDPC the policy will entail the:
            <ul className="list-disc list-inside">
                <li>Re-imagining;</li>
                <li>Re-defining; and</li>
                <li>Re-purposing</li>
            </ul>
          </p>
          <p>The current Growth Oriented Development (GOD) Model with its emphasis on economic growth to a more People Oriented Development (POD) Model with emphasis on both economic growth and people development.  
          </p>
          <br/>
          <p>
          A Ghana First Within Cost Policy will therefore ensure that policies and decisions taken, and contracts awarded by a Twum-Barimah-Adu administration, will answer the question: 
          <ul className="list-disc list-inside">
            <li>It is in the interest of Ghana and benefits Ghana?</li>
            <li>It is in the interest of the Ghanaian and benefits the Ghanaian? and</li>
            <li>It is within cost?</li>
          </ul>
          </p>
          <p>With Ghana Fisrt Within Cost, all decisions made, contracts signed, loans, grants and aids secured, and procurements made by my government will be in the interest and benefit of Ghana, improve the livelihood of the Ghanaian and be within cost.</p>
          <p>Fellow Ghanaians, Ghana First Within Cost is coming!</p>
        </div>
      </section>

      <section className="flex flex-col items-start md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#9B3A45] w-full">
        <img
          src={agricforWealthPic}
          alt="candidate"
          className="w-full h-auto max-w-xs md:max-w-md md:h-[400px]"
        />
        <div className="flex flex-col font-canarobook justify-center items-start w-full md:w-[40%] gap-3 p-5 bg-white relative">
          <h2 className="font-bold font-canarobold text-3xl text-[#b91f26] uppercase pb-5">
            2. AGRIC FOR WEALTH
          </h2>
          <p>
            Agric for Wealth is one of presidential candidate George Twum-Barimah-Adu’s policies.
          </p>
          <p>In consultation with the ‘relevant bodies’ in the ‘agriculture space’, the Policy’s aim is to ensure that Agriculture (in all its forms) is transformative.</p>
          <p>My government will prioritize agriculture to ensure that it is enriching to those who partake in it and agricultural outputs cheaper for those who purchase them.</p>
          <p>To this end Agric For Wealth will cover (but not limited to) the following areas:</p>
          <ul className="list-disc list-inside">
            <li>Cost of Finance</li>
            <li>Promoting Co-Operatives</li>
            <li>Inputs (eg. Chicks, Fertilizer, Feed, etc.)</li>
            <li>Machinery</li>
            <li>Seeds (Not GMO)</li>
            <li>Agric Extension Officers</li>
            <li>Irrigation</li>
            <li>Hydroponics</li>
            <li>Land Zoning</li>
            <li>Scientific Research (ie CSIR / Food Research Institute, Animal Husbandry etc.)</li>
            <li>Good Roads</li>
            <li>Solar Powered Climate-Controlled Warehouses</li>
            <li>Markets</li>
            <li>Exports</li>
            <li>Buffer Stock</li>
            <li>Industry</li>
            <li>School Feeding</li>
            <li>Wholesale Commercial Markets</li>
            <li>Retail Commercial Markets</li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col items-start md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#B2444C] w-full">
        <img
          src={ddi}
          alt="candidate"
          className="w-full h-auto max-w-xs md:max-w-md md:h-[400px]"
        />
        <div className="flex flex-col font-canarobook justify-center items-start w-full md:w-[40%] gap-3 p-5 bg-white relative">
          <h2 className="font-bold font-canarobold text-3xl text-[#b91f26] uppercase pb-5">
            3. DOMESTIC DIRECT INVESTMENT (DDI)
          </h2>
          <p>
            Every Ghanaian deserves the right to a decent job that for starters pays a ‘living wage’. To this end, it is important that local small, medium and large scale business and industries are supported. It is also important that local labour is re-trained to provide them with modern skills for jobs that are currently in demand. That is why I am introducing an investment policy called Domestic Direct Investments (DDI).
          </p>
          <p>Whilst Foreign Direct Investments (FDI) is fashioned to attract and promote foreign investments in the country, Domestic Direct Investment (DDI) does the opposite.</p>
          <p>This policy ensures that any Company set up in Ghana that sources (at least 70 per cent of) its raw materials in the production of its end product locally enjoys the same benefits as an FDI company, including lower taxes and other government incentives.</p>
          <p>By putting this policy in action, my government will build our local economy, reduce the weakness on the Ghana Cedi, create good paying jobs, be self-reliant and help free Ghana from foreign aid.</p>
          <p>Fellow Ghanaians Domestic Direct Investment (DDI) is coming!</p>
        </div>
      </section>

      <section className="flex flex-col items-start md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#9B3A45] w-full">
        <img
          src={esika}
          alt="candidate"
          className="w-full h-auto max-w-xs md:max-w-md md:h-[400px]"
        />
        <div className="flex flex-col font-canarobook justify-center items-start w-full md:w-[40%] gap-3 p-5 bg-white relative">
          <h2 className="font-bold font-canarobold text-3xl text-[#b91f26] uppercase pb-5">
            4. E-SIKA
          </h2>
          <p>
            E-Sika replaces E-Levy and is one of presidential candidate George Twum-Barimah-Adu’s policies.
          </p>
          <p>E-Sika is a savings scheme where anyone who pays for anything electronically (including MoMo) is deducted and the money deducted goes into the E-Sika Savings Account of the payer tied to his/her Ghana Card.</p>
          <p>E-Sika Savings Account will be divided in three parts:</p>
          <ul className="list-disc list-inside">
            <li>PENSION- To be paid as a lump sum to the individual upon attaining the age of 60yrs with all interest included. This pension will not be managed by SSNIT.</li>
            <li>HOUSING- To be used by the individual towards mortgage for his/her home.</li>
            <li>WELFARE- To be paid out to the individual every 12 months for the individual to use as he/she pleases.</li>
          </ul>
          <p>This policy is to ensure that all Ghanaians have pension, own a house and have money for their welfare.
            <br />
            With E-Sika, you spend, you save.
            <br />
            Fellow Ghanaians E-Sika is coming!
          </p>
        </div>
      </section>

      <section className="flex flex-col items-start md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#B2444C] w-full">
        <img
          src={youth}
          alt="candidate"
          className="w-full h-auto max-w-xs md:max-w-md md:h-[400px]"
        />
        <div className="flex flex-col font-canarobook justify-center items-start w-full md:w-[40%] gap-3 p-5 bg-white relative">
          <h2 className="font-bold font-canarobold text-3xl text-[#b91f26] uppercase pb-5">
            5. DISTRICT CONTRACTS FOR THE YOUTH
          </h2>
          <p>
            District Contracts for the Youth (DCY) is one of presidential candidate George Twum-Barimah-Adu’s policies.
          </p>
          <p>This policy ensures that contracts that are to be executed by the Government through the District Assemblies are awarded to qualified youths who live in the District.</p>
          <p>This policy will;</p>
          <ul className="list-disc list-inside">
            <li>Grow the local economy,</li>
            <li>Retain wealth in the district,</li>
            <li>Create wealth amongst the youth in every district in Ghana; and</li>
            <li>Prevent the youth from migrating from poorer districts to richer districts.</li>
          </ul>
          <p>Fellow Ghanaians District Contracts for the Youth, is coming.</p>
        </div>
      </section>

      <section className="flex flex-col items-start md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#B2444C] w-full">
        <img
          src={educationForAll}
          alt="candidate"
          className="w-full h-auto max-w-xs md:max-w-md md:h-[400px]"
        />
        <div className="flex flex-col font-canarobook justify-center items-start w-full md:w-[40%] gap-3 p-10 bg-white relative">
          <h2 className="font-bold font-canarobold text-3xl text-[#b91f26] uppercase pb-5">
          6. QUALITY EDUCATION 4 ALL
          </h2>
          <p>
          Quality Education 4 All is one Presidential Candidate George Twum-Barimah-Adu’s policies. 
          </p>
          <p>In consultation with the ‘relevant bodies’ in the ‘educational space’, the Policy’s aim, is to ensure that all students across the country get the same first-class quality education; irrespective of the area they live, their background and/or the level of their parents’ income.</p>
          <p>This will be achieved through:</p>
          <ul className="list-disc">
            <li>Digitization</li>
            <li>Construction of smart school enclaves in communities in every district; and</li>
            <li>Re-evaluation of the educational curriculum to ensure that students are critical thinkers, entrepreneurs and innovators.</li>
          </ul>
          <p>The Smart School Enclaves which will cover from Kindergarten to SHS 3, will have and entail the following:</p>
          <ol className="list-decimal">
            <li>Facilities that qualify a school to be classified as a “Smart School”, including fast, stable and cheap internet connectivity.</li>
            <li>All teaching will be online. Same first-class quality teacher teaching a subject (eg Math) being piped at the same time to all students in the region through the internet.</li>
            <li>Teachers in the classroom will assist with homework and when the student has a question on the subject being taught; etc.
            </li>
            <li>Learning materials and teaching materials will be online.</li>
            <li>Schools will be on large acres of land that will have the following:
            <ul className="list-disc list-inside">
            <li>Fully walled compound.</li>
            <li>Living quarters for teachers.</li>
            <li>Dining and kitchen facilities for students.</li>
            <li>Library</li>
            <li>Convenient shop for teachers and students.</li>
            <li>School farm comprising all aspects of agriculture to aid in the practical teaching of agriculture in schools.</li>
            <li>Healthcare facility with a pharmacy to be manned by a qualified health officer and a qualified pharmacist. The healthcare facility will be designed such that the community will be able to access it, however the students will always have priority at all times</li>
            <li>Own supply of treated water from boreholes</li>
            <li>Solar power generation to ensure that the schools don’t depend on national grid.</li>
            <li>Boarding facilities for students from age 12.</li>
          </ul>
            </li>
          </ol>
          <p>Quality Education 4 All, will also include:</p>
          <ol className="list-decimal">
            <li>Re-training of teachers on the Smart School system</li>
            <li>Re-evaluation of teacher salaries, conditions of service, and housing; etc.</li>
            <li>Complete review of the whole curriculum program.</li>
            </ol>
        </div>
      </section>
      <section className="flex flex-col items-start md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#9B3A45] w-full">
        <img
          src={createWealth}
          alt="candidate"
          className="w-full h-auto max-w-xs md:max-w-md md:h-[400px]"
        />
        <div className="flex flex-col font-canarobook justify-center items-start w-full md:w-[40%] gap-3 p-5 bg-white relative">
          <h2 className="font-bold font-canarobold text-3xl text-[#b91f26] uppercase pb-5">
           7. CREATE FOR WEALTH
          </h2>
          <p>
          As a people we are created by God with varying degrees of talent, some creative, some industrial, some social, some technological and some entrepreneurial just to name a few. 
          </p>
          <p>Culture, <strong className='font-canarobold'>CRE</strong>ative <strong className='font-canarobold'>A</strong>rts, <strong className='font-canarobold'>T</strong>ourism and <strong className='font-canarobold'>E</strong>vents ,<strong className='font-canarobold'>(CREATE FOR WEALTH)</strong> is a policy of Presidential Candidate George Twum-Barimah-Adu for the Cultural, Creative Arts, Tourism and Events Industry.  The Policy is meant to assist those in the CREATE industry to make wealth from their talent and work.</p>

          <p><strong className='font-canarobold'>CREATE FOR WEALTH</strong> will tackle the following areas:</p>
          <br />
          <p className='font-canarobold'>a. TOURISM AND CULTURE INDUSTRY</p>
          <p>A Twum-Barimah-Adu administration will move the center of the Creative, Cultural, Tourism and Events industry from Accra to each Region under the Regional Minister. This is because tourist sites are in the regions/districts and cultural festivals like: Homowo, Ohum, Aboakyir, Odwira, Yam, Fetu Afahye, Akwambo, Hogbetsosto, Akwasidae, Damba, Bakatue etc.  held by our traditional chiefs takes place in the regions/districts. In partnership with locals and subjects who hail from the area and the traditional chiefs, these festivals will be staged as cultural events tied to tourism in the region/districts the festivals are being held in. My administration will assist and support all Regional Administrations to:
            <ol className='list-decimal list-inside'>
                <li>Re-tool and resource all regional culture and tourism offices.</li>
                <li>In partnership with the private and traditional sector, as well as locals and subjects that hail from the area, enhance all tourist sites and roads leading to them in the regions/districts to international standards. </li>
                <li>Promote and tie tourism in the region/district to the traditional festivals calendar.</li>
                <li>Develop regional and districts recreational parks and gardens around cultural and museum sites.</li>
                <li>Support the establishment of regional and traditional museums to capture and showcase the culture, traditions and history of the people and their Chiefs. </li>
            </ol>
          </p>

          <br/>

          <p className='font-canarobold'>b. CREATIVE ARTS INDUSTRY</p>
          <p>A Twum-Barimah-Adu administration will put in places measures and systems to help those with creative talents to earn a living from their talent and for that matter contribute to the development of the country.
          A Twum-Barimah-Adu administration will construct in each region a Regional Cultural, Creative Arts and Events Park (The Park). The Park will have:
          <ul className='list-decimal list-inside'>
                <li>A Regional Theater for the showcase of theater.</li>
                <li>A Regional Museum and Gallery Center. Whilst the museum will capture and showcase the culture, traditions, customs and history of the region and the various traditional areas and chiefs that make-up the region, the Gallery will provide a commercial outlet for photographers, artist and sculptors (whether wood, glass, metal or stone) to exhibit their creative work for sale; and </li>
                <li>A Regional Recreational and Garden Center which will host family outings, entertainment and events.</li>
            </ul>
            </p>

            <br/>

            <p className='font-canarobold'>MUSICIANS/ARTISTS</p>
            <p>A Twum-Barimah-Adu administration will explore and put in place a local music streaming platform to aid the monetization of music created by artist in the music industry. In this case, all parties including radio stations, clubs, bars, DJ’s etc. who want to play a particular song of an artist will have to go to the site and stream from there. This eliminates any third-party player like GHAMRO taking part of an artist’s money. Government will charge a small percentage of each money made by the artist for maintenance of the site and tax to government. </p>

            <br/>

            <p className='font-canarobold'>CALLER RING BACK TONES (CRBT)</p>
            <p>A Twum-Barimah-Adu government will also ensure that musicians get a fair percentage from the telcos in respect to Caller Ring Back Tones (CRBT). Including telcos compensating artist for the performance rights of their creations.</p>

            <br/>

            <p className='font-canarobold'>c. COPYRIGHT LAW</p>
            <p>My government will also review the copyright law in respect to the creative industry and strengthen any section(s) that needs to be strengthened and repeal any section(s) that are inimical to the creative industry.</p>


        </div>
      </section>

      <section className="flex flex-col items-start md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#9B3A45] w-full">
        <img
          src={fourDayPolicies}
          alt="candidate"
          className="w-full h-auto max-w-xs md:max-w-md md:h-[400px]"
        />
        <div className="flex flex-col font-canarobook justify-center items-start w-full md:w-[40%] gap-3 p-5 bg-white relative">
          <h2 className="font-bold font-canarobold text-3xl text-[#b91f26] uppercase pb-5">
            8. 4-DAY WORK WEEK
          </h2>
          <p>
            A 4-day work week (termed: Work and Happiness) is one of Presidential Candidate George Twum-Barimah-Adu’s policies.
          </p>
          <p>In consultation with the ‘relevant bodies’ in the ‘employment and labour space’, the Policy’s aim, is to introduce a 4-day work week - from Monday to Thursday.  Monday to Thursday is for the employer and Friday to Sunday is for the employee.</p>

          <p>This policy is not only meant to boost productivity but also give the average worker a longer weekend for personal work, rest and family time.</p>
          <br />
          <p>Fellow Ghanaians, Work and Happiness is coming!</p>
        </div>
      </section>
      </div>
  )
});
