/**
 * @copyright 2025 notecloud
 * @license Apache-2.0
 * @description Constants for the app
 */

/**
 * Node modules
 */
import {  Cloud } from 'lucide-react';
import { href } from 'react-router';

export const SOCIAL_LINKS = [
    {
        href: 'mailto:manasseh525@gmail.com',
        label: 'Contact'
    },
       
  {
    href: '/pricing',
    label: 'Pricing',
  },
  {
    href: '',
    label: 'Support',
  },
  {
    href: 'https://medium.com/',
    label: 'Blog',
  },
    
] as const;

export const SIDEBAR_LINKS = [

  {
    href: '/app/requests',
    label: 'Request',
    icon: Cloud,
  },
 

] as const;