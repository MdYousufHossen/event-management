import { gql } from '@apollo/client';

 interface ConferenceTypes{
  name:string;
  id:string;
  slogan:string;
  startDate:string;
  endDate:string;
}
export interface ConferencesTypes{
  conferences:ConferenceTypes[]
}
const GET_CONFERENCES = gql`
     {
        conferences {
          id,
          name,
          slogan,
          startDate,
          endDate
        }
      }
    `
export default GET_CONFERENCES
