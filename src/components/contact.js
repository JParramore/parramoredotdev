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

    const handleSubmitted = () => {
        setSubmitted(!submitted)
    }

    if (submitted) { return ( <h4 style={{paddingTop: "20px",paddingBottom: "20px"}}>📨 Thanks, I'll get back to you. </h4> ) } else {
        return (


            <form name="Contact Form" method="POST" data-netlify="true" action='/'>
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
                    <a style={{cursor: "pointer"}} type="submit" onClick={handleSubmitted}>
                        <StyledButton content='SEND' />
                    </a>
                </Grid>
            </form>
        )
    }
};

export default Contact;