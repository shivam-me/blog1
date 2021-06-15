import React from 'react';
import PropTypes from 'prop-types';

import styles from './PostImage.module.scss';

const PostImage = ({ post }) => (
  <figure className={styles['post-image']}>
    <picture>
      <source
        srcSet={`${post.imgDescriptor} 1x, ${post.imgDescriptor} 2x`}
        media="(max-width: 400px)"
      />
      <source
        srcSet={`${post.imgDescriptor} 1x, ${post.imgDescriptor} 2x`}
        media="(min-width: 401px) and (max-width: 600px)"
      />
      <source
        srcSet={`${post.imgDescriptor} 1x, ${post.imgDescriptor} 2x`}
        media="(min-width: 601px) and (max-width: 800px)"
      />
      <source
        srcSet={`${post.imgDescriptor} 1x, ${post.imgDescriptor} 2x`}
        media="(min-width: 801px)"
      />
      <img src={`${post.imgDescriptor}`} />
    </picture>
  </figure>
);

PostImage.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostImage;
