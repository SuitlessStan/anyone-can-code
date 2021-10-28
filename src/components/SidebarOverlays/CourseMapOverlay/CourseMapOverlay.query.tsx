import gql from 'graphql-tag';

export const CourseMapOverlayData = gql`
  query getCourseMapOverlayData($slug: String!) {
    courses(where: { slug: $slug }) {
      name
      modules {
        name
        lessons {
          name
          slug
        }
      }
    }
  }
`;
