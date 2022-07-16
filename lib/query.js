export const CATEGORY_QUERY = `query($start: Int, $limit: Int, $name: String) {
        categories(filters: { name: { eq: $name }}) {
          data {
            attributes {
              name 
              section_header {
                data {
                  attributes {
                    Description
                  }
                }
              }
           posts(pagination: { start: $start, limit: $limit }) {
            data {
              id
              attributes {
                
                Title
                Description
                Date
                likes
                aspectRatio 
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
      id
      attributes {
        SectionName
        section_header {
          data {
            attributes {
              Description
            }
          }
        }

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

export const ALL_PRODUCTS_QUERY = `query($start: Int, $limit: Int, $name: String) {
  categories(filters: { name: { eq: $name }}) {
    data {
      attributes {
        name 
        section_header {
          data {
            attributes {
              Description
            }
          }
        }
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
        section_header {
          data {
            attributes {
              Description
            }
          }
        }
        products(pagination: { start: $start, limit: $limit }) {
          data {
            id
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

export const SUB_SECTION_CATEGORY = `query($subSectionName: String){
  posts(filters: { sub_section: { Name: { eq: $subSectionName}}}) {
    data {
      id
  attributes {
    Title
    Date
    FullDescription
    section {
      data {
        attributes {
          SectionName
        }
      }
    }
    sub_section {
      data {
        attributes {
          Name
        }
      }
    }
    Img {
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
}`;

export const SUB_SECTION_QUERY = `query($sectionName: String, $subSectionName: String){
  posts(filters: { section: {SectionName : {eq: $sectionName}}, sub_section: { Name: { eq: $subSectionName}}}) {
    data {
      id
  attributes {
    Title
    Date
    FullDescription
    section {
      data {
        attributes {
          SectionName
        }
      }
    }
    sub_section {
      data {
        attributes {
          Name
        }
      }
    }
    Img {
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
}`;

export const SUB_SECTION_TITLES = ` query {
  subSections{
    data {
      attributes {
        Name 
      }
    }
  }
}`;

export const TEST_QUERY = `query {
  posts {
    data {
  attributes {
    section {
      data {
        attributes {
          SectionName
        }
      }
    }
    sub_section {
      data {
        attributes {
          Name
        }
      }
    }
    Title 
    
  }
    }
  }
}`;
