import RouteLink from "@/app/Components/RouteLink";

export const Televised = () => {
  const content = [
    { title: "Celebrity Crashes", body: ", ReelzTV, aired 2017" },
    {
      title: "Using Bio-Mechanics to Assess Injuries from Tornadoes",
      body: ", Tornado Alley, Weather Channel, 2015 series",
    },
    {
      title: "RTTV - Russia Today TV – ",
      body: "April 18, 2013,“Explosion in West, Texas”",
    },
    {
      title: "Emergency Preparedness and Response: ",
      body: "The Big One, NBC News, aired 1987",
    },
    {
      title: "Responding to Nuclear Waste Cleanup ",
      body: "Educational Cable Television, aired 1992",
    },
    {
      title: "",
      body: "Approximately 150 news appearances on television and radio from 1980 through the present",
    },
    {
      title: "Primary topics: Nuclear power plant safety",
      body: ", weapons nonproliferation, anti-terrorism",
    },
  ];

  return (
    <>
      {content.map((c, i) => (
        <li key={c.title + "_" + i}>
          <span className="italic">{c.title}</span>
          {c.body}
        </li>
      ))}
    </>
  );
};

export const Books = () => {
  const content = [
    {
      title:
        "Defining the Criteria for Air Bag Activation in Passenger Vehicles, ",
      body: "published by Lambert Academic Publishing, authored by Kenneth A. Solomon and Wei-Kuang Chao, 2015, Book",
    },
    {
      title: "Selected Topics in Biomechanical Injuries, ",
      body: "published by Lambert Academic Publishing, authored by Kenneth A. Solomon and Anne J. Yatco, 2014, Book",
    },
    {
      title: "The Aquatic Compendium, ",
      body: "published by The National Swimming Pool and Spa Foundation, co-authored by Kenneth A. Solomon, 2006, Book",
    },
    {
      title: "Limiting the Spread of Weapon-Usable Fissile Materials, ",
      body: "Brian G. Chow, Kenneth A. Solomon, sponsored by The United States National Defense Research Institute, January 1993, Book",
    },
    {
      title:
        "Dealing With Uncertainty Arising Out of Probabilistic Risk Assessment, ",
      body: "Kenneth A. Solomon, sponsored by Oak Ridge National Laboratory, September 1983, Paperback",
    },
    {
      title:
        "Risk-Cost Assessment Methodology for Toxic Pollutants from Fossil Fuel Power Plants, ",
      body: "Rand Corporation, Kenneth A. Solomon, J.G. Bolten, sponsored by Electric Power Research Institute, P. F. Morrison, January 1983, Paperback",
    },
    {
      title:
        "Monitoring Technologies for Ocean Disposal of Radioactive Waste, ",
      body: "published by The Rand Corporation, Kenneth A. Solomon, Mark B. Triplett, January 1982, Book",
    },
    {
      title: "Issues and Problems in Inferring a Level of Acceptable Risk, ",
      body: "published by The Rand Corporation, Kenneth A. Solomon, Steven L. Salem, Michael S. Yesley, January 1980, Book",
    },
    {
      title:
        "Away-From-Reactor Storage of Spent Nuclear Fuel: Factors Affecting Demand, ",
      body: "sponsored by The U.S. Department of Energy, Kenneth A. Solomon, Patricia M. Dinneen, Mark B. Triplett, January 1980, Book",
    },
    {
      title:
        "The Index of Harm: A Measure for Comparing Occupational Risk across Industries, ",
      body: "sponsored by The Electric Power Research Institute, Kenneth A. Solomon, Stanley Charles Abraham, January 1979, Book",
    },
    {
      title: "International Arrangements for Uranium Enrichment, ",
      body: "Marvin Miller, Kenneth A. Solomon, Michael Mihalka, sponsored by The U.S. Department of Energy, January 1979, Book",
    },
    {
      title:
        "Nuclear Reactor Spent Fuel Valuation: Procedure, Applications, and Analysis, ",
      body: "Kenneth A. Solomon, sponsored by The U.S. Department of Energy, January 1978, Book",
    },
    {
      chapter:
        "“A Comparison of Risks In and Around Swimming Pools,” Chapter in ",
      title: "Aquatic Safety Compendium, ",
      body: "Jan. 2005, sponsored by the National Swimming Pool Foundation",
    },
    {
      chapter: "“The Mechanics of Diving” Chapter in",
      title: "Aquatic Safety Compendium, ",
      body: "Jan. 2005, sponsored by the National Swimming Pool Foundation, DVD Format",
    },
    {
      chapter:
        "“A Value Impact Method for Improving Automotive Safety” Chapter in ",
      title: "Automotive Safety and Litigation, Vol. I, ",
      body: "Garland Press, New York, December 1983",
    },
    {
      chapter:
        "“Improving Automotive Safety: The Role of Industry, Government, and Driver” Chapter in ",
      title: "Risk Assessment & Management, Vol. 5, ",
      body: "Plenum Press, New York, 1987",
    },
    {
      chapter:
        "“A Value Impact Approach for Regulatory Decision Making” Chapter in  ",
      title: "Risk Assessment & Management, Vol. 5, ",
      body: "Plenum Press, New York, 1987",
    },
    {
      title: "Journal of Hazardous Materials, ",
      body: "Special Issue on Risk Assessment & Management, Vol. 10 1985",
    },
    {
      title: "Journal of Hazardous Materials, ",
      body: "Special Issue on Risk Regulation, May 1987",
    },
    {
      title: "Journal of Hazardous Materials, ",
      body: "Special Issue on Legislative Issues, June 1988",
    },
  ];

  return (
    <>
      {content.map((c, i) => (
        <li key={c.title + "_" + i}>
          {c.chapter && c.chapter}
          <span className="font-extrabold text-gray-500">{c.title}</span>
          {c.body}
        </li>
      ))}
    </>
  );
};

export const RAND = () => {
  const content = [
    {
      title: "Warnings: When do they help; When do they harm? ",
      body: "RAND P-7892, Feb., 1995",
    },
    {
      title: "Limiting the Spread of Weapons-Usable Fissile Materials, ",
      body: "RAND-346-UDDP, 1994",
    },
    {
      title: "An Assessment of The Defense Nuclear Agency Functions, ",
      body: "RAND, 1995",
    },
    {
      title:
        "Plutonium for Japan’s Nuclear Reactor’s: Paying Both the Proliferation and Dollar Price to Assure Long-Term Fuel Supply, ",
      body: "RAND MR-186-CC, March 1993.",
    },
    {
      title: "Limiting The Spread of Weapon-Usable Fissile Materials, ",
      body: "RAND, MR-346-USDP, November 1993",
    },
    {
      title:
        "Airport Growth and Safety: A Study of the External Risks of Schiphol Airport and Possible Safety-Enhancement Measures, ",
      body: "RAND, MR-288-EAC/VW, 1993",
    },
    {
      title:
        "Airport Growth and Safety: Executive Summary of the Schiphol Project, ",
      body: "RAND, MR-297-EAC/VW, 1993",
    },
    {
      title:
        "Swimming Pool Risks: How Do They Compare to Other Accidental Risks? ",
      body: "RAND P-7841, November 1993",
    },
    {
      title: "Alternative Sources of Tritium, ",
      body: "RAND, MR-205-ACQ, April 1993",
    },
    { title: "DoD Spectrum Management Program, ", body: "DRR-602-C3I" },
    {
      title: "Power Options for Space Exploration, ",
      body: "a talk presented to the American Nuclear Society, Los Angeles, Sept 1992",
    },
    {
      title:
        "An Assessment of Deep Fires Alternatives in Third World Countries, ",
      body: "RAND Report, 1992",
    },
    {
      title:
        "Preliminary Thoughts Concerning Potential U.S. Army Threats/Roles, ",
      body: "P-7697-A, June 1991",
    },
    {
      title:
        "Comprehensive Self-Study Report submitted to the Western Association of Schools and Colleges in Support of an Application for Reaffirmation of Accreditation, ",
      body: "co-authored by a nine person Steering Committee of RGS Faculty and RAND Management, January 1990",
    },
    {
      title: "SEI Project Outreach Evaluations: Space and Surface Power, ",
      body: "N-3280-AF/NASA, June 1991",
    },
    {
      title:
        "An “Adequate Insurance” Appraisal to Critical Dependencies of the Department of Defense, ",
      body: "R-3880-USDP, July 1991",
    },
    {
      title: "Generating Tritium in Civilian Nuclear Reactors, ",
      body: "The RAND Corporation, N-3203-ACQ, December 1990",
    },
    {
      title: "A Primer on the Production and Use of Tritium, ",
      body: "The RAND Corporation, N-3201-ACQ, November 1990",
    },
    {
      title:
        "Risks to the Civilian Population from the Use of Biological Weapons by Terrorists Groups, ",
      body: "N-2776-AFMIC, June 1989",
    },
    {
      title:
        "Risks to Air Force Bases from the Use of Biological Weapons by Terrorists Groups, ",
      body: "N-2777-AF, June 1989",
    },
    {
      title: "Measuring Safety Across Industries, ",
      body: "The RAND Corporation, P-7405, Nov 1988",
    },
    {
      title: "Ground Risk Associated With Aircraft Crashes, ",
      body: "The RAND Corporation, P-7459, Nov 1987",
    },
    {
      title: "Issues in Swimming Pool Design and Diving Safety, ",
      body: "The RAND Corporation, P-7370, Nov 1987",
    },
    {
      title:
        "Risk Management Practices at the Local, State, and Federal Level, ",
      body: "The RAND Corporation, P-7263, Nov 1986",
    },
    {
      title: "Sources of Radioactivity in the Ocean Environment, ",
      body: "The RAND Corporation, P-7273, October 1986",
    },
    {
      title: "Alternative Models for Risk Assessment of Toxic Emissions, ",
      body: "The RAND Corporation, N-2261-EPRI, April 1985",
    },
    {
      title:
        "Improving Automotive Safety: The Role of the Industry, the Government, and the Driver, ",
      body: "The RAND Corp., P-7069, July 1985 ",
    },
    {
      title:
        "Review of Four Analyses Estimating the Emergency Planning Zones (EPZs) for the Shoreham Nuclear Reactor, ",
      body: "The RAND Corporation, N-2353-DOE, August 1985 ",
    },
    {
      title:
        "Dealing With Uncertainty Arising out of Probabilistic Risk Assessment, ",
      body: "The RAND Corporation, R-3045-ORNL, Sept 1983 ",
    },
    {
      title:
        "Risk-Cost Assessment Methodology for Toxic Pollutants from Coal-Fired Plants, ",
      body: "The RAND Corporation, R-2993-EPRI, June 1983",
    },
    {
      title: "Risk-Management Practices in Local Communities, ",
      body: "The RAND Corporation, P-6821, October 1982 ",
    },
    {
      title: "Total Cost Estimates for Closing Indian Point, ",
      body: "The RAND Corporation, P-6822, September 1982 ",
    },
    {
      title: "An Evaluation of Alternative Safety Criteria, ",
      body: "The RAND Corporation, N-1806-ORNL, June 1982 ",
    },
    {
      title:
        "Preliminary Survey Of Risk and Safety Offerings at Selected Universities, ",
      body: "The RAND Corporation, P-6762, June 1982",
    },
    {
      title: "Estimating The Cost of Closing Down a Nuclear Reactor, ",
      body: "The RAND Corporation, R-2857-NYO, Dec 1981",
    },
    {
      title:
        "Monitoring Technologies For Ocean Disposal of Radioactive Waste, ",
      body: "The RAND Corporation, R-2773-NOAA, Dec 1981",
    },
    {
      title: "Scenarios for Evolution of Air Traffic Control, ",
      body: "The RAND Corporation, R-2698-FAA, November 1981 ",
    },
    {
      title:
        "The High Temperature Gas Cooled Reactor: An Overview of Safety Issues, ",
      body: "The RAND Corporation, N-1589-GCRA, December 1980",
    },
    {
      title:
        "Away from Reactor Storage and Disposal of Spent Nuclear Fuel: Factors Affecting Demand, ",
      body: "The RAND Corporation, R-2558-DOE, August 1980",
    },
    {
      title:
        "Summary of Issues and Problems in Inferring a Level of Acceptable Risk, ",
      body: "The RAND Corporation, P-6519, July 1980 ",
    },
    {
      title: "Issues and Problems in Inferring a Level of Acceptable Risk, ",
      body: "The RAND Corporation, R-2561-DOE, July 1980 ",
    },
    {
      title:
        "Some Implications of the Three Mile Island Accident on LMFBR Safety and Licensing: The Design Basis Issue, ",
      body: "The RAND Corporation, N-1559-DOE, July 1980",
    },
    {
      title:
        "The Index of Harm: A Measure for Comparing Occupational Risk Across Industries, ",
      body: "The RAND Corporation, R-2409-RC, June 1979 ",
    },
    {
      title:
        "Anticipated Transients Without SCRAM for Light Water Reactors: Implica­tions For Liquid Metal Fast Breeder Reactors, ",
      body: "The RAND Corporation, N-1188-DOE, June 1979",
    },
    {
      title: "International Arrangements for Uranium Enrichment, ",
      body: "The RAND Corporation, R-2427-DOE, May 1979 ",
    },
    {
      title:
        "Valuation of Nuclear Reactor Spent Fuel Using the HP 67/97 Programmable Calculator, ",
      body: "The RAND Corporation, N-1176-DOE, April 1979",
    },
    {
      title: "Procedure for Nuclear Reactor Spent Fuel Valuation, ",
      body: "The RAND Corporation, P-6240, November 1978",
    },
    {
      title:
        "More on Insurance and Catastrophic Events: Can We Expect De Facto Limits on Liability Recoveries? ",
      body: "The RAND Corporation, P-5940, March 1978",
    },
    {
      title:
        "Nuclear Reactor Spent Fuel Valuation: Procedure, Application and Analysis, ",
      body: "The RAND Corporation, R-2239-DOE, February 1978",
    },
    {
      title:
        "Seismic Building Codes for the City of Los Angeles: A Brief Case Study, ",
      body: "The RAND Corporation, P-60l8, November 1977",
    },
    {
      title: "Some Comments on De Facto Limits of Liability, ",
      body: "P-5885 The RAND Corporation, June 1977",
    },
    {
      title: "The Light Water Reactor: Development and Commercialization, ",
      body: "The RAND Corporation, R-2l80-NSF, May 1977",
    },
  ];

  return (
    <>
      {content.map((c, i) => (
        <li key={c.title + "_" + i}>
          <span className="italic">{c.title}</span>
          {c.body}
        </li>
      ))}
    </>
  );
};

export const Articles = () => {
  const content = [
    {
      chapter: "“Air Bag Deployment Criteria,”",
      title: "The Journal of The Forensic Examiner, ",
      body: "August 2014",
      link: "",
    },
    {
      chapter:
        "“Shoulder Injury Mechanisms and Integrative Medicine Therapies,” ",
      title: "Journal of the American Association of Integrated Medicine, ",
      body: "August 2014, ",
      link: "http://www.aaimedicine.com/blog/2014/08/shoulder-injury-mechanismsand-integrative-medicine-therapies",
    },
    {
      chapter: "“Ankle Injury Mechanisms and Integrative Medicine Therapies,” ",
      title: "Annals of the American Psychotherapy Association, ",
      body: "Winter 2012 Spring 2013, pages 54 to 61",
      link: "",
    },
    {
      chapter: "",
      title: "Effective Examination of the Expert, ",
      body: "CLE Authority (MCLE), Pasadena CA. Video Instruction, 2007",
      link: "",
    },
    {
      chapter: "",
      title: "Types of Knee Injuries & How They Occur, ",
      group: "Journal of Forensics",
      body: ", Spring 2005",
      link: "",
    },
    {
      title: "The Threat of Global Nuclear Terrorism, ",
      pregroup: "Presented at the ",
      group: "International Society of Probabilistic Risk Analysis",
      body: ", at UCLA in May 2001",
    },
    {
      title: "How Much Plutonium Do We Need: A Case Study - Japan.,  ",
      body: "International Journal of Hazardous Material,44 (November 1995) pp1-23",
    },
    {
      title: "Risks to Workers on the Ground from Aircraft Crashes, ",
      group: "Journal of Occupational Accidents",
      body: "; 1989",
    },
    {
      title: "A Comparison of Occupational Risks Among Industries, ",
      group: "Journal of Occupational Accidents",
      body: "; Vol. 11, pp 19-35, 1989",
    },
    {
      title: "Radiation in the Ocean Environment,  ",
      group:
        "Special Issue on Risk Management of the Journal of Hazardous Materials",
      body: " June 1988",
    },
    {
      title:
        "Estimating the Population Exclusion Zone Around a Nuclear Reactor,  ",
      group:
        "Special Issue on Risk Management of the Journal of Hazardous Materials",
      body: " 1988",
    },
    {
      title:
        "Alternative Risk Management Practices at the Local, State, and Federal Level of Government, ",
      group:
        "Special Issue on Risk Management of the Journal of Hazardous Materials",
      body: " Vol. 15- No.1, May 1987",
    },
    {
      title:
        "Guest Editorial and Introductory Paper on Risk Regulation and Legislation, ",
      group:
        "Special Issue on Risk Management of the Journal of Hazardous Materials",
      body: " March 1987",
    },
    {
      title:
        "Comparing Alternative Strategies for Improving Automotive Safety, ",
      group: "Proceedings of the International Society of Risk Analysis",
      body: " meeting held in Washington, D.C., September 1986",
    },
    {
      title: "Value Impact Assessment for Regulatory Decision Making, ",
      group: "Proceedings of the International Society of Risk Analysis",
      body: " meeting held in Washington, September 1986",
    },
    {
      title: "On the Use of Confidence Intervals in Risk Management, ",
      group: "Journal of Hazardous Materials",
      body: ", (10) 1985",
    },
    {
      title: "Selecting An Optimal Strategy for a Safer Automobile, ",
      pregroup: "invited paper presented to the ",
      group: "Society for Risk Analysis",
      body: ", Annual Meeting, Washington, DC, October 1985, and printed in the meeting proceedings",
    },
    {
      title:
        "A Survey of Monitoring Requirements for Sub-Seabed Disposal of Radioac­tive Waste, ",
      group: "Journal of Hazardous Materials",
      body: ", (10) 1985, pp. 205-226",
    },
    {
      title:
        "An Evaluation of Alternative Safety Criteria for Nuclear Power Plants, ",
      group: "Journal of Risk Analysis",
      body: ", Vol. 5, No. 3, 1985",
    },
    {
      title:
        "An Examination of Risk Management at the Local Level of Government",
      pregroup: ", invited paper to ",
      group: "Journal of Hazards Prevention",
      body: ", July/August 1985, pp. 12-15",
    },
    {
      title: "Dealing With Reliability and Risk Analysis at the Local Level, ",
      group: "Journal of Policy Science",
      body: ", Vol. 16, 1984, pp. 245-265",
    },
    {
      title: "De Facto Liability Limits: Another Look",
      pregroup: ", invited paper,  ",
      group: "Journal of Hazard Prevention",
      body: " September 1984",
    },
    {
      title: "Risk Management in Local Communities, ",
      group: "Journal of Hazard Prevention",
      body: ", July/August 1984",
    },
    {
      title:
        "How Unique Are the Price Anderson Limitations on Nuclear Accident Liability? ",
      group: "Journal of Risk Analysis",
      body: ", Vol. 3, No. 1, December 1983",
    },
    {
      title: "Making Decisions Under Uncertainty",
      pregroup: ", paper presented at ",
      group: "American Nuclear Society",
      body: ", Detroit, MI, June 1983",
    },
    {
      title:
        "Cost of Closing Nuclear Plants: Involuntary vs. Voluntary Closure",
      pregroup: ", invited paper at ",
      group: "American Physics Society",
      body: ", Los Angeles, CA, March 1983",
    },
    {
      title:
        "Quantitative Safety Goals Through More Adequate Risk Management and Risk Assessment, ",
      group: "Journal of Reliability Engineering",
      body: " Vol. 4, No. 2, February 1983, pp. 65-84",
    },
    {
      title: "Energy for the Future: Facing Radiation Protection Issues",
      pregroup: ", invited paper at ",
      group: "WATTec National Energy Conference",
      body: ", Knoxville, TN, February 1983",
    },
    {
      title: "Issues in Perceiving Risk",
      pregroup: ", an invited paper at the ",
      group: "Health Physics Society",
      body: ", Annual Meeting, Knoxville, TN, February, 1983",
    },
    {
      title: "Courses Offered in Risk Analysis",
      pregroup: ", invited paper presented at the ",
      group: "Interna­tional Society of Risk Analysis",
      body: ", June 1982 Meeting in Crystal City, VA",
    },
    {
      title:
        "Assessing the Cost of Closing Down a Nuclear Power Plant: Method and Application",
      pregroup: ", presented at the November 1982 Meeting of the ",
      group: "American Nuclear Society",
      body: ", Washington, D.C.",
    },
    {
      title: "Issues In Risk Acceptance",
      pregroup: ", presented at ",
      group: "Reliability 1981 Conference",
      body: ", England, May 1, 1981",
    },
    {
      title:
        "The Index of Harm: A Useful Measure for Comparing Occupational Risks Across Industries, ",
      group: "Journal of Health Physics",
      body: ", Vol. 38, March 1980, 375-381",
    },
    {
      title: "A Procedure for Calculating the Value of Spent Fuel",
      pregroup: ", Transactions, ",
      group:
        "Joint Meeting of the European Nuclear Society and the American Nuclear Society",
      body: " Hamburg, West Germany, May 1979",
    },
    {
      title: "Spent Reactor Fuel: Policy Implications",
      pregroup: ", Transactions, 1978 Winter Meeting of the ",
      group: "American Nuclear Society",
      body: ", Washington, D.C., November",
    },
    {
      title: "Liability Limits and Insurance, ",
      group: "Hazard Prevention",
      body: ", Vol. 14, No. 5, May/June 1978",
    },
    {
      title: "Power Plant Siting and Aircraft Hazards",
      pregroup: ", Transactions,  ",
      group: "ANS/CNS",
      body: " Meeting, Toronto, Canada, June 1976",
    },
    {
      title: "Optimal Inspection of Pressure Vessel Welds",
      pregroup: ", Transactions,  ",
      group: "ANS/CNS",
      body: " Meeting, Toronto, Canada, June 1976",
    },
    {
      title: "Analysis of Ground Hazards Due to Aircraft and Missiles, ",
      group: "Hazard Prevention",
      body: ", Vol. 12, No. 4, March/April 1976",
    },
    {
      title: "Pressure Vessel Weld Integrity, ",
      group: "Nuclear Engineering and Design",
      body: ", Vol. 25, December 1975",
    },
    {
      title: "Reliability of the Core Auxiliary Cooling System, ",
      group: "Nuclear",
      body: ",  Vol. 34, No. 3, November 1975",
    },
    {
      title:
        "Additional Comments on Estimate of Hazards to a Nuclear Reactor from the Random Impact of Meteorites, ",
      group: "Nuclear Technology",
      body: ", Vol. 27, No. 2, November 1975",
    },
    {
      title: "Weld Inspection Procedures",
      pregroup: ", Transactions ",
      group:
        "Third International Conference on Structural Mechanics in Reactor Technology (SMIRT)",
      body: ", London Imperial College, September 1975",
    },
    {
      title: "CACS Reliability in the HTGR, ",
      group: "Transactions ANS Conference",
      body: ", New Orleans, Louisiana, June 1975",
    },
    {
      title: "Risk of the Chemical Industry, ",
      group: "Hazard Prevention",
      body: ", Vol. 11, No. 5, May/June 1975",
    },
    {
      title: "Airplane Crash Model, ",
      group: "Hazard Prevention",
      body: ", Vol. 11, No. 3, January/February 1975",
    },
    {
      title:
        "Estimates of Hazards to Nuclear Reactors from Random Impact of Meteorites, ",
      group: "Nuclear Technology",
      body: ", January 1975",
    },
    {
      title: "Contingency System Optimization for Nuclear Power Plants, ",
      group:
        "Transactions 1975 Annual Reliability and Maintainability Symposium (RAMS)",
      body: ", Washington, D.C., January 1975",
    },
    {
      title:
        "Fault Tree Analysis of Reactor Systems with Application to the Residual Heat Removal System of a BWR, ",
      group: "Transactions ANS Calculational Physics Topical Meeting",
      body: ", University of Michigan, Ann Arbor, Michigan, April 1973",
    },
    {
      title: "Nuclear Reactor Stability, ",
      group:
        "Transactions Western-Midwestern Meeting of the Student Branches of the ANS",
      body: ", Pocatello, Idaho, April 1972",
    },
    {
      title: "Linear Stability of Fast and Thermal Reactors, ",
      group: "Nuclear Science and Engineering",
      body: ", Vol. 49, pp. 99-107, 1972",
    },
  ];

  return (
    <>
      {content.map((c, i) => (
        <li key={c.title + "_" + i}>
          {c.chapter && c.chapter}
          <span className="italic">{c.title}</span>
          {c.pregroup && c.pregroup}
          {c.group && <span className="underline">{c.group}</span>}
          {c.body}
          {c.link && <RouteLink href={c.link} label={c.link} />}
        </li>
      ))}
    </>
  );
};

export const Other = () => {
  const content = [
    {
      title: "Dealing With Uncertainty",
      body: ", Oak Ridge National Laboratory, Report No. ORNL/RM-9076, March 1984",
    },
    {
      title:
        "Final Report: Alternative Risk Management Policies for State and Local Governments",
      body: ", University of California, Los Angeles, UCLA-ENG-8240, May 1982",
    },
    {
      title:
        "Executive Summary: Alternative Risk Management Policies for State and Local Governments",
      body: ", University of California, Los Angeles, UCLA-ENG-8241, May 1982",
    },
    {
      title:
        "Risk Management Practices in Local Communities: Five Alternatives",
      body: ", University of California, Los Angeles, UCLA-ENG-8242, May 1982",
    },
    {
      title: "Management of Risks Associated With Drinking Water",
      body: ", University of California, Los Angeles, UCLA-ENG-8243, May 1982",
    },
    {
      title: "Classification of Risk: A Taxonomy",
      body: ", University of California, Los Angeles, UCLA-ENG-8245, May 1982",
    },
    {
      title:
        "Earthquake Ordinances for the City of Los Angeles, California: A Brief Case Study",
      body: ", University of California, Los Angeles, UCLA-ENG-7765, October 1977",
    },
    {
      title: "De Facto Liability Limits",
      body: ", University of California, Los Angeles, UCLA-ENG-7732, May 1977 ",
    },
    {
      title: "State by State Chemical Risk Assessment Survey",
      body: ", University of California, Los Angeles, UCLA-ENG-76125, December 1976",
    },
    {
      title: "A Methodology for Assessing Aircraft Crash Probabilities",
      body: ", Centre de Development Technolugque, Atomic Energy Control Board of Canada, Report IGN-126, September 1976 ",
    },
    {
      title: "An Assessment of the Risk Due to a Hypothetical Nuclear Accident",
      body: ", NUS Report No.1538, November 1975",
    },
    {
      title: "Risk Associated With Nuclear, Coal, and Oil Fuel Cycles",
      body: ", NUS Report No. 1537, November 1975 ",
    },
    {
      title: "Summary of Comments to WASH-1400 (DRAFT)",
      body: ", NUS Corporation, NUS Report No. 1502, Sept. 1975",
    },
    {
      title:
        "Siting of Nuclear Power Plants with Respect to Potential Hazards from Aircraft Impacts",
      body: ", NUS Report No. 1416, May 1975",
    },
    {
      title: "Development of Flaws in Nuclear Reactor Pressure Vessel Welds",
      body: ", University of California, Los Angeles, UCLA-ENG-7496, February 1975",
    },
    {
      title:
        "Prediction of Core Auxiliary Cooling System Availability and Reliability",
      body: ", University of California, Los Angeles, UCLA-ENG-7495, February 1975",
    },
    {
      title: "Nuclear Power Plant Reliability",
      body: ", Ph.D. Dissertation, UCLA School of Engineering and Applied Science, Dec 1974",
    },
    { title: "AEC Study WASH-l400", body: ", Reactor Safety Study, June 1974" },
    {
      title:
        "Potential Hazards to a Nuclear Reactor from the Random Impact of Meteorites",
      body: ", University of California, Los Angeles, UCLA-ENG-7426, March 1974",
    },
    {
      title: "The Risk of Catastrophic Spills of Toxic Chemicals",
      body: ", University of California, Los Angeles, UCLA-ENG-7425, March 1974, edited by K.A. Solomon",
    },
    {
      title: "Airplane Crash Risk to Ground Population",
      body: ", University of California, Los Angeles, UCLA-ENG-7424, March 1974",
    },
    {
      title: "",
      body: "MHD Topping Cycles, Jet Propulsion Laboratory, JPL-1200-59, May 1973",
    },
    {
      title:
        "Methods of Determining Oscillations and Linear Stability of a Nuclear Reactor Using Space Dependent Kinetics",
      body: ", M. S. Thesis, UCLA School of Engineering and Applied Science, September 197",
    },
  ];

  return (
    <>
      {content.map((c, i) => (
        <li key={c.title + "_" + i}>
          <span className="italic">{c.title}</span>
          {c.body}
        </li>
      ))}
    </>
  );
};
