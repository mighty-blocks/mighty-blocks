export default (
	<svg viewBox="0 0 20 20">
		<defs>
			<filter
				id="shadow5"
				x="3"
				y="4"
				width="16"
				height="14"
				filterUnits="userSpaceOnUse"
			>
				<feOffset dx="2" dy="2" input="SourceAlpha" />

				<feGaussianBlur result="blur" />

				<feFlood floodColor="#555d66" floodOpacity="0.4" />

				<feComposite operator="in" in2="blur" />

				<feComposite in="SourceGraphic" />
			</filter>
		</defs>

		<g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#shadow5)">
			<g transform="translate(3 4)" fill="#fff">
				<path
					d="M 12.44443988800049 11 L 1.555559992790222 11 C 1.249220013618469 11 1 10.77569961547852 1 10.5 L 1 1.5 C 1 1.224300026893616 1.249220013618469 1 1.555559992790222 1 L 12.44443988800049 1 C 12.75078010559082 1 13 1.224300026893616 13 1.5 L 13 10.5 C 13 10.77569961547852 12.75078010559082 11 12.44443988800049 11 Z"
					stroke="none"
				/>
				<path
					d="M 2 2 L 2 10 L 12 10 L 12 2 L 2 2 M 1.555560111999512 0 L 12.44443988800049 0 C 13.30354976654053 0 14 0.67156982421875 14 1.5 L 14 10.5 C 14 11.32843017578125 13.30354976654053 12 12.44443988800049 12 L 1.555560111999512 12 C 0.6964502334594727 12 0 11.32843017578125 0 10.5 L 0 1.5 C 0 0.67156982421875 0.6964502334594727 0 1.555560111999512 0 Z"
					stroke="none"
					fill="currentColor"
				/>
			</g>
		</g>
	</svg>
);
