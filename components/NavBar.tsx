import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import iconLogo from '../public/icon-logo (1).png';

export default function NavBar() {
  return (
    <ul className="w-full h-full flex justify-between items-center NavBar">
      <li>
        <Link href="/">
          <Image className="iconLogo" src={iconLogo} alt="Logo" />
        </Link>
      </li>
      <li className="personal-nav">
        <span className="text-xs text-blue-900">
          <Link href="/create-publication" className="fl">
            <i className="bx bx-plus"></i> <span>Create Publication</span>
          </Link>
        </span>
        <span className="text-xs fl">
          <Link href="/login">Login</Link>
        </span>
        <span className=" text-xs fl">
          <Link href="/sing-up"> Sing Up</Link>
        </span>
        <span className="miVotes text-xs">
          <Link href="/my-votes">My votes</Link>
        </span>
      </li>
    </ul>
  );
}
