import { gql } from '@apollo/client';

interface  schedule{
  day:String,
  description:String,
  location:{
    name:String,
    about:String,
    city:String,
    address:String
  }
}

interface sponsor{
  name:String,
  about:String,
  company:String,
  image:{
    title:String,
    url:String
  }
}

 export interface ConferenceTypes{
  organizer:{
    name:String,
    about:String,
    company:String,
    image:{
      title:String,
      url:String
    }
  },
  speakers:{
    name:String,
    about:String,
    image:{
      title:String,
      url:String
    }
  }
  locations:{
    name:String,
    about:String,
    image:{
      title:String,
      url:String
    },
    city:String,
    address:String
  },
  schedules:schedule[],
  sponsors:sponsor[]
  
}

export interface ConferenceDataType{
  conference:ConferenceTypes
}
const GET_CONFERENCE = gql`
      query GetConference($confId:ID!) {
        conference(id:$confId){
          organizer{
            name,
            about,
            company,
            image {
              title,
              url
            }
          }
          locations{
              name,
              about,
              image{
                url,
                title
              },
              city,
              address
          }
            schedules{
                day,
            location {
              name
              about
              city
              address
            },
            description
          } 
          sponsors{
              name,
              about,
              company,
              image{
                title,
                url
              }
            }
            speakers{
              name,
              about,
              image{
                title,url
              }
            }
        }
      }
    `
export default GET_CONFERENCE
