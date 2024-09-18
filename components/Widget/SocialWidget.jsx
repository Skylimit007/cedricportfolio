import { Icon } from '@iconify/react';
import Div from '../Div';
import Link from 'next/link';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href="https://www.linkedin.com/in/cedric-michael-njogu-48a146296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link href="https://www.instagram.com/c3d.rix._?igsh=bTdsYmJqcnBqZzI3" className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </Link>
      
    </Div>
  );
}
