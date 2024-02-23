import React from 'react';
import QrReader from 'react-qr-reader'; // Import the QR reader component

function NutriScan() {
  const [userMedicalData, setUserMedicalData] = React.useState({
    allergies: '',
    medicalConditions: '',
    dietaryPreferences: '',
  });
  const [scanResult, setScanResult] = React.useState(null);
  const [personalizedAdvice, setPersonalizedAdvice] = React.useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserMedicalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleScanError = (error) => {
    console.error(error);
  };

  const handleScan = async (data) => {
    if (data) {
      // Assume data is a URL or a string that can be used to fetch food information
      // For demonstration, we're parsing the scanned data as JSON. In a real app, you might fetch this data from an API.
      try {
        const foodData = JSON.parse(data);
        setScanResult(foodData);
        await getPersonalizedAdvice(foodData);
      } catch (error) {
        console.error('Error parsing QR code data:', error);
      }
    }
  };

  const getPersonalizedAdvice = async (foodData) => {
    // Implement fetching personalized advice based on foodData and userMedicalData
    const advice = 'Based on your medical conditions, consuming this product is safe.';
    setPersonalizedAdvice(advice);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">NutriScan</h1>
      {/* Input fields for allergies, medical conditions, and dietary preferences */}
      
      {/* QR Code Scanner */}
      <div className="mb-4">
        <QrReader
          delay={300}
          onError={handleScanError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        <p>Scan a QR code to get started.</p>
      </div>

      {/* Display scan result and personalized advice */}
    </div>
  );
}

export default NutriScan;
