export const CATEGORY_QUERY = `query($start: Int, $limit: Int, $name: String) {
        categories(filters: { name: { eq: $name }}) {
          data {
            attributes {
              name 
           posts(pagination: { start: $start, limit: $limit }) {
            data {
              id
              attributes {
                Title
                Description
                Date
                likes
                FullDescription
                Img{
                  data {
                    attributes {
                      formats
                    }
                  }
                }
                
                
              }
            }
          }
            }
          }
        }
      }`;
