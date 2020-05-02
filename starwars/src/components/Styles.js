import styled from 'styled-components';

const CharacterContainer = styled.div`
width: 100%;
height: 100%;
`;

const CharacterCard = styled.div`
margin: 0 0 50px 500px;
width: 350px;
border-radius: 5px;
border: 1px solid;
padding: 10px;
height: 85vh;
box-shadow: 0 1px 1px 1px;
`;

const Images = styled.img`
border: 2px solid;
border-radius: 10px;
&:hover {
    filter: invert(100%)
}
`;

const Text = styled.p`
fonst-size: 1.4rem;
font-weight: bold;
color: black;
padding: 0;
margin: 0px;
text-shadow: 2px 2px springgreen;
&:hover {
    color: dimgrey;
}

cursor: pointer;
`;

const Name = styled.h2`
font-size: 2rem;
font-weight: bold;
color: black;
padding: 0;
margin: 0 0 10px 0;
text-shadow: 2px 2px springgreen;
&:hover {
    color: cyan;
}
cursor: pointer;
`;

export {CharacterContainer, CharacterCard, Images, Text, Name};