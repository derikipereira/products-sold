const URI = "http://localhost:3001/api/v1" 

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(`${URI}/product-sold/upload-file`, {
      method: 'POST',
      body: formData,
    });
    alert("data sent successfully.");
  } catch (error) {
    console.error('Error:', error);
    alert("Error. Try again later.");
  }
};
