export default (
	<svg viewBox="0 0 20 20">
		<defs>
			<filter
				id="shadow4"
				x="-3.5"
				y="0.5"
				width="27"
				height="27"
				filterUnits="userSpaceOnUse"
			>
				<feOffset dy="2" input="SourceAlpha" />

				<feGaussianBlur stdDeviation="3.5" result="blur" />

				<feFlood floodColor="#555d66" floodOpacity="0.251" />

				<feComposite operator="in" in2="blur" />

				<feComposite in="SourceGraphic" />
			</filter>
		</defs>

		<g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#shadow4)">
			<rect
				width="6"
				height="6"
				rx="2"
				transform="translate(7 9)"
				fill="#fff"
			/>
		</g>

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
	</svg>
);
