/**
 * @copyright 2025 notecloud
 * @license Apache-2.0
 * @description Constants for the app
 */

/**
 * Node modules
 */
import {  Library} from 'lucide-react';
import { href } from 'react-router';

export const SOCIAL_LINKS = [
    {
        href: '',
        label: 'Email'
    },
    {
      href:'https://github.com/manassehnnad1/notebase',
      label:'GitHub'
    },
  
  {
    href: '/pricing',
    label: 'Pricing',
  },
] as const;

export const SIDEBAR_LINKS = [

  {
    href: '/app/papers',
    label: 'Past papers',
    icon: Library,
  },
 

] as const;