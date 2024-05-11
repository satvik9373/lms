const { gql, request } = require("graphql-request");

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_API_KEY + "/master";

const getCourseList = async () => {
    const query = gql`
        query MyQuery {
            courseLists {
                author
                name
                id
                free
                description
                banner {
                    url
                }
                chapter {
                    ... on Chapter {
                        id
                        name
                        video {
                            url
                        }
                    }
                }
                totalChapters
                tag
            }
        }
    `;

    const result = await request(MASTER_URL, query);
    return result;
};

export default {
    getCourseList
};
