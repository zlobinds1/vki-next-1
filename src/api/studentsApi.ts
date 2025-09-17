import { getStudentsDb } from '@/db/studentDb';
import StudentInterface from '@/types/StudentInferface';

export const getStudentsApi = async (): Promise<StudentInterface[]> => {

  try {
    const response = await fetch('http://localhost:3000/api/students');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data =  response.json(); 

    return data;

  } catch (error) {
    console.error("Failed to fetch students from API:", error);
    
    return []; 
  }

};