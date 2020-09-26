import React from 'react';
import { useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';

const Box = styled.div`
display: flex;
justify-content: left;
`;

const Socials = props => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
              social {
                github {
                  name
                  faRef
                  url
                }
                linkedIn {
                  name
                  faRef
                  url
                }
                twitter {
                  name
                  faRef
                  url
                }
              }
            }
          }
        }
  `)

    const socials = data.site.siteMetadata.social

    return (
        <Box>
            {Object.keys(socials).map((key) => {
                return <a
                    key={socials[key].name}
                    href={socials[key].url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={socials[key].name}
                    style={{paddingRight: "5px"}}
                >
                    <FontAwesomeIcon
                        icon={['fab', socials[key].faRef]}
                        size="lg" 
                    />
                </a>
            })}
        </Box>

    )
};

// Socials.propTypes = {
//   fontAwesomeIcon: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
//   color: PropTypes.string,
// }


export default Socials;