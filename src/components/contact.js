import React, { useState } from 'react';
import styled from 'styled-components';
import StyledButton from './styledbutton';

const Grid = styled.div`
padding: 4px;
width: 100%;
`;

const Input = styled.input`
width: 100%;
font-size: 14px;
padding: 5px;
`;

const Message = styled.textarea`
width: 100%;
resize: none;
font-size: 14px;
padding: 5px;
`;

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = e => {
        e.preventDefault()
        setSubmitted(!submitted)

        const data = [...e.currentTarget.elements]

        const formBody = encode(data)
            
        fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formBody
          })
            .then(data => console.log(data))
            .catch(err => console.error(err));
    }

    const encode = data => {
        return data.filter((elem) => !!elem.value)
        .map(
            (element) =>
            encodeURIComponent(element.name) +
            "=" +
            encodeURIComponent(element.value)
        ).join("&");
    }

    if (submitted) { 
        return ( <h4 style={{paddingTop: "20px",paddingBottom: "20px"}}><span role="img" aria-label="post-emoji">📨</span> Thanks, I'll get back to you. </h4> ) 
    } else {
        return (
            <form name="Contact Form" onSubmit={handleSubmit} method="POST" data-netlify="true" action='/'>
                <Input type="hidden" name="form-name" value="Contact Form" />
                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Grid>
                        <Input placeholder='Name' type="text" name="name" />
                    </Grid>
                    <Grid>
                        <Input placeholder='Email' type="email" name="email" />
                    </Grid>
                </div>
                <Grid>
                    <Message placeholder='Message' name="message" />
                </Grid>
                <Grid>
                    <StyledButton type="submit" content='SEND' />
                </Grid>
            </form>
        )
    }
};

export default Contact;