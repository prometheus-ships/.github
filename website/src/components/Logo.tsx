interface IconProps {
  size?: number;
  className?: string;
}

const REMBA_R_PATH =
  "M340 780V244H570C715 244 800 320 800 450C800 565 730 635 600 655L820 780H690L490 655H460V780H340ZM460 555H560C635 555 680 520 680 450C680 380 635 344 560 344H460V555Z";

export function RdsMark({ size = 32, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="RDS"
    >
      <rect width="1024" height="1024" rx="232" fill="#0047FF" />
      <path d={REMBA_R_PATH} fill="#FFFFFF" />
    </svg>
  );
}

export function BrayzenMark({ size = 32, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Brayzen"
    >
      <rect width="1024" height="1024" rx="232" fill="#CDF546" />
      <path d={REMBA_R_PATH} fill="#0A0A0A" />
    </svg>
  );
}

export function WeysabiMark({ size = 32, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Weysabi"
      fill="none"
    >
      <path
        d="M4 24L12 8L20 24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8L20 24L28 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.4"
      />
    </svg>
  );
}

export function GithubIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      role="img"
      aria-label="GitHub"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.94 10.94 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}
