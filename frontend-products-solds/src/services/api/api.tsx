const BASE_URL = "http://localhost:3001/api/v1" 

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(`${BASE_URL}/product-sold/upload-file`, {
      method: 'POST',
      body: formData,
    });
    alert("data sent successfully.");
  } catch (error) {
    console.error('Error:', error);
    alert("Error. Try again later.");
  }
};

export const getProductSoldData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/product-sold`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch product sold data.');
  }
};
