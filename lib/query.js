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
                publishedAt
                Title
                category {
                  data {
                    attributes {
                      name
                    }
                  }
                }
                Description
                sub_section {
                  data {
                    attributes {
                      Name
                    }
                  }
                }
                Date
                likes
                farts
                aspectRatio 
                FullDescription
                Img{
                  data {
                    attributes {
                      ext
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

export const DATA_CATEGORY_QUERY = `query($start: Int, $limit: Int, $name: String) {
        categories(filters: { dataName: { eq: $name }}) {
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
                publishedAt
                Title
                category {
                  data {
                    attributes {
                      name
                    }
                  }
                }
                Description
                sub_section {
                  data {
                    attributes {
                      Name
                    }
                  }
                }
                Date
                likes
                farts
                aspectRatio 
                FullDescription
                Img{
                  data {
                    attributes {
                      ext
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
              publishedAt
              Title
              category {
                data {
                  attributes {
                    name
                  }
                }
              }
           
              Date
              sub_section {
                data {
                  attributes {
                    Name
                  }
                }
              }
              likes
              farts
              FullDescription
              Img{
                data {
                  attributes {
                    ext
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
export const DATA_SECTION_QUERY = `query($start: Int, $limit: Int, $name: String) {
  sectionNames(filters: { dataName: { eq: $name }}) {
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
              publishedAt
              Title
              category {
                data {
                  attributes {
                    name
                  }
                }
              }
           
              Date
              sub_section {
                data {
                  attributes {
                    Name
                  }
                }
              }
              likes
              farts
              FullDescription
              Img{
                data {
                  attributes {
                    ext
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
  categories(filters: { dataName: { eq: $name }}) {
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
          publishedAt
          Title
          Price
          Date
          FullDescription
          Img{
            data {
              attributes {
                ext
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
  sectionNames(filters: { dataName: { eq: $name }}) {
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
              publishedAt
              Title
              Date
              FullDescription
              Img{
                data {
                  attributes {
                    ext
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
    publishedAt
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
          ext
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
  posts(filters: { section: {dataName : {eq: $sectionName}}, sub_section: { Name: { eq: $subSectionName}}}) {
    data {
      id
  attributes {
    publishedAt
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
          ext
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
  subSections(pagination: { limit: 100 }){
    data {
      attributes {
        Name 
      }
    }
  }
}`;

export const HOMEPAGE_HEROS_ARCHIVE_QUERY = `
query{
  homeArchives{
    data {
      attributes {
       section_header {
        data {
          attributes {
            Description
          }
        }
      }
       posts(filters: { HomepageHero: { eq: true }}) {
        data {
          attributes {
            publishedAt
            Title
            aspectRatio
            HomepageHero
            Description
            Date
            likes
            FullDescription
            Img{
              data {
                attributes {
                  ext
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
}
`;

export const HOME_ARCHIVE_QUERY = `
query{
  homeArchives{
    data {
      attributes {
       section_header {
        data {
          attributes {
            Description
          }
        }
      }
       posts {
        data {
          id
          attributes {
            publishedAt
            Title
            aspectRatio
            HomepageHero
            Description
            sub_section {
              data {
                attributes {
                  Name
                }
              }
            }
            Date
            likes
            FullDescription
            Img{
              data {
                attributes {
                  ext
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
}
`;

export const HOME_HIDDEN_IMG = `
query {
  hiddenItems(filters: { active: { eq: true }}) {
    data {
      attributes {
        text 
        img {
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

`;

export const LEGIT_REVIEWS_QUERY = `query {
  legitReviews {
    data {
      attributes {
        review 
        createdAt
      }
    }
  }
}`;

export const NAV_BAR_QUERY = `query {
  categories {
    data {
      attributes {
        dataName
        name
        sections(sort: "list_number:ASC")  {
          data {
            attributes {
              SectionName 
              dataName
            }
          }
        }
      }
    }
  }
}`;

export const SHOPPING_MESSAGE_QUERY = `
query {
  shoppingStatusMessages {
    data {
      attributes {
        message
        type
      }
    }
  }
}
`;
