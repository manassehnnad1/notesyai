/**
 * @copyright 2025 notecloud
 * @license Apache-2.0
 * @description Constants for the app
 */

/**
 * Node modules
 */
import {  CloudDownload } from 'lucide-react';
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
    href: '',
    label: 'Pricing',
  },
] as const;

export const SIDEBAR_LINKS = [

  {
    href: '/app/downloads',
    label: 'Downloads',
    icon: CloudDownload,
  },
 

] as const;