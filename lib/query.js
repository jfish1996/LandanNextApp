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
                      url
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

export const SECTION_QUERY = `query($start: Int, $limit: Int, $name: String) {
  sectionNames(filters: { SectionName: { eq: $name }}) {
    data {
      attributes {
        SectionName
        posts(pagination: { start: $start, limit: $limit }) {
          data {
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
                    url
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

export const ALL_PRODUCTS = `query($start: Int, $limit: Int, $name: String) {
  categories(filters: { name: { eq: $name }}) {
    data {
      attributes {
        name 
     products(pagination: { start: $start, limit: $limit }) {
      data {
        id
        attributes {
          Title
          Price
          Date
          FullDescription
          Img{
            data {
              attributes {
                url
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
}
`;

export const PRODUCT_SECTION_QUERY = `query($start: Int, $limit: Int, $name: String) {
  sectionNames(filters: { SectionName: { eq: $name }}) {
    data {
      attributes {
        SectionName
        products(pagination: { start: $start, limit: $limit }) {
          data {
            attributes {
              Title
              Date
              FullDescription
              Img{
                data {
                  attributes {
                    formats
                    url
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
