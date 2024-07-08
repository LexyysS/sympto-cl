import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.infermedica.com/v3/',
  headers: {
    'App-Id': 'fb2843c4',
    'App-Key': '09986cc0228aefc797dcac1a93aef1db',
    'Content-Type': 'application/json',
    'Interview-Id': 'd0f3e36f-29-44aa-8893-587f3691c0c5',
    "Model":"infermedica-es"
    

  },
});



export const getSymptoms = async (age) => {
    const response = await api.get(`symptoms?age.value=${age}&age.unit=year`);
    return response.data;
  };


  export const getDiagnosis = async (symptoms, age, sex) => {
    const response = await api.post('diagnosis', {
      sex,
      age: {
        value: age,
        unit: 'year'
      },
      evidence: symptoms,
      extras: {}
    });
    return response.data;
  };

