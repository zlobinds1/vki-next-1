import { getGroupsDb } from '@/db/groupDb';
import GroupInterface from '@/types/GroupInterface';

export const getGroupsApi = async (): Promise<GroupInterface[]> => {

  try {
    const response = await fetch('http://localhost:3000/api/groups');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data =  response.json(); 

    return data;

  } catch (error) {
    console.error("Failed to fetch groups from API:", error);
    
    return []; 
  }

};
