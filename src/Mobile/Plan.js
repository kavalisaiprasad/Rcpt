import React, { useState, useEffect } from 'react';
import Headermobile from './Headermobile';
import Footer from './Footer';
import { baseurl } from '../Component/Baseurl';
import { Link } from 'react-router-dom';

const tabMappings = {
  'Populer Vouchers': { voucherKey: 'populervouchers', type: 'populervouchers' },
  'General Topup': { voucherKey: 'generaltopup', type: 'generaltopup' },
  'Data Vouchers': { voucherKey: 'vouchers', type: 'DATA' },
  'Voice Vouchers': { voucherKey: 'vouchers', type: 'VOICE' },
  'SMS Vouchers': { voucherKey: 'vouchers', type: 'SMS' },
  'ISD Vouchers': { voucherKey: 'vouchers', type: 'ISD' },
  'Others Vouchers': { voucherKey: 'vouchers', type: 'OTHER' },
  'Plan Extension': { voucherKey: 'vouchers', type: 'EXTENSON' },
  'Plan Migration': { voucherKey: 'vouchers', type: 'MIGRATION' },
};

function Plan() {
  const [activeTab, setActiveTab] = useState('Populer Vouchers');
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [circleNames, setCircleNames] = useState([]);
  const [selectedState, setSelectedState] = useState(''); // State selected by the user
  const [selectedCircleCode, setSelectedCircleCode] = useState('');
  const [duplicateNames, setDuplicateNames] = useState([]);


  const handleTabClick = (tabLabel) => {
    setActiveTab(tabLabel);
    const { voucherKey, type } = tabMappings[tabLabel];
    fetchData(voucherKey, type, selectedCircleCode);
  };







  useEffect(() => {
    fetchCircleName();
  }, []);

  const fetchCircleName = async () => {
    let location;
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;

        // Implement your logic to map coordinates to a state and set the user's current state
        const userState = determineUserLocation(userLatitude, userLongitude);
        console.log("Geo locatooooo:: " + userState);
        if (userState) {
          console.log("Geo location " + userState);
          location = userState;
          console.log("Geo location11 " + location);

          setSelectedState(userState);
          console.log("shghghh:: " + selectedState)
          const circleCode = getCircleCodeForState(userState);
          setSelectedCircleCode(circleCode);
          console.log("circle code :: " + circleCode)
        }
        // Set the default selected state based on the user's current state
        setSelectedState(userState);
      });
    }

    // Define the API endpoint for fetching circle names
    const circleNamesUrl = `${baseurl}/rcpt-api/getcircle`;
    // const allcircledata=null;

    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    const requestBody = {};

    fetch(circleNamesUrl, {
      method: 'POST',
      headers: headers,
      body: requestBody
    })
      .then((response) => response.json())
      .then((data) => {
        setCircleNames(data);
        console.log("Geo location12 " + location);

        const selectedCircle = data.find((circle) => circle.circle_name === location);
        console.log("selectedCircle at url: " + JSON.stringify(selectedCircle));
        setSelectedCircleCode(selectedCircle.circle_code)
        if (data && Array.isArray(data)) {
          const names = data.map((item) => item.circle_name);
          //console.log(data)


          //  setCircleNames(data); // Store the entire response, including circle_code
          console.log("state name:: " + selectedState);
          // setCircleName1(data); // Store the entire response, including circle_code

          //allcircledata=data;
          //console.log("all cicle amain:: " + JSON.stringify(data))

        }
      })
      .catch((error) => {
        console.error('Error fetching circle names:', error);
      });


  }

  useEffect(() => {
    console.log("All circles for ts:: " + JSON.stringify(circleNames))

  }, [])




  // Implement your own logic to determine the user's location based on coordinates
  function determineUserLocation(latitude, longitude) {
    // Replace this with your own logic to map coordinates to a state
    // This is a simplified example with a few states for demonstration
    const stateCoordinates = {
      'Andaman and Nicobar Islands': { latitude: 11.7401, longitude: 92.6586 },
      'Andhra Pradesh': { latitude: 15.9129, longitude: 79.7400 },
      'Arunachal Pradesh': { latitude: 27.1004, longitude: 93.6165 },
      'Assam': { latitude: 26.2006, longitude: 92.9376 },
      'Bihar': { latitude: 25.0961, longitude: 85.3131 },
      'Chandigarh': { latitude: 30.7333, longitude: 76.7794 },
      'Chhattisgarh': { latitude: 21.2787, longitude: 81.8661 },
      'Dadra and Nagar Haveli and Daman and Diu': { latitude: 20.1809, longitude: 73.0169 },
      'Delhi': { latitude: 28.6139, longitude: 77.2090 },
      'Goa': { latitude: 15.2993, longitude: 74.1240 },
      'Gujarat': { latitude: 22.2587, longitude: 71.1924 },
      'Haryana': { latitude: 29.0588, longitude: 76.0856 },
      'Himachal Pradesh': { latitude: 31.1048, longitude: 77.1734 },
      'Jammu and Kashmir': { latitude: 33.7782, longitude: 76.5762 },
      'Jharkhand': { latitude: 23.6102, longitude: 85.2799 },
      'Karnataka': { latitude: 12.9716, longitude: 77.5946 },
      'Kerala': { latitude: 10.8505, longitude: 76.2711 },
      'Ladakh': { latitude: 34.1526, longitude: 77.5771 },
      'Lakshadweep': { latitude: 10.5667, longitude: 72.6420 },
      'Madhya Pradesh': { latitude: 22.9734, longitude: 78.6569 },
      'Maharashtra': { latitude: 19.7515, longitude: 75.7139 },
      'Manipur': { latitude: 24.6637, longitude: 93.9063 },
      'Meghalaya': { latitude: 25.4670, longitude: 91.3662 },
      'Mizoram': { latitude: 23.1645, longitude: 92.9376 },
      'Nagaland': { latitude: 26.1584, longitude: 94.5624 },
      'Odisha': { latitude: 20.9517, longitude: 85.0985 },
      'Puducherry': { latitude: 11.9416, longitude: 79.8083 },
      'Punjab': { latitude: 31.1471, longitude: 75.3412 },
      'Rajasthan': { latitude: 27.0238, longitude: 74.2179 },
      'Sikkim': { latitude: 27.5330, longitude: 88.5122 },
      'Tamil Nadu': { latitude: 13.0827, longitude: 80.2707 },
      'Telangana': { latitude: 17.3850, longitude: 78.4867 },
      'Tripura': { latitude: 23.9408, longitude: 91.9882 },
      'Uttar Pradesh': { latitude: 26.8467, longitude: 80.9462 },
      'Uttarakhand': { latitude: 30.0668, longitude: 79.0193 },
      'West Bengal': { latitude: 22.5726, longitude: 88.3639 },
      // Add coordinates for other states as well
    };

    const userState = Object.keys(stateCoordinates).find((state) =>
      isInsideRegion(
        { latitude, longitude },
        stateCoordinates[state],
        1.5 // Set a radius as needed
      )
    );
    setSelectedState(userState);

    return userState || 'Default State';
  }

  useEffect(() => {
    console.log("userState:: " + selectedState)

  }, [])


  function isInsideRegion(point, center, radius) {
    const distance = Math.sqrt(
      Math.pow(point.latitude - center.latitude, 2) +
      Math.pow(point.longitude - center.longitude, 2)
    );
    return distance <= radius;
  }



  useEffect(() => {

    const circleCode = getCircleCodeForState(selectedState);
    setSelectedCircleCode(circleCode);

  }, []);

  useEffect(() => {

    fetchData(selectedCircleCode, tabMappings[activeTab].voucherKey, tabMappings[activeTab].type);

  }, [])

  const getCircleCodeForState = (state) => {

    const selectedCircle = circleNames.find((circle) => circle.circle_name === state);

    return selectedCircle ? selectedCircle.circle_code : '';
  };




  useEffect(() => {
    // ...

    if (selectedState) {
      const circleCode = getCircleCodeForState(selectedState);
      setSelectedCircleCode(circleCode);
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedCircleCode && activeTab) {
      fetchData(selectedCircleCode, tabMappings[activeTab].voucherKey, tabMappings[activeTab].type);
    }
  }, [selectedCircleCode, activeTab]);

  // ...

  useEffect(() => {
    // Check if circleNames is available and not empty
    if (circleNames && circleNames.length > 0) {
      // When the component loads, fetch data based on default state or user's location
      if (selectedCircleCode && activeTab) {
        fetchData(selectedCircleCode, tabMappings[activeTab].voucherKey, tabMappings[activeTab].type);
      }
    }
  }, [circleNames, selectedCircleCode, activeTab]);

  const fetchData = async (circleCode, voucherKey, type) => {
    try {
      setLoading(true);
      const headers = new Headers({
        'Content-Type': 'application/json',
      });
      const requestBody = {};
      console.log('circleCode:' + circleCode, 'voucherKey:' + voucherKey, 'type: ' + type);

      const apiUrl = `${baseurl}/rcpt-api/getnewplans?circlecode=${circleCode}`;

      console.log('API Call:', apiUrl); // Log the API call for debugging

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody),
      });
      if (response.status === 200) {
        const data = await response.json();
      //   setTableData(data);
      console.log(data);
        const uniqueData = [];
        const planNamesSet = new Set();
        // setTableData(data);
        data.forEach(item => {
          if (!planNamesSet.has(item.recharge_amount)) {
            planNamesSet.add(item.plan_name);
            uniqueData.push(item);
          }
        });
  
        setTableData(data);
      } else {
        console.error('Error fetching data. Status:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  let tableColumns = ['Plan Value', 'Validity', 'Description', ''];

  if (activeTab === 'General Topup') {
    // Change column names and data field names for the 'General Vouchers' tab
    tableColumns = ['Plan Value', 'Talktime', 'Description', ''];
  }
  console.log(circleNames);
console.log(tableData)
  return (
    <>
      <Headermobile />
      <div className='container'>
        <div className='row marginforprow'>
          <form className='plansform'>
            <label htmlFor="state" className='col-2'>
              Choose a Region:
            </label>
            <select
              id="state"
              className="col-7 ssopt"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >

              {circleNames.map((circle, index) => (
                <option key={index} value={circle.circle_name}>
                  {circle.circle_name}
                </option>
              ))}
            </select>
            <button
              className="col-2 submitbutton"
              onClick={() => {
                const circleCode = getCircleCodeForState(selectedState);
                setSelectedCircleCode(circleCode);
              }}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="plans-container">
          {/* <div className="vertical-tabs">
            {Object.keys(tabMappings).map((tabLabel) => (
              <div
                key={tabLabel}
                className={tab ${activeTab === tabLabel ? 'active' : ''}}
                onClick={() => handleTabClick(tabLabel)}
              >
                {tabLabel}
              </div>
            ))}
          </div> */}

          <div className="tab-content">
            {loading ? (
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    {tableColumns.map((column, index) => (
                      <th key={index}>{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item, index) => (
                    // <tr key={index}>
                    //   <td>{item.denomination}</td>
                    //   <td>{activeTab === 'General Topup' ? item.talk_value : item.validity} </td>
                    //   <td>{item.description || item.remarks}</td>
                    //   <td>
                    //     <Link to="https://portal2.bsnl.in/myportal/quickrecharge.do">
                    //       <button className="denominbtns btn">Buy</button>
                    //     </Link>
                    //   </td>
                    // </tr>
                    <tr key={index}>
                      <td>{item.recharge_amount}</td>
                      <td>{item.recharge_validity}</td>
                      <td>{item.recharge_longdesc}</td>
                      <td>
                        <Link to="https://portal2.bsnl.in/myportal/quickrecharge.do">
                          <button className="denominbtns btn">Buy</button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Plan;