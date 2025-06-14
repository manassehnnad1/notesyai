/**
 * @copyright 2025 notecloud
 * @license Apache-2.0
 * @description Constants for the app
 */

/**
 * Node modules
 */
import { Calendar1, CircleCheck, CalendarDays, Inbox } from 'lucide-react';
import { href } from 'react-router';

export const SOCIAL_LINKS = [
    {
        href: '',
        label: 'Email'
    },
  {
    href: 'https://x.com/islathebuilder',
    label: 'X',
  },
  {
    href: 'https://github.com/manassehnnad1',
    label: 'GitHub',
  },
] as const;

export const SIDEBAR_LINKS = [
  {
    href: '/app/inbox',
    label: 'Inbox',
    icon: Inbox,
  },
  {
    href: '/app/today',
    label: 'Today',
    icon: Calendar1,
  },
  {
    href: '/app/upcoming',
    label: 'Upcoming',
    icon: CalendarDays,
  },
  {
    href: '/app/completed',
    label: 'Completed',
    icon: CircleCheck,
  },
] as const;