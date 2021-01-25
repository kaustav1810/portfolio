import React from 'react';
import { Wrapper } from './styles';
import { Container } from 'components/common';
import {skillIcons} from './skillIcons.js';

export const Skills = ()=>{
    console.log(skillIcons);
    return(
    <Wrapper as={Container} id="skills">
        <h2>Skills</h2>
        <div>
            {skillIcons.map(skill => <img src={skill.src} alt={skill.alt} /> )}
        </div>
    </Wrapper>
    )
}