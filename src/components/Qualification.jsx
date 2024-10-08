const Qualification = () => {
    return (
  
      <div id="qualification" className="container mt-11">
          <h2 className="headline-2">Qualification</h2>
  
      <div className="container mx-auto mt-12 space-y-8">
        {/* Qualification Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  
          <div className="qualification-box lg:col-span-2 flex flex-col justify-between p-4 ring-1 ring-gray-200 rounded-xl">
            <img src="images/rupp.png" alt="school collaboration" className="mb-3" />
            <div>
              <h3 className="text-xl font-bold mb-3">Bachelor Degree in Computer Science</h3>
              <p className="font-semibold text-gray-400">Royal University of Phnom Penh</p>
            </div>
          </div>
  
          <div className="qualification-box lg:col-span-2 flex flex-col justify-between p-4 ring-1 ring-gray-200 rounded-xl">
            <img src="images/ACE.png" alt="school collaboration" className="rounded-xl mb-3" /> 
            <div>
              <h3 className="text-xl font-bold mb-3">General English Program</h3>
              <p className="font-semibold text-gray-400">Australian Centre for Education (ACE)</p>
            </div>
          </div>
  
  
          <div className="qualification-box flex flex-col justify-between p-4 ring-1 ring-gray-200 rounded-xl">
            <img src="images/Web developer .png" alt="Web Development" className="mb-3" />
            <div>
              <h3 className="text-xl font-semibold mb-3">Web Development Bootcamp</h3>
              <p className="text-gray-700">Udemy</p>
            </div>
          </div>
  
          <div className="qualification-box flex flex-col justify-between p-4 ring-1 ring-gray-200 rounded-xl">
            <img src="images/Python.png" alt="Python" className="mb-3" />
            <div>
              <h3 className="text-xl font-semibold mb-3">Python</h3>
              <p className="text-gray-700">Udemy</p>
            </div>
          </div>
  
          <div className="qualification-box flex flex-col justify-between p-4 ring-1 ring-gray-200 rounded-xl">
            <img src="images/SQL.png" alt="SQL" className="mb-3" />
            <div>
              <h3 className="text-xl font-semibold mb-3">SQL</h3>
              <p className="text-gray-700">Codeacademy</p>
            </div>
          </div>
  
          <div className="qualification-box flex flex-col justify-between p-4 ring-1 ring-gray-200 rounded-xl">
            <img src="images/ASEAN school collaboration.jpeg" alt="school collaboration" className="mb-3" />
            <div>
              <h3 className="text-xl font-semibold mb-3">Asian School Collaboration</h3>
              <p className="text-gray-700">A 21st-century skill collaboration project with Lao student</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default Qualification;
  