import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: center;
`;

const Form = styled.form`
width: 100%;
display: flex;
flex-flow: column wrap;
align-items: center;
justify-content: center;
`;

const Grid = styled.div`
width: 100%;
padding: 5px;
`;

const Input = styled.input`
font-family: 'Lato', sans-serif;
font-size: 0.875em;
width: 100%;
padding: 5px;

background: transparent;
outline: none;
color: #726659;

border: solid 1px #b3aca7;
border-bottom: none;
`;


const Message = styled.textarea`
width: 100%;
height: 110px;
max-height: 110px;
padding: 15px;

background: transparent;
outline: none;

color: #726659;
font-family: 'Lato', sans-serif;
font-size: 0.875em;

border: solid 1px #b3aca7;
`;

const Button = styled.button`
width: 100%;

padding: 10px;
margin: 0px 0px 0px 0px;

font-family: 'Lato', sans-serif;
font-size: 0.875em;
color: #b3aca7;

outline:none;
cursor: pointer;

border: solid 1px #b3aca7;
border-top: none;
`;

const Contact = () => {

    return (
        <Container>
            <Form name="Contact Form" method="POST" data-netlify="true" action='/'>
                <Input type="hidden" name="form-name" value="Contact Form" />
                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between'
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
                <Button type="submit">Send</Button>
                </Grid>
            </Form>
        </Container>
    )
};

export default Contact;