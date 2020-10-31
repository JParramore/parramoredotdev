import React from 'react';
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
                <StyledButton content='SEND' type="submit">Send</StyledButton>
                </Grid>
            </form>
    )
};

export default Contact;