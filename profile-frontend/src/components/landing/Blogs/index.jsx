
import React, { useContext } from 'react';
import { Link } from "gatsby";
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from "components/common";
import { Wrapper, Thumbnail } from './styles';
import {blogsUrl} from '../../../data/config';
import blogImg from "assets/illustrations/undraw_Blog_post_re_fy5x.svg";


export const Blogs = () => {
  const { theme } = useContext(ThemeContext);

  return (
      <Wrapper as={Container} id="blogs" theme={theme}>
          <h2>Blogs</h2>
          <div>
          <p>I have started writing blogs and really enjoying it.Nothing great like 
              sharing your learning with others.
              After all we rise by lifting others.
              If you would like to read my blogs see 
              <a href={blogsUrl} target="_blank"> here. </a>
              Do drop a message if you like them!😊
          </p>
        <Thumbnail>
          <img src={blogImg} alt="Crio.Do" />
        </Thumbnail>
        </div>
      </Wrapper>
  );
};
