import React from 'react';

export default function SettingsIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} className={className}>
      <g clipPath="url(#a)">
        <path
          d="m27.142 13.1-2.792-.833a9.708 9.708 0 0 0-.792-1.942l1.367-2.558a.508.508 0 0 0-.092-.6l-1.991-2a.508.508 0 0 0-.6-.092L19.7 6.433a9.682 9.682 0 0 0-1.967-.833L16.9 2.842a.509.509 0 0 0-.492-.342h-2.816a.508.508 0 0 0-.484.358l-.833 2.75a9.693 9.693 0 0 0-1.983.834l-2.5-1.35a.508.508 0 0 0-.6.091L5.167 7.158a.508.508 0 0 0-.092.6l1.35 2.5a9.692 9.692 0 0 0-.833 1.975l-2.759.834a.508.508 0 0 0-.358.483v2.817a.508.508 0 0 0 .358.483l2.775.833c.206.676.486 1.327.834 1.942l-1.367 2.617a.508.508 0 0 0 .092.6l1.991 1.991a.508.508 0 0 0 .6.092l2.575-1.375c.61.329 1.252.591 1.917.783l.833 2.809a.507.507 0 0 0 .484.358h2.816a.508.508 0 0 0 .484-.358l.833-2.817a9.69 9.69 0 0 0 1.9-.783l2.592 1.383a.508.508 0 0 0 .6-.092l1.991-1.991a.508.508 0 0 0 .092-.6l-1.383-2.584a9.683 9.683 0 0 0 .791-1.908l2.809-.833a.509.509 0 0 0 .358-.484v-2.841a.509.509 0 0 0-.308-.492ZM15 19.583a4.584 4.584 0 1 1 0-9.167 4.584 4.584 0 0 1 0 9.167Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}