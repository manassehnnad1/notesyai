/**
 * @copyright 2025 notecloud
 * @license Apache-2.0
 * @description Head Component for the app
 */

import { Helmet } from 'react-helmet';

/**
 * 
 * types
 */

type HeadProps = {
    title: string;
}

const Head: React.FC<HeadProps> = ({ title }) => {
  return (
    <Helmet> 
        <title>{ title }</title>

    </Helmet>
  )
}

export default Head