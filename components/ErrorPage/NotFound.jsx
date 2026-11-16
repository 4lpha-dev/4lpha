"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      {/* Error Code */}
      <span className="not-found-label">4LPHA / ERROR</span>

      {/* Animated Face */}
      <div className="not-found-face-container">
        <svg className="not-found-face" viewBox="0 0 320 380">
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="25"
          >
            {/* Eyes */}
            <g className="not-found-eyes" transform="translate(0,112.5)">
              <g transform="translate(15,0)">
                <polyline
                  className="not-found-eye-lid"
                  points="37,0 0,120 75,120"
                />
                <polyline
                  className="not-found-pupil"
                  points="55,120 55,155"
                  strokeDasharray="35 35"
                />
              </g>

              <g transform="translate(230,0)">
                <polyline
                  className="not-found-eye-lid"
                  points="37,0 0,120 75,120"
                />
                <polyline
                  className="not-found-pupil"
                  points="55,120 55,155"
                  strokeDasharray="35 35"
                />
              </g>
            </g>

            {/* Nose */}
            <rect
              className="not-found-nose"
              x="132.5"
              y="112.5"
              width="55"
              height="155"
              rx="4"
              ry="4"
            />

            {/* Mouth */}
            <g transform="translate(65,334)" strokeDasharray="102 102">
              <path
                className="not-found-mouth-left"
                d="M 0 30 C 0 30 40 0 95 0"
              />

              <path
                className="not-found-mouth-right"
                d="M 95 0 C 150 0 190 30 190 30"
              />
            </g>
          </g>
        </svg>
      </div>

      {/* Error Message */}
      <div className="not-found-content">
        <span className="not-found-code">404</span>

        <h1>Oops! Lost in Space?</h1>

        <p>
          Looks like this page doesn't exist or has been moved. Let's get you
          back on track.
        </p>

        {/* Back to Home */}
        <Link href="/" className="not-found-button">
          Back to Home
          <span aria-hidden="true">↗</span>
        </Link>
      </div>

      {/* Footer */}
      <span className="not-found-footer">© 4LPHA — Build. Test. Deliver.</span>
    </main>
  );
}
