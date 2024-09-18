import React from 'react'
import { Icon } from '@iconify/react';

export default function ContactInfoWidget({withIcon, title}) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li onClick={() => window.open('https://wa.me/254792364009')} style={{ cursor: 'pointer' }}>
          {withIcon ? <span className='cs-accent_color'><Icon icon="material-symbols:add-call-rounded" /></span> : ''}
          +254 792 364 009
        </li>

        <li onClick={() => window.open('mailto:cedricmicahelnjogu@gmail.com')} style={{ cursor: 'pointer' }}>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:envelope" /></span>:''}
          cedricmicahelnjogu@gmail.com
        </li>
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>:''}
          Nairobi Kenya
        </li>
      </ul>
    </>
  )
}
