const Experience = () => {
    return (
      <div id="experience" className="container mt-11">
        <h2 className="headline-2 ">Work Experience</h2>
  
        <div className="space-y-12">
  
          {/* First Experience */}
          <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4">
            <div className="md:w-1/3 text-lg font-semibold">
              Feb 2023 - Jan 2024
            </div>
            <div className="md:w-2/3">
              <p className="font-bold text-xl">Quality Assurance - Internship</p>
              <p className="font-bold text-l mb-5">Sathapana Bank</p>
              <div className="text-zinc-400">
                <ul className="list-disc list-inside"> 
                  <li>Perform UAT on Card System</li>
                  <li>Creating Test Case based on Business requirement</li>
                  <li>Design Test Matrix</li>
                  <li>Bug Report in Jira and Excel</li>
                  <li>Worked with Waterfall methodology</li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Second Experience */}
          <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4">
            <div className="md:w-1/3 text-lg font-semibold">
              Jan 2024 - Present
            </div>
            <div className="md:w-2/3">
              <p className="font-bold text-xl">QA Engineer</p>
              <p className="font-bold text-l mb-5">Vattanac Bank</p>
              <div className="text-zinc-400">
                <ul className="list-disc list-inside"> 
                  <li>Perform functional testing on Mobile Banking App, Merchant App, Agency Banking</li>
                  <li>Design test case and test report</li>
                  <li>Bug Report on Jira</li>
                  <li>Worked with Scrum methodology</li>
                  <li>Work closely with technical team</li>
                </ul>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default Experience;
  