export const CATEGORY_QUERY = () => {
  return `query($start: Int, $limit: Int) {
        categories(filters: { name: { eq: "Portfolio" }}) {
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
                
                
              }
            }
          }
            }
          }
        }
      }`;
};
