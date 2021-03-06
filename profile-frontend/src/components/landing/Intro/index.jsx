
import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import heroImg from "assets/illustrations/Web Developer_Two Color.svg";
import { greeting, greetingDescription, linkedinUrl, githubUrl, cvLink,twitterUrl } from 'data/config';
import linkedinLogo from 'assets/illustrations/linkedin_logo.png';
import githubLogo from 'assets/illustrations/github_logo.png';
import linkedinLogoWhite from 'assets/illustrations/linkedin_white.png';
import githubLogoWhite from 'assets/illustrations/github_white.png';
import twitterLogoWhite from 'assets/illustrations/twitter_white.png';
import twitterLogoDark from 'assets/illustrations/twitter_dark.png';

import { IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>{greeting}</h1>
          <h4>{greetingDescription}</h4>
          <div>
            <Button as={AnchorLink} href="#contact" className="hire-me">
              Hire me
            </Button>{' '}
            {/* <a href={cvLink} target="_blank" rel="noreferrer">
              <Button className="view-cv">View CV</Button>
            </a> */}
          </div>
          <div className="social">
            {' '}
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
              <img width="45" src={theme === 'light' ? linkedinLogo : linkedinLogoWhite} alt="Linkedin" />
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <img width="45" src={theme === 'light' ? githubLogo : githubLogoWhite} alt="GitHub" />
            </a>
            <a href={twitterUrl} target="_blank" rel="noreferrer">
              <img width="45" src={theme === 'light' ? twitterLogoWhite:twitterLogoDark} alt="Twitter" />
            </a>
          </div>
        </Details>
        <Thumbnail>
          <img src={heroImg} alt="Crio.Do" />
        </Thumbnail>
      </IntroWrapper>
    </div>
  );
};
