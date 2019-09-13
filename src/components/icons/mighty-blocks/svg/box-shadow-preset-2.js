export default (
	<svg viewBox="0 0 20 20">
		<defs>
			<filter
				id="shadow2"
				x="-1.5"
				y="1.5"
				width="23"
				height="21"
				filterUnits="userSpaceOnUse"
			>
				<feOffset dy="2" input="SourceAlpha" />

				<feGaussianBlur stdDeviation="1.5" result="blur" />

				<feFlood floodColor="#555d66" floodOpacity="0.251" />

				<feComposite operator="in" in2="blur" />

				<feComposite in="SourceGraphic" />
			</filter>
		</defs>

		<g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#shadow2)">
			<g
				transform="translate(3 4)"
				fill="#fff"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth="2"
			>
				<rect
					width="14"
					height="12"
					rx="2"
					stroke="none"
				/>

				<rect
					x="1"
					y="1"
					width="12"
					height="10"
					rx="1"
					fill="none"
				/>
			</g>
		</g>
	</svg>
);
