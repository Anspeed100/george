import React,{forwardRef} from 'react'

export const PoliciesSection =forwardRef(({
        ghanafirst,
        agricforWealthPic,
        ddi,
        esika,
        youth,
        fourDayPolicies,
        educationForAll,
      },
      ref
    ) => {
  return (
    <div ref={ref}>
      <section className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#B2444C] w-full">
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
          <p>Under the auspices of the NDPC the policy will entail the:</p>
          <p>Re-imagining;<br />
            Re-defining; and<br />
            Re-purposing<br />
            of every sector of the economy to ensure that:<br />
            It is in the interest of Ghana and benefits Ghana<br />
            It is in the interest of the Ghanaian and benefits the Ghanaian; and<br />
            It is within cost
          </p>
          <p>With Ghana Fisrt Within Cost, all decisions made, contracts signed, loans, grants and aids secured, and procurements made by my government will be in the interest and benefit of Ghana, improve the livelihood of the Ghanaian and be within cost.</p>
          <p>Fellow Ghanaians, Ghana First Within Cost is coming!</p>
        </div>
      </section>

      <section className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#9B3A45] w-full">
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

      <section className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#B2444C] w-full">
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

      <section className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#9B3A45] w-full">
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

      <section className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#B2444C] w-full">
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

      <section className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#9B3A45] w-full">
        <img
          src={fourDayPolicies}
          alt="candidate"
          className="w-full h-auto max-w-xs md:max-w-md md:h-[400px]"
        />
        <div className="flex flex-col font-canarobook justify-center items-start w-full md:w-[40%] gap-3 p-5 bg-white relative">
          <h2 className="font-bold font-canarobold text-3xl text-[#b91f26] uppercase pb-5">
            6. 4-DAY WORK WEEK
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

      <section className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#B2444C] w-full">
        <img
          src={educationForAll}
          alt="candidate"
          className="w-full h-auto max-w-xs md:max-w-md md:h-[400px]"
        />
        <div className="flex flex-col font-canarobook justify-center items-start w-full md:w-[40%] gap-3 p-10 bg-white relative">
          <h2 className="font-bold font-canarobold text-3xl text-[#b91f26] uppercase pb-5">
          7. QUALITY EDUCATION 4 ALL
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
      </div>
  )
});
