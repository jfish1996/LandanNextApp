export const HOME_PAGE_ARCHIVE_MUTATION = `
mutation($Title: String) {
    createHomeArchive(data: { Title: $Title }) {
     data {
       id
       attributes {
         Title
       }
     }
   }
 }

`;

export const TEST_MUTATION = `
mutation($Title: String, $FullDescription: String, $Img: [ID],) {
    createHomeArchive(data: { Title: $Title, FullDescription: $FullDescription, Img: $Img}) {
     data {
       id 
       attributes {
         Title
         FullDescription
         Img {
           data {
             attributes {
               url
             }
           }
         }
       }
     }
   }
 }
`;

export const LIKE_MUTATION = `
mutation($id: ID!, $likes: Long!) {
    updatePost(id: $id, data: { likes: $likes }) {
          data {
        id
        attributes {
          likes
        }
          }
    
      
    }
  }
     
`;
export const FART_MUTATION = `
mutation($id: ID!, $farts: Long!) {
    updatePost(id: $id, data: { farts: $farts }) {
          data {
        id
        attributes {
          farts
        }
          }
    
      
    }
  }
     
`;
