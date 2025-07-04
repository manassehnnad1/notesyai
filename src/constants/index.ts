/**
 * @copyright 2025 notecloud
 * @license Apache-2.0
 * @description Constants for the app
 */

/**
 * Node modules
 */
import { Calendar1, CircleCheck, CalendarDays, Inbox, Book, BookAIcon, Library, CloudDownload } from 'lucide-react';
import { href } from 'react-router';

export const SOCIAL_LINKS = [
    {
        href: '',
        label: 'Email'
    },
    {
      href:'',
      label:'Telegram'
    },
  
  {
    href: 'https://github.com/manassehnnad1',
    label: 'GitHub',
  },
] as const;

export const SIDEBAR_LINKS = [

  {
    href: '/app/downloads',
    label: 'Downloads',
    icon: CloudDownload,
  },
 

] as const;